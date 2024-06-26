import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthConsumer from "../../components/AuthContext.jsx";
import { AppLogo } from "../../components/Navbar.jsx";
import Svg from "../../components/Svg.jsx";
import Loader from "../../components/Loader.jsx";

export function Register() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = AuthConsumer();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { mutate, error, status } = useMutation({
    mutationFn: async () => {
      return await axios
        .post("/api/user/register", {
          username,
          firstName,
          lastName,
          gender,
          birthDate,
          email,
          password,
          confirmPassword,
        })
        .then((res) => login(res.data));
    },
    onSuccess: () => navigate("/home"),
  });

  useEffect(() => {
    document.title = "Mebe | Signup";
    return () => {
      document.title = "Mebe";
    };
  }, []);

  if (isAuthenticated) {
    return navigate("/home");
  }

  const {
    username: usernameError,
    email: emailError,
    password: passwordError,
  } = error ? error.response.data.errors : {};

  return (
    <div className="flex justify-center items-center w-screen h-screen md:space-x-10 bg-theme-cultured">
      <div className="flex flex-col p-5 py-10 space-y-10 bg-white rounded-md shadow-2vxl md:p-20 min-w-[430px]">
        <div className="flex justify-center md:hidden">
          <AppLogo>
            <h1 className="font-mono text-3xl font-bold tracking-tight md:block">
              Mebe
            </h1>
          </AppLogo>
        </div>
        <h1
          className={`${
            status !== "loading" && "text-2xl"
          } font-semibold tracking-wide`}
        >
          {status === "loading" ? (
            <Loader forPosts={true} />
          ) : (
            <>
              <div className="flex ">
                <div className="text-[#F8ADD2]">Đăng Ký</div>
              </div>
            </>
          )}
        </h1>
        <form
          className="flex flex-col items-center space-y-5 bg-white"
          onSubmit={(e) => {
            e.preventDefault();
            mutate();
          }}
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Tên tài khoản"
            className="w-full px-4 py-3 rounded-md bg-[#F4F4F4]"
          />
          <div className="flex w-full space-x-3">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Họ"
              className="w-1/2 px-4 py-3 rounded-md bg-[#F4F4F4]"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Tên"
              className="w-1/2 px-4 py-3 rounded-md bg-[#F4F4F4]"
            />
          </div>
          <div className="flex w-full ">
            <label className="flex items-center mr-5">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
                className="mr-2"
              />
              Nam
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
                className="mr-2"
              />
              Nữ
            </label>
          </div>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            placeholder="Ngày sinh"
            className="w-full px-4 py-3 rounded-md bg-[#F4F4F4]"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-[#F4F4F4]"
          />
          <div className="relative w-full">
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật khẩu"
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
          <div className="relative w-full">
            <input
              type={showConfirmPass ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Nhập lại mật khẩu"
              className="w-full px-4 py-3 rounded-md bg-[#F4F4F4]"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute inset-y-0 right-0 px-3 flex items-center text-sm leading-5"
            >
              {showConfirmPass ? (
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
          <button
            type="submit"
            disabled={status === "loading"}
            className="py-2 w-full font-semibold text-white rounded-md bg-[#7AC0F8] active:scale-95"
          >
            {status === "loading" ? "Logging in..." : "Đăng ký"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
