import { Memoirs } from "../api/main";
import ImgSkeleton from "../assets/imgskeleton";

interface PropsType {
  data: Memoirs;
}

const Section = ({ data }: PropsType) => {
  return (
    <a href={`/detail/${data.id}`}>
      <div className="flex-col">
        <ImgSkeleton />
        <div className="flex-col bg-[#fff] text-[#000] py-5 gap-2.5 px-5 font-pretendard">
          <p className="flex w-full text-body2">{data.title}</p>
          <p className="flex w-full text-body3">{data.content}</p>
          <div className="flex w-full text-body3 justify-between">
            <p>{data.author}</p>
            <p>{data.published}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Section;
