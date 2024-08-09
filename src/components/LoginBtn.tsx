interface Props {
  text: string;
}

const LoginBtn = ({text}: Props) => {
  return (
    <>
      <button className=" font-pretendard text-white text-body3 w-button h-input rounded-2xl bg-purple active:bg-activePurple ">{text}</button>
    </>
  )
}

export default LoginBtn