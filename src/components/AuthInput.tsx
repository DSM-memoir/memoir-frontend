interface Props  {
  text?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e:any) => void;
}

const AuthInput = ({text, type, value, onChange}: Props) => {
  return (
    <>
    <form className="flex flex-col" action="">
      <input className="font-pretendard w-input h-input rounded-2xl border px-3 text-body3 outline-none" placeholder={text} type={type} value={value} onChange={onChange} />
    </form>
    </>
  )
}

export default AuthInput