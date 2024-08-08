import { useState } from "react";
import OpenEyes from "../assets/OpenEyes";
import CloseEyes from "../assets/closeEyes";
import Logo60 from "../assets/logo60";
import LoginInput from "../components/AuthInput";
import SignupBtn from "../components/SignupBtn";

/**
 *
 * @returns SignupPage
 */

const Signup = () => {
  const [showPwswd, setShowPswd] = useState({
    type: "password",
    visible: false,
  });

  const [checkPswd, setCheckPswd] = useState({
    type: "password",
    visible: false,
  });

  const handlePasswordType = () => {
    setShowPswd(() => {
      if (!showPwswd.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  const CheckhandlePasswordType = () => {
    setCheckPswd(() => {
      if (!checkPswd.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  return (
    <>
      <div className="flex flex-col gap-3 h-[100dvh] justify-center items-center">
        <div className="flex">
          <Logo60 />
          <p className="font-pretendard text-title3">메뫌</p>
        </div>
        <p className="font-pretendard text-body3">
          이제는 편리하게 회고록을 작성해보세요
        </p>
        <div className="flex flex-col gap-3">
          <LoginInput text="아이디를 입력하세요" type="text" />
          <div className="relative">
            <LoginInput text="비밀번호를 입력하세요" type={showPwswd.type} />
            <div
              onClick={handlePasswordType}
              className="top-4 left-80 absolute"
            >
              {showPwswd.visible ? <OpenEyes /> : <CloseEyes />}
            </div>
          </div>
          <div className="relative">
            <LoginInput
              text="비밀번호를 재입력해주세요"
              type={checkPswd.type}
            />
            <div
              onClick={CheckhandlePasswordType}
              className="top-4 left-80 absolute"
            >
              {checkPswd.visible ? <OpenEyes /> : <CloseEyes />}
            </div>
          </div>
          <SignupBtn text="가입하기" />
        </div>
      </div>
    </>
  );
};

export default Signup;
