import Logo100 from "../assets/logo100";
import Section from "../components/section";

const Main = () => {
  return (
    <main className="bg-white flex flex-col gap-[50px] px-[50px] py-[100px] w-full h-full overflow-x-hidden">
      <div className="flex justify-between items-center">
        <div className="flex gap-[10px]">
          <Logo100 />
          <div className="font-pretendard text-title1">메뫌</div>
        </div>
        <button className="bg-purple rounded-[20px] font-pretendard text-[#fff] text-body1 px-[30px] py-[15px] flex">
          글 쓰러 가기
        </button>
      </div>
      <section className="flex flex-wrap gap-16">
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
      </section>
    </main>
  );
};

export default Main;
