import instance from ".";

interface GetDetailT {
  id: string;
  title: string;
  author: string;
  content: string;
  feels: string;
  post_date: string;
  likes: number;
  liked: boolean;
  image_url: string;
  published: boolean;
}

export const getDetail = async (id: string) => {
  const { data } = await instance.get<GetDetailT>(`memoir/${id}`);
  return data;
};

export const patchLikes = async (id: string) => {
  const { data } = await instance.patch(`memoir/like/${id}`);
  return data;
};

export const patchPublished = async (id: string) => {
  const { data } = await instance.patch(`memoir/published/${id}`);
  return data;
};
