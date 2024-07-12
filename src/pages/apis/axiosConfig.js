import axios from "axios";

// Ensure the server at the baseURL is configured to accept requests from the origin of your client application.
// This might involve setting the Access-Control-Allow-Origin header on the server.
const axiosInstance = axios.create({
  baseURL: "https://forum-hngc.onrender.com",
  headers: {
    "Content-Type": "application/json",
    // You can add common headers here
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Automatically attach the token to the Authorization header for every request if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Handle responses
    return response;
  },
  (error) => {
    // Redirect to login if unauthorized
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
