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

export const getAllmemoirs = async (order: "LIKE" | "RECENT") => {
  const { data } = await instance.get<Array<Memoirs>>(`memoirs?sort=${order}`);
  return data;
};
