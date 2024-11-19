import { useState } from "react";
import OpenEyes from "../assets/OpenEyes";
import CloseEyes from "../assets/closeEyes";
import Logo60 from "../assets/logo60";
import LoginInput from "../components/AuthInput";
import SignupBtn from "../components/SignupBtn";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Cookie } from "../utils/cookie";

/**
 *
 * @returns SignupPage
 */

const Signup = () => {

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const [showPwswd, setShowPswd] = useState({
    type: "password",
    visible: false,
  });

  const [checkPswd, setCheckPswd] = useState({
    type: "password",
    visible: false,
  });

  const [accountId, setAccountId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPswd, setConfirmPswd] = useState("");
  const [error, setError] = useState("");
  
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

  const handleSignup = async () => {
    if (password === confirmPswd) {
      try {
        const response = await axios.post(`${BASE_URL}/user/signup`, {
          accountId,
          nickname,
          password
        }).then((res) => {
          Cookie.set("accountToken", res.data);
        })
        navigate("/login");
        return response;
      } catch(err) {
        console.error(err);
      }
    } else {
      setError("비밀번호가 일치하지 않습니다")
    }
  }

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
          <LoginInput text="아이디를 입력하세요" type="text" name="accountId" value={accountId} onChange={(e) => setAccountId(e.target.value)} />
          <LoginInput text="이름을 입력하세요" type="text" name="username" value={nickname} onChange={(e) => setNickname(e.target.value)} />
          <div className="relative">
            <LoginInput
              text="비밀번호를 입력하세요"
              type={showPwswd.type}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
              name="checkpassword"
              value={confirmPswd}
              onChange={(e) => setConfirmPswd(e.target.value)}
            />
            <div
              onClick={CheckhandlePasswordType}
              className="top-4 left-80 absolute"
            >
              {checkPswd.visible ? <OpenEyes /> : <CloseEyes />}
            </div>
          </div>
          {error && <p className="text-red">{error}</p>}
          <SignupBtn onClick={handleSignup} text="가입하기" />
        </div>
      </div>
    </>
  );
};

export default Signup;
