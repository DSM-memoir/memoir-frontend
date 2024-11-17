import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import breaks from "remark-breaks";
import { useMutation } from "@tanstack/react-query";
import { postMemoir } from "../api/write";

interface FormType {
  title: string;
  image: File | null;
  content: string;
  feels: string;
  published: boolean;
}

interface TabProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Tab = ({ isActive, onClick, children }: TabProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-medium rounded-t-lg ${
      isActive
        ? "bg-purple text-white"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`}
  >
    {children}
  </button>
);

const Edit = () => {
  const [form, setForm] = useState<FormType>({
    title: "",
    image: null,
    content: "",
    feels: "",
    published: false,
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"write" | "preview">("write");
  const [feelingTab, setFeelingTab] = useState<"write" | "preview">("write");
  const mode = window.location.pathname === "/write" ? "write" : "edit";

  const { mutate: post } = useMutation({
    mutationKey: ["posting"],
    mutationFn: () => postMemoir(form),
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setForm({ ...form, image: file });
        setImagePreview(result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "write") {
      post();
    }
    console.log("Form submitted:", form);
  };

  return (
    <main className="flex flex-col items-center w-full min-h-screen gap-8 px-12 py-4 bg-white font-pretendard">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <h1 className="text-body1 font-bold">
          <a href="/" className="transition-colors hover:text-purple">
            메뫌
          </a>
        </h1>
        <div className="flex gap-3">
          <button className="flex items-center justify-center py-3 font-bold text-white transition-colors rounded-full px-7 bg-purple hover:bg-purple/90">
            새 회고록 작성
          </button>
          <button className="flex items-center justify-center py-3 font-bold transition-colors border rounded-full px-7 border-purple text-purple hover:bg-purple/10">
            마이페이지
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-4xl gap-6 p-8 bg-white"
      >
        <div className="flex flex-col w-full gap-2">
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="제목 입력하기"
            className="w-full text-2xl font-bold transition-all outline-none focus:border-b-2 border-purple"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          {imagePreview ? (
            <div className="relative w-full aspect-video group">
              <img
                src={imagePreview}
                alt="Preview"
                className="object-cover w-full h-full rounded-lg"
              />
              <button
                type="button"
                onClick={() => {
                  setImagePreview(null);
                  setForm({ ...form, image: null });
                }}
                className="absolute p-2 text-white transition-opacity bg-red-500 rounded-full opacity-0 top-2 right-2 group-hover:opacity-100"
              >
                삭제
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="flex items-center justify-center w-full transition-colors border-2 border-gray-300 border-dashed rounded-lg aspect-video hover:border-purple"
            >
              이미지를 업로드하려면 클릭하세요
            </button>
          )}
          <input
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            ref={inputRef}
            className="hidden"
          />
        </div>

        <div className="flex flex-col w-full gap-2">
          <div className="flex gap-2 border-b">
            <Tab
              isActive={activeTab === "write"}
              onClick={() => setActiveTab("write")}
            >
              작성
            </Tab>
            <Tab
              isActive={activeTab === "preview"}
              onClick={() => setActiveTab("preview")}
            >
              미리보기
            </Tab>
          </div>

          {activeTab === "write" ? (
            <textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder="내용을 입력하세요... (마크다운 문법을 지원합니다)"
              className="w-full min-h-[200px] p-4 border rounded-lg resize-none focus:outline-none focus:border-purple transition-colors font-normal"
            />
          ) : (
            <div className="w-full min-h-[200px] p-4 border rounded-lg prose max-w-none whitespace-pre-wrap">
              <ReactMarkdown remarkPlugins={[breaks]}>
                {form.content || "내용이 없습니다."}
              </ReactMarkdown>
            </div>
          )}
        </div>

        <div className="flex flex-col w-full gap-2">
          <div className="flex gap-2 border-b">
            <Tab
              isActive={feelingTab === "write"}
              onClick={() => setFeelingTab("write")}
            >
              작성
            </Tab>
            <Tab
              isActive={feelingTab === "preview"}
              onClick={() => setFeelingTab("preview")}
            >
              미리보기
            </Tab>
          </div>

          {feelingTab === "write" ? (
            <textarea
              value={form.feels}
              onChange={(e) => setForm({ ...form, feels: e.target.value })}
              placeholder="감정을 입력하세요... (마크다운 문법을 지원합니다)"
              className="w-full min-h-[100px] p-4 border rounded-lg resize-none focus:outline-none focus:border-purple transition-colors font-normal"
            />
          ) : (
            <div className="w-full min-h-[100px] p-4 border rounded-lg prose max-w-none whitespace-pre-wrap">
              <ReactMarkdown remarkPlugins={[breaks]}>
                {form.feels || "감정이 입력되지 않았습니다."}
              </ReactMarkdown>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-4 font-bold text-white transition-colors rounded-lg bg-purple hover:bg-purple/90"
        >
          저장하기
        </button>
      </form>
    </main>
  );
};

export default Edit;
