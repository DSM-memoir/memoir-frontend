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
  formData.append(
    "data",
    new Blob([JSON.stringify({ ...memoir, image: undefined })], {
      type: "application/json",
    })
  );
  if (memoir.image) {
    formData.append("image", memoir.image);
  }
  const { data } = await instance.post("/memoir", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const editMemoir = async ({
  id,
  form,
}: {
  id: string;
  form: { title: string; content: string; feels: string; image: File | null };
}) => {
  const formData = new FormData();
  formData.append(
    "data",
    new Blob([JSON.stringify({ ...form })], {
      type: "application/json",
    })
  );
  if (form.image) {
    formData.append("image", form.image);
  }
  const { data } = await instance.patch(`/memoir/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};
