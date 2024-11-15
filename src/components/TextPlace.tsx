import { useState } from "react";

interface Props {
  state: "edit" | "view";
  content: "feeling" | "content";
}

const TextPlace = ({ state, content }: Props) => {
  const [title, setTitle] = useState(content === "content" ? "내용" : "느낀점");
  const [text, setText] = useState(
    "이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.\
  이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.\
  이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.\
  이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.\
  이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.\
  이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.\
  이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.\
  이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.이번엔 싱가포르를 다녀왔다 정말 재미가 있었다."
  );

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>,
    fu: React.Dispatch<React.SetStateAction<string>>
  ) => {
    fu(e.target.value);
  };

  return (
    <div className="flex flex-col">
      {state === "edit" && (
        <div className="flex flex-col gap-[30px] text-body1">
          <input
            onChange={(e) => handleChange(e, setTitle)}
            value={title}
            className="p-1 rounded-lg"
          />
          <textarea
            className="p-3.5 rounded-lg text-body2 text-wrap resize-none border"
            rows={10}
            onChange={(e) => handleChange(e, setText)}
            value={text}
          />
        </div>
      )}
      {state === "view" && (
        <div className="flex flex-col gap-[30px] text-body1">
          <h1>{title}</h1>
          <span className="text-body2">{text}</span>
        </div>
      )}
    </div>
  );
};

export default TextPlace;
