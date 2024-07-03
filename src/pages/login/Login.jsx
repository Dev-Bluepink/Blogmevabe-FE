import React, { useEffect, useState } from "react";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AuthConsumer from "../../components/AuthContext.jsx";
import Loader from "../../components/Loader.jsx";
import Svg from "../../components/Svg.jsx";

export function Login() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { isAuthenticated, login } = AuthConsumer();
  const navigate = useNavigate();
  const { mutate, status, error, reset } = useMutation({
    mutationFn: async () => {
      return await axios
        .post("/api/user/login", { email, password, rememberMe })
        .then((res) => login(res.data));
    },
    onSuccess: () => navigate("/home"),
  });

  useEffect(() => {
    document.title = "Donghanhcungcon | Login";
    return () => {
      document.title = "Donghanhcungcon";
    };
  }, []);

  if (isAuthenticated) {
    return navigate("/home");
  }

  const responseFacebook = (response) => {
    console.log(response);
    axios
      .post("/api/user/login/facebook", { accessToken: response.accessToken })
      .then((res) => login(res.data))
      .then(() => navigate("/home"))
      .catch((err) => console.error(err));
  };

  const responseGoogle = (response) => {
    console.log(response);
    axios
      .post("/api/user/login/google", { tokenId: response.credential })
      .then((res) => login(res.data))
      .then(() => navigate("/home"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen md:space-x-10 bg-theme-cultured">
      <div
        className="flex flex-col px-6 p-5 py-5 space-y-10 
       bg-white rounded-md shadow-2xl md:px-20"
        style={{
          paddingBottom: "3rem",
        }}
      >
        <div className="flex justify-center md:hidden"></div>
        <h1
          className={`font-semibold ${
            status !== "loading" && "text-2xl "
          } tracking-wide ${error && "font-bold uppercase text-theme-orange"}`}
        >
          {error ? (
            error.response.data.message
          ) : status === "loading" ? (
            <Loader forPosts={true} />
          ) : (
            <>
              <div className="flex flex-col items-center">
                <div className="text-[#F8ADD2]">
                  Đăng nhập tài khoản của bạn
                </div>
                <p className="text-sm text-center text-gray-500 py-2">
                  Chào mừng bạn trở lại! Chọn cách đăng nhập
                </p>
              </div>
            </>
          )}
        </h1>
        <div className="flex justify-center space-x-5 items-center w-full">
          <div className="flex flex-row justify-center items-center space-x-2 cursor-pointer bg-[#EEF9FF] min-w-[150px] py-2 px-2 mr-5 rounded-md">
            <span className="w-8 h-8">
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="Facebook"
              />
            </span>
            Facebook
          </div>
          <div className="flex flex-row justify-center items-center space-x-2 cursor-pointer bg-[#EEF9FF] min-w-[150px] py-2 px-2 rounded-md">
            <span className="w-8 h-8">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google"
              />
            </span>
            Google
          </div>
        </div>
        <p className="flex items-center text-[#949494]">
          <span className="flex-grow border-t border-gray-500 mx-2 bg-[#949494] "></span>
          hoặc tiếp tục với email của bạn
          <span className="flex-grow border-t border-gray-500 mx-2 bg-[#949494]"></span>
        </p>
        <form
          className="flex flex-col items-center space-y-5 bg-white"
          onSubmit={(e) => {
            e.preventDefault();
            mutate();
          }}
        >
          <input
            type="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tên tài khoản"
            className="w-full px-4 py-3 rounded-md bg-[#F4F4F4]"
          />
          <div className="relative w-full">
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md bg-[#F4F4F4]"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute inset-y-0 right-0 px-3 flex items-center text-sm leading-5"
            >
              {showPass ? (
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/visible.png"
                  alt="hide"
                  className="w-5 h-5"
                />
              ) : (
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/invisible.png"
                  alt="show"
                  className="w-5 h-5"
                />
              )}
            </button>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2 bg-[#7AC0F8] "
              />
              <label className="text-[#7AC0F8]">Lưu mật khẩu</label>
            </div>
            <Link
              to="/forgot-password"
              className="flex  cursor-pointer group text-[#7AC0F8] "
            >
              Quên mật khẩu ?
            </Link>
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="py-2 w-full font-semibold text-white rounded-md bg-[#7AC0F8] active:scale-95"
          >
            {status === "loading" ? "Logging in..." : "Đăng nhập"}
          </button>
        </form>
        <div className="flex justify-between w-full mt-4 mb-10">
          <span> Bạn chưa có tài khoản?</span>
          <Link to="/register" className="flex  cursor-pointer text-[#7AC0F8]">
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
