import { AxiosError } from "axios";
import axiosInstance from "./axios";
import { UserPlant } from "@/interfaces/Plants";



export const getUserPlants = async (): Promise<UserPlant[] | { error: string }> => {
    try {
        const response = await axiosInstance.get("plant/userPlant/");
        return response.data;
    } catch (error) {
       if (error instanceof AxiosError) {
           if (error.response?.status === 404) {
               return { error: 'No se encontraron plantas' };
           } else if (error.response?.status === 401) {
               return { error: 'No autorizado' };
           }
           console.error("Axios error details:", error);
           console.error("Config: ", error.config);
           console.error("Response: ", error.response);
           return { error: 'Error desconocido de Axios' };
       }
       return { error: 'Error desconocido' };
    }
}

