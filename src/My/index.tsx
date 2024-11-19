import { useEffect, useState } from "react";
import axios from "axios";
import Section from "../components/section";

const MyPage = () => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [orderBy, setOrderBy] = useState<"MY">("MY");
  const [memoirs, setMemoirs] = useState<any[]>([]);

  useEffect(() => {
    const fetchMemoirs = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const response = await axios.get(`${BASE_URL}/memoirs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            orderBy,
          },
        });
        setMemoirs(response.data.memoirs);
      } catch (err) {
        console.error("데이터 요청 중 오류 발생:", err);
      }
    };

    fetchMemoirs();
  }, [orderBy]);

  return (
    <>
      <main className="flex flex-col gap-[50px] px-[50px] py-[50px]">
        <div className="flex justify-between">
          <p className="font-pretendard text-body1">메뫌</p>
          <button className="font-pretendard font-bold text-tiny text-white min-w-[135px] min-h-[48px] bg-lightPurple rounded-[32px]">
            새 회고록 작성
          </button>
        </div>
        <div className="flex justify-between">
          <p className="font-pretendard text-title3">
            안녕하세요, <span className="text-lightPurple">{"username"}</span>님
          </p>
          <button className="font-pretendard text-[20px] text-red min-w-[180px] min-h-[57px] shadow-innerShadow rounded-[16px]">
            로그아웃
          </button>
        </div>
        <div className="flex flex-col gap-[50px]">
          <p className="font-pretendard text-title3">내가 쓴 회고록</p>
          <section className="flex flex-wrap gap-16">
            {memoirs.map((memoir) => (
              <Section key={memoir.id} data={memoir} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default MyPage;
