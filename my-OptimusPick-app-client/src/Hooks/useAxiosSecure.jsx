import axios from 'axios';
import React from 'react';
import UseAuth from './UseAuth';


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const useAxiosSecure = () => {
    const { user, logOut } = UseAuth();
    const token = user?.accessToken;
    axiosInstance.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${token}`

        return config

    })

    return axiosInstance
};

export default useAxiosSecure;