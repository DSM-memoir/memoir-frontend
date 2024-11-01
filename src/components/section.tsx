import ImgSkeleton from "../assets/imgskeleton";

interface PropsType {
  id: string;
}

const Section = ({ id }: PropsType) => {
  return (
    <a href={`/detail/${id}`}>
      <div className="flex-col">
        <ImgSkeleton />
        <div className="flex-col bg-[#fff] text-[#000] py-5 gap-2.5 px-5 font-pretendard">
          <p className="flex w-full text-body2">제목</p>
          <p className="flex w-full text-body3">설명</p>
          <div className="flex w-full text-body3 justify-between">
            <p>지은이</p>
            <p>날짜</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Section;
