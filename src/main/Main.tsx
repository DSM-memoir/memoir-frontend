import { useEffect, useState } from "react";
import Section from "../components/section";
import { getAllmemoirs } from "../api/main";
import { useQuery } from "@tanstack/react-query";
import { Cookie } from "../utils/cookie";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [orderBy, setOrderBy] = useState<"RECENT" | "LIKE">("RECENT");
  const { data: allMemoirs } = useQuery({
    queryKey: ["AllMemoirs", orderBy],
    queryFn: () => getAllmemoirs(orderBy),
  });
  const navigate = useNavigate();

  const isLogin = Cookie.get("accessToken");
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  });

  return (
    <main className="bg-white flex flex-col gap-[30px] px-[50px] py-[10px] w-full h-full overflow-x-hidden font-pretendard min-h-[100vh]">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-body1">메뫌</h1>
        <div className="flex gap-[10px]">
          <input
            placeholder="검색"
            className="p-3 pr-5 text-right rounded-full border-purple border shadow-custom outline-none min-w-[264px]"
          />
          <button className="flex items-center justify-center py-3 font-bold text-white rounded-full px-7 bg-purple" onClick={() => navigate('/write')}>
            새 회고록 작성
          </button>
          <button className="flex items-center justify-center p-3 font-bold border rounded-full border-purple">
            마이페이지
          </button>
        </div>
      </div>
      <div className="flex gap-[30px] text-body1">
        <p
          className={`${
            orderBy === "RECENT" ? "text-black" : "text-gray"
          } cursor-pointer`}
          onClick={() => setOrderBy("RECENT")}
        >
          최근 올라온 메뫌
        </p>
        <p
          className={`${
            orderBy === "LIKE" ? "text-black" : "text-gray"
          } cursor-pointer`}
          onClick={() => setOrderBy("LIKE")}
        >
          많은 사랑을 받은 메뫌
        </p>
      </div>
      <section className="flex flex-wrap gap-16">
        {allMemoirs?.memoirs?.map((memoir) => (
          <Section data={memoir} key={memoir.id} />
        ))}
      </section>
    </main>
  );
};

export default Main;
