import instance from ".";

interface Memoir {
  title: string;
  content: string;
  feels: string;
  image: File | null;
  published: boolean;
}

export const postMemoir = async (memoir: Memoir) => {
  const formData = new FormData();
  formData.append("data", JSON.stringify({ ...memoir, image: undefined }));
  if (memoir.image) {
    formData.append("image", memoir.image, "file");
  }
  const { data } = await instance.post("/memoir", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};
