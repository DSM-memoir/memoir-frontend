const Write = () => {
  return (
    <>
      <div className="w-[50%] h-[100vh] ">
        <input
          type="text"
          placeholder="제목을 입력하세요"
          className="font-pretendard text-[30px] outline-none p-[20px] "
        />
        <textarea
          name=""
          id=""
          className="w-[100%] h-[90%] outline-none p-[20px] resize-none "
          placeholder="당신의 회고를 작성하고 공유해 보세요~~"
        />
      </div>
    </>
  );
};

export default Write;
