import More from "../assets/more";
import Logo100 from "../assets/logo100";
import BigImgSkeleton from "../assets/bigImgSkeleton";
import TextPlace from "../components/TextPlace";
import { useState } from "react";

const Detail = () => {
  const [state, setState] = useState<"view" | "edit">("view");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <main className="flex flex-col w-full h-full items-center">
      <div className="w-full pt-[50px] pl-[100px] flex justify-between items-center w-[100%]">
        <div className="flex gap-[10px] items-center">
          <Logo100 />
          <div className="font-pretendard text-title2">메뫌</div>
        </div>
      </div>
      <section className="pb-[60px]">
        <div className="flex flex-col text-title2 font-pretendard max-w-[1200px] w-[100%] gap-10">
          <title className="w-full flex flex-col gap-5 select-none">
            <div className="flex items-center justify-between relative">
              <p>아 하기 싫다 아 하기 싫다</p>
              <div
                onClick={() => setModalOpen(!modalOpen)}
                className="hover:cursor-pointer"
              >
                <More />
              </div>
              {modalOpen && (
                <div className="flex-col flex absolute w-[60px] left-[calc(100%-80px)] text-body2 top-full bg-white rounded-xl border-2">
                  <div className="flex justify-end pr-[10px] hover:cursor-pointer">
                    수정
                  </div>
                  <hr />
                  <div className="flex justify-end pr-[10px] hover:cursor-pointer text-red">
                    삭제
                  </div>
                </div>
              )}
            </div>
            <span className="text-body3 ml-auto font-pretendard">
              2024년 6월 3일
            </span>
          </title>
          <BigImgSkeleton />
          <TextPlace state={state} content="content" />
          <TextPlace state={state} content="feeling" />
        </div>
      </section>
    </main>
  );
};

export default Detail;
