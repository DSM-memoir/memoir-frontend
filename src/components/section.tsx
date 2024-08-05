import ImgSkeleton from "../assets/imgskeleton";

const Section = () => {
  return (
    <div className="flex-col">
      <ImgSkeleton />
      <div className="flex-col bg-[#fff] text-[#000] py-5 gap-2.5 px-5 font-pretendard">
        <p className="flex w-full text-body2">제목</p>
        <p className="flex w-full text-body3">설명</p>
        <p className="flex w-full text-body3 justify-end">날짜</p>
      </div>
    </div>
  );
};

export default Section;
