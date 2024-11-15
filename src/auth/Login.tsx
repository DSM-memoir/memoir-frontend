import { useState } from "react";
import Logo60 from "../assets/logo60";
import LoginBtn from "../components/LoginBtn";
import SignupBtn from "../components/SignupMoveBtn";
import LoginInput from "../components/AuthInput";
import CloseEyes from "../assets/closeEyes";
import OpenEyes from "../assets/OpenEyes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Cookie } from "../utils/cookie";

/**
 *
 * @returns LoginPage
 */

const Login = () => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const navigate = useNavigate();

  const [showPswd, setShowPswd] = useState({
    type: "password",
    visible: false,
  });

  const [accountId, setAccountId] = useState("");
  const [password, setPassword] = useState("");

  console.log(accountId, password);
  

  const handlePasswordType = () => {
    setShowPswd(() => {
      if (!showPswd.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/user/login`, {
        accountId,
        password,
      }).then((res) => {
        Cookie.set("accessToken", res.data);
      })
      navigate("/");
      return response;
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <>
      <div className="flex flex-col h-[100dvh] justify-center items-center">
        <div className="flex gap-1 items-center justify-center">
          <Logo60 />
          <p className="font-pretendard text-title3">메뫌</p>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-xs items-center mt-5">
          <p className="font-pretendard text-body3 text-center">
            이제는 편리하게 회고록을 작성해보세요
          </p>
          <LoginInput
            text="아이디를 입력하세요"
            type="text"
            name="accountId"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
          />
          <div className="relative">
            <LoginInput
              text="비밀번호를 입력하세요"
              type={showPswd.type}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              onClick={handlePasswordType}
              className="top-4 left-80 absolute"
            >
              {showPswd.visible ? <OpenEyes /> : <CloseEyes />}
            </div>
          </div>
          <div className="flex gap-3 my-7">
            <LoginBtn text="로그인" onClick={handleLogin} />
            <SignupBtn text="회원가입" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
