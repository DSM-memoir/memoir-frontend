interface Props  {
  text?: string;
  type?: string;
}

const AuthInput = ({text, type}: Props) => {
  return (
    <>
    <form className="flex flex-col" action="">
      <input className="font-pretendard w-input h-input rounded-2xl border px-3 text-body3 outline-none" placeholder={text} type={type} />
    </form>
    </>
  )
}

export default AuthInput