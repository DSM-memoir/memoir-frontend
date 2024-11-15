interface PropsType {
  label: string;
  onclick?: () => void;
  className?: string;
}

const Button = ({ label, onclick, className }: PropsType) => {
  return (
    <button
      className={`${className} px-6 py-1 text-[14px] rounded-lg max-h-min`}
      onClick={onclick}
    >
      {label}
    </button>
  );
};

export default Button;
