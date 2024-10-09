import axios, { AxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async (): Promise<string | null> => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      return token;
    } catch (error) {
      console.error('Error getting token:', error);
      return null;
    }
  };


const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.29:3000',
    headers: {
        "Content-Type": "application/json",
    },
})

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)





export default axiosInstance;