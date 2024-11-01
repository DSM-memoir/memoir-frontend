import { useNavigate, useParams } from "react-router-dom";
import BigImgSkeleton from "../assets/bigImgSkeleton";
import Button from "./Button";
import Heart from "../assets/heart";
import OutlineHeart from "../assets/outlineHeart";
import { useState } from "react";

const Detail = () => {
  const { id } = useParams();
  const isMine = true;
  const [isHeart, setIsHeart] = useState(false);
  return (
    <main className="bg-white flex flex-col gap-[30px] px-[50px] py-[10px] w-full h-full overflow-x-hidden font-pretendard items-center min-h-[100vh]">
      <div className="flex items-center justify-between min-w-full">
        <h1 className="font-bold text-body1">
          <a href="/">메뫌</a>
        </h1>
        <div className="flex gap-[10px]">
          <button className="flex items-center justify-center py-3 font-bold text-white rounded-full px-7 bg-purple">
            새 회고록 작성
          </button>
          <button className="flex items-center justify-center p-3 font-bold border rounded-full border-purple">
            마이페이지
          </button>
        </div>
      </div>
      <div className="flex flex-col w-[1200px] gap-10 py-[60px] items-center">
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <div className="flex items-end gap-4">
              <span className="leading-none text-title3">
                맛있는 제목이에요
              </span>
              {isMine && <span className="text-body2">공개</span>}
            </div>
            {isMine ? (
              <div className="flex items-center gap-[10px]">
                <Button label="비공개" className="text-white bg-purple" />
                <Button label="수정" className="text-black bg-white border" />
                <Button label="삭제" className="text-white bg-red" />
              </div>
            ) : (
              <div className="flex items-end gap-[5px]">
                <Heart />
                <p className="leading-normal">234</p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-body1">나무에서떨어진나무늘보</p>
            <p>2024년 6월 3일</p>
          </div>
        </div>
        <BigImgSkeleton />
        <div className="flex flex-col">
          <p className="text-body1">내용</p>
          <span className="text-body2">
            이번엔 싱가포르를 다녀왔다.이번엔 싱가포르를 다녀왔다.이번엔
            싱가포르를 다녀왔다.이번엔 싱가포르를 다녀왔다.이번엔 싱가포르를
            다녀왔다.이번엔 싱가포르를 다녀왔다.이번엔 싱가포르를
            다녀왔다.이번엔 싱가포르를 다녀왔다.이번엔 싱가포르를
            다녀왔다.이번엔 싱가포르를 다녀왔다.이번엔 싱가포르를
            다녀왔다.이번엔 싱가포르를 다녀왔다.이번엔 싱가포르를
            다녀왔다.이번엔 싱가포르를 다녀왔다.이번엔 싱가포르를 다녀왔다.
          </span>
        </div>
        <div className="flex flex-col">
          <p className="text-body1">느낀점</p>
          <span className="text-body2">
            정말 재미가 있었다.정말 재미가 있었다.정말 재미가 있었다.정말 재미가
            있었다.정말 재미가 있었다.정말 재미가 있었다.정말 재미가 있었다.정말
            재미가 있었다.정말 재미가 있었다.정말 재미가 있었다.정말 재미가
            있었다.정말 재미가 있었다.정말 재미가 있었다.정말 재미가 있었다.정말
            재미가 있었다.정말 재미가 있었다.정말 재미가 있었다.정말 재미가
            있었다.정말 재미가 있었다.정말 재미가 있었다.정말 재미가 있었다.
          </span>
        </div>
        {!isMine && (
          <button
            className="flex p-[10px] gap-[5px] bg-purple items-center rounded-lg text-white w-fit"
            onClick={() => setIsHeart(!isHeart)}
          >
            {isHeart ? <OutlineHeart /> : <Heart className="animate-scaleUp" />}
            <p>좋아요</p>
          </button>
        )}
      </div>
    </main>
  );
};

export default Detail;
