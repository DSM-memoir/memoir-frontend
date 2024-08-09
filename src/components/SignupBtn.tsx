interface Props {
  text?: string;
}


const SignupBtn = ({text}: Props) => {
  return (
    <>
      <button className="font-pretendard text-body3 w-input h-input text-white bg-purple rounded-2xl active:bg-activePurple ">{text}</button>
    </>
  )
}

export default SignupBtn