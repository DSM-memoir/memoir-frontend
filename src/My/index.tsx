import { memo, useEffect, useState } from "react";
import axios from "axios";
import Section from "../components/section";
import { Cookie } from "../utils/cookie";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [memoirs, setMemoirs] = useState<any[]>([]);
  const [nickname, setNickname] = useState<string>("");

  const getCookie = (key: string): string | undefined => {
    const cookies = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${key}=`));
    return cookies ? cookies.split("=")[1] : undefined;
  };

  useEffect(() => {
    const fetchMemoirs = async () => {
      const token = getCookie("accessToken");
      if (!token) {
        console.error("Access token이 없습니다.");
        return;
      }

      try {
        const response = await axios.get(`${BASE_URL}/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.memoirs)

        if (response.data.token) {
          Cookie.set("accessToken", response.data.token);
        }

        setNickname(response.data.nickname || "사용자");
        setMemoirs(response.data.memoires || []);
        
      } catch (err) {
        console.error("Error fetching memoirs: ", err);
      }
    };

    fetchMemoirs();
  }, []);

  const handleLogout = () => {
    Cookie.remove("accessToken");
    navigate("/login");
  };

  return (
    <main className="flex flex-col gap-[50px] px-[50px] py-[50px]">
      <div className="flex justify-between">
        <p className="font-pretendard text-body1">메뫌</p>
        <button
          onClick={() => navigate("/write")}
          className="font-pretendard font-bold text-tiny text-white min-w-[135px] min-h-[48px] bg-lightPurple rounded-[32px]"
        >
          새 회고록 작성
        </button>
      </div>
      <div className="flex justify-between">
        <p className="font-pretendard text-title3">
          안녕하세요, <span className="text-lightPurple">{nickname}</span>님
        </p>
        <button
          onClick={handleLogout}
          className="font-pretendard text-[20px] text-red min-w-[180px] min-h-[57px] shadow-innerShadow rounded-[16px]"
        >
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
  );
};

export default MyPage;
