import instance from ".";

export interface Memoirs {
  id: string;
  title: string;
  author: string;
  content: string;
  imageUrl: string;
  published: boolean;
  postDate: string;
}

export interface AllMemoirsT {
  memoirs: Memoirs[];
}

export const getAllmemoirs = async (order: "LIKE" | "RECENT" | "MY") => {
  const { data } = await instance.get<AllMemoirsT>(`memoir?sort=${order}`);
  return data;
};
