interface Props {
  title: string;
  modalClose: () => void;
}

const Modal = ({ title, modalClose }: Props) => {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] fixed top-0 left-0">
      <div
        className="w-[100%] h-[100%] bg-[#000] opacity-25"
        onClick={modalClose}
      ></div>
      <div className="bg-white opacity-100 absolute flex flex-col px-[55px] py-[40px] gap-8 rounded-[30px]">
        <span className="text-body1">{title}</span>
        <div className="flex gap-5 justify-center">
          <button className="w-[90px] h-[40px] flex justify-center items-center">
            <span className="text-body2">취소</span>
          </button>
          <button className="w-[90px] h-[40px] flex justify-center items-center">
            <span className="text-body2">확인</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
