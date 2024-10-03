import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "./axios";
import { AxiosError } from "axios";


interface LoginData {
    username: string;
    password: string;
}


export const login = async (loginData: LoginData) => {
    try {
        const response = await axiosInstance.post("/auth/login", loginData);
        
        
        const data = response.data;
        
        await AsyncStorage.setItem('access_token', data.access_token);
        return data;

    } catch (error) {
       if (error instanceof AxiosError) {
            if (error.response?.status === 404) {
                return { error: 'Usuario o contraseña incorrectos' };
            }
            console.error("Axios error details:", error);
            console.error("Config: ", error.config);
            console.error("Response: ", error.response);
            return { error: 'Error desconocido' };
           
       }
       
    }
}

