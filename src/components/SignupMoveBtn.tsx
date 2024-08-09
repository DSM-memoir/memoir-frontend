interface Props {
  text: string;
}

const SignupMoveBtn = ({text}: Props) => {
  return (
    <>
    <button className="font-pretendard text-body3 text-purple border border-purple w-button h-input rounded-2xl active:bg-activeBackground">{text}</button>
    </>
  )
}

export default SignupMoveBtn