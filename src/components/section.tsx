import ImgSkeleton from "../assets/imgskeleton";

const Section = () => {
  return (
    <div className="flex-col">
      <ImgSkeleton />
      <div>
        <p>제목</p>
        <p>설명</p>
        <p>날짜</p>
      </div>
    </div>
  );
};

export default Section;
