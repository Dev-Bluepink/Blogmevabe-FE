import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Forgotpassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch(
        "https://forum-hngc.onrender.com/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (!response.ok) {
        // Handle error
      }

      // Save email to localStorage
      localStorage.setItem("resetEmail", email);

      setStatus("success");
      navigate("/change-password");
    } catch (error) {
      setStatus("error");
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-theme-cultured">
      <div className="flex flex-col px-6 p-5 py-5 space-y-10 bg-white rounded-md shadow-2xl md:px-20">
        <h1 className="font-semibold text-2xl tracking-wide flex justify-center text-[#F8ADD2]">
          Quên Mật Khẩu
        </h1>
        <form
          className="flex flex-col items-center space-y-5 bg-white"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-96 px-4 py-3 rounded-md bg-[#F4F4F4]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="py-2 w-full font-semibold text-white rounded-md bg-[#7AC0F8] active:scale-95"
          >
            {status === "loading" ? "Đang xử lý..." : "Xác nhận"}
          </button>
        </form>
        <div className="flex justify-center w-full mb-10">
          <span> Bạn đã có tài khoản?</span>
          <Link to="/login" className="flex cursor-pointer text-[#7AC0F8]">
            Đăng Nhập
          </Link>
        </div>
      </div>
    </div>
  );
}
