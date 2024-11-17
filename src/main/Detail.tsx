import { useParams } from "react-router-dom";
import BigImgSkeleton from "../assets/bigImgSkeleton";
import Button from "./Button";
import Heart from "../assets/heart";
import OutlineHeart from "../assets/outlineHeart";
import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteMemoirFn,
  getDetail,
  patchLikes,
  patchPublished,
} from "../api/details";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const isMine = true;
  const [isHeart, setIsHeart] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["detail", id],
    queryFn: () => getDetail(id as string),
  });

  const { mutate: patchLike } = useMutation({
    mutationKey: ["like", id],
    mutationFn: () => patchLikes(id as string),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["detail"],
      }),
  });

  const { mutate: patchPublish } = useMutation({
    mutationKey: ["published", id],
    mutationFn: () => patchPublished(id as string),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["detail"],
      });
    },
  });

  const { mutate: deleteMemoir } = useMutation({
    mutationKey: ["delete", id],
    mutationFn: () => deleteMemoirFn(id as string),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["AllMemoirs"],
      });
    },
  });

  useEffect(() => {
    if (data?.liked) {
      setIsHeart(true);
    }
  }, [data]);

  return (
    <main className="bg-white flex flex-col gap-[30px] px-[50px] py-[10px] w-full h-full overflow-x-hidden font-pretendard items-center min-h-[100vh]">
      <div className="flex items-center justify-between min-w-full">
        <h1 className="font-bold text-body1">
          <a href="/">메뫌</a>
        </h1>
        <div className="flex gap-[10px]">
          <button
            className="flex items-center justify-center py-3 font-bold text-white rounded-full px-7 bg-purple"
            onClick={() => navigate("/write")}
          >
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
              <span className="leading-none text-title3">{data?.title}</span>
              {isMine && (
                <span className="text-body2">
                  {data?.published ? "공개" : "비공개"}
                </span>
              )}
            </div>
            {isMine ? (
              <div className="flex items-center gap-[10px]">
                <Button
                  label={data?.published ? "비공개" : "공개"}
                  className="text-white bg-purple"
                  onclick={() => patchPublish()}
                />
                <Button label="수정" className="text-black bg-white border" />
                <Button
                  label="삭제"
                  className="text-white bg-red"
                  onclick={() => deleteMemoir()}
                />
              </div>
            ) : (
              <div className="flex items-end gap-[5px]">
                <Heart />
                <p className="leading-normal">{data?.likes}</p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-body1">{data?.author}</p>
            <p>
              {`${data?.post_date.split("-")[0]}년 ${
                data?.post_date.split("-")[1]
              }월 ${data?.post_date.split("-")[2]}일`}
            </p>
          </div>
        </div>
        {data?.image_url ? <img src={data?.image_url} /> : <BigImgSkeleton />}
        <div className="flex flex-col w-full">
          <p className="text-body1">내용</p>
          <span className="text-body2">{data?.content}</span>
        </div>
        <div className="flex flex-col w-full">
          <p className="text-body1">느낀점</p>
          <span className="text-body2">{data?.feels}</span>
        </div>
        {!isMine && (
          <button
            className="flex p-[10px] gap-[5px] bg-purple items-center rounded-lg text-white w-fit"
            onClick={() => {
              setIsHeart(!isHeart);
              patchLike();
            }}
          >
            {isHeart ? <Heart className="animate-scaleUp" /> : <OutlineHeart />}
            <p>좋아요</p>
          </button>
        )}
      </div>
    </main>
  );
};

export default Detail;
