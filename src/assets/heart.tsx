interface PropsType {
  className?: string;
}

const Heart = ({ className }: PropsType) => (
  <svg
    className={className}
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 17.7917L9.29169 16.6917C5.00002 12.8 2.16669 10.225 2.16669 7.08333C2.16669 4.50833 4.18335 2.5 6.75002 2.5C8.20002 2.5 9.59169 3.175 10.5 4.23333C11.4084 3.175 12.8 2.5 14.25 2.5C16.8167 2.5 18.8334 4.50833 18.8334 7.08333C18.8334 10.225 16 12.8 11.7084 16.6917L10.5 17.7917Z"
      fill="#DE7CFF"
    />
  </svg>
);

export default Heart;
