interface Props {
  text?: string;
  onClick?: () => void;
}

const SignupBtn = ({ text, onClick }: Props) => {


  return (
    <>
      <button
        onClick={onClick}
        className="font-pretendard text-body3 w-input h-input text-white bg-purple rounded-2xl active:bg-activePurple "
      >
        {text}
      </button>
    </>
  );
};

export default SignupBtn;
