import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Main from "./main/Main";
import Detail from "./main/Detail";
import Edit from "./main/Edit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/detail/:id/edit" element={<Edit />} />
        <Route path="/write" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
