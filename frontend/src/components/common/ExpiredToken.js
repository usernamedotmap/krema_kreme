import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// Attach interceptor directly, but remove store reference
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const isTokenExpired =
      error.response?.status === 401 &&
      error.response?.data?.message === "Token expired";

    if (isTokenExpired) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userInfo");

      // Optional: add a gentle reload delay
      setTimeout(() => {
        window.location.href = "/login";
      }, 500);
    }

    return Promise.reject(error);
  }
);

export default api;