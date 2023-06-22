import axios, { AxiosInstance } from "axios";

// const baseURL = 'http://localhost:8000/api' || 'https://songs-app-backend.onrender.com/api'

const axiosConfig: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BASE_URL as string
})

export default axiosConfig