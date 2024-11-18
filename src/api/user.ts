import instance from ".";
import { Memoirs } from "./main";

interface MypageT {
  nickname: string;
  memoirs: Omit<Memoirs, "published">[];
}

export const getMypage = async () => {
  const { data } = await instance.get<MypageT>("user");
  return data;
};
