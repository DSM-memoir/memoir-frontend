export const urlToBlob = async (url: string) => {
  const response = await fetch(url);
  const data = await response.blob();
  const ext = url.split(".").pop();
  const metadata = { type: `image/${ext}` };
  return new File([data], "image", metadata);
};
