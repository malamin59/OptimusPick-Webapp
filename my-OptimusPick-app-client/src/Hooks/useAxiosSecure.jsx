// import axios from "axios";
// import React from "react";
// import UseAuth from "./UseAuth";

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   withCredentials: true,
// });

// const useAxiosSecure = () => {
//   const { user } = UseAuth();
//   const token = user?.accessToken;
//   axiosInstance.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${token}`;

//     return config;
//   });

//   return axiosInstance;
// };

// export default useAxiosSecure;


import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { user } = UseAuth();
  const token = user?.accessToken;

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor); // Cleanup on unmount
    };
  }, [token]);

  return axiosInstance;
};

export default useAxiosSecure;
