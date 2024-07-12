import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ChangePassword() {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password match

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(
        "https://forum-hngc.onrender.com/auth/reset-password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
          },
          body: JSON.stringify({
            email: localStorage.getItem("resetEmail"),
            otp,
            newPassword,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to reset password.");
      }

      setStatus("success");
      // Handle success scenario (e.g., show a success message, redirect)
      // Redirect to login page after successful password reset
      // Example: history.push("/login");
    } catch (error) {
      setStatus("error");
      console.error("Error resetting password:", error);
      // Handle error scenario (e.g., show an error message)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-theme-cultured">
      <div className="flex flex-col px-6 p-5 py-5 space-y-10 bg-white rounded-md shadow-2xl md:px-20">
        <h1 className="font-semibold text-2xl tracking-wide flex justify-center text-[#F8ADD2]">
          Đổi Mật Khẩu
        </h1>
        <form
          className="flex flex-col items-center space-y-5 bg-white"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Nhập mã chúng tôi đã gửi về cho bạn"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-96 px-4 py-3 rounded-md bg-[#F4F4F4]"
          />
          <input
            type="password"
            placeholder="Mật khẩu mới"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-96 px-4 py-3 rounded-md bg-[#F4F4F4]"
          />
          <input
            type="password"
            placeholder="Nhập lại mật khẩu mới"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-96 px-4 py-3 rounded-md bg-[#F4F4F4] ${
              !passwordsMatch ? "border-red-500" : ""
            }`}
          />
          {!passwordsMatch && (
            <p className="text-red-500 text-sm">
              Mật khẩu không khớp. Vui lòng nhập lại.
            </p>
          )}
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
