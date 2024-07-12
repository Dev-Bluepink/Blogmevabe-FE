// utils/auth.js
import axios from "axios";

// Lưu token vào localStorage
export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
// Lấy token từ localStorage
export const getToken = () => {
  return localStorage.getItem("token");
};

// Xóa token khỏi localStorage
export const clearToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

console.log("getToken", getToken());
// Thiết lập interceptor cho Axios để tự động thêm header Authorization
export const setupAxiosInterceptors = () => {
  axios.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
