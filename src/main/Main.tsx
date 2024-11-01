import { useState } from "react";
import Section from "../components/section";

const Main = () => {
  const [orderBy, setOrderBy] = useState<"recently" | "mostLike">("recently");
  return (
    <main className="bg-white flex flex-col gap-[30px] px-[50px] py-[10px] w-full h-full overflow-x-hidden font-pretendard">
      <div className="flex justify-between items-center">
        <h1 className="text-body1 font-bold">메뫌</h1>
        <div className="flex gap-[10px]">
          <input
            placeholder="검색"
            className="p-3 pr-5 text-right rounded-full border-purple border shadow-custom outline-none min-w-[264px]"
          />
          <button className="flex justify-center items-center px-7 py-3 bg-purple rounded-full font-bold text-white">
            새 회고록 작성
          </button>
          <button className="flex justify-center items-center p-3 border-purple border rounded-full font-bold">
            마이페이지
          </button>
        </div>
      </div>
      <div className="flex gap-[30px] text-body1">
        <p
          className={`${
            orderBy === "recently" ? "text-black" : "text-gray"
          } cursor-pointer`}
          onClick={() => setOrderBy("recently")}
        >
          최근 올라온 메뫌
        </p>
        <p
          className={`${
            orderBy === "mostLike" ? "text-black" : "text-gray"
          } cursor-pointer`}
          onClick={() => setOrderBy("mostLike")}
        >
          많은 사랑을 받은 메뫌
        </p>
      </div>
      <section className="flex flex-wrap gap-16">
        <Section id={"asdf"} />
        <Section id={"asdf"} />
        <Section id={"asdf"} />
        <Section id={"asdf"} />
        <Section id={"asdf"} />
        <Section id={"asdf"} />
        <Section id={"asdf"} />
        <Section id={"asdf"} />
        <Section id={"asdf"} />
        <Section id={"asdf"} />
        <Section id={"asdf"} />
        <Section id={"asdf"} />
      </section>
    </main>
  );
};

export default Main;
