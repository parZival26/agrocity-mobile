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

export const createUserPlant = async ({plantId, name}: {plantId: number, name:string}): Promise<{mesage: string} | { error: string }> => {
    try {
        const dataToSend = { userPlants:[{ name, plantId }]};

        const response = await axiosInstance.post("plant/userPlant/", dataToSend);
        return response.data;

    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.response?.status === 404) {
                return { error: 'No se encontraron plantas' };
            } else if (error.response?.status === 401) {
                return { error: 'No autorizado' };
            } else if (error.response?.status === 400) {
                let errorMessage = error.response.data['message'];

                if (Array.isArray(errorMessage)) {
                    errorMessage = errorMessage.join(', ');
                }

                return { error: `Error en los datos: ${errorMessage}` };
            }
            console.error("Axios error details:", error);
            console.error("Config: ", error.config);
            console.error("Response: ", error.response);
            return { error: 'Error desconocido de Axios' };
        }
        return { error: 'Error desconocido' };
    }
}

