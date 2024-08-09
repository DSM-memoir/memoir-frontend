import { useState } from "react";

interface Props {
  state: "edit" | "view";
  content: "feeling" | "content";
}

const TextPlace = ({ state, content }: Props) => {
  const [title, setTitle] = useState(content === "content" ? "내용" : "느낀점");
  const [text, setText] = useState(
    "이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.\
  이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.\
  이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.\
  이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.\
  이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.\
  이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.\
  이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.\
  이번엔 싱가포르를 다녀왔다 정말 재미가 있었다.이번엔 싱가포르를 다녀왔다 정말 재미가 있었다."
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fu: React.Dispatch<React.SetStateAction<string>>
  ) => {
    fu(e.target.value);
  };

  return (
    <div className="flex flex-col">
      {state === "edit" && (
        <>
          <input onChange={(e) => handleChange(e, setTitle)}>{title}</input>
          <input onChange={(e) => handleChange(e, setText)}>{text}</input>
        </>
      )}
      {state === "view" && (
        <>
          <h1>{title}</h1>
          <span className="text-body2">{text}</span>
        </>
      )}
    </div>
  );
};

export default TextPlace;
