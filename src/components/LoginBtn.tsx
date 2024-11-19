interface Props {
  text: string;
  onClick?:() => void
}

const LoginBtn = ({text, onClick}: Props) => {
  return (
    <>
      <button onClick={onClick} className=" font-pretendard text-white text-body3 w-button h-input rounded-2xl bg-purple active:bg-activePurple ">{text}</button>
    </>
  )
}

export default LoginBtn