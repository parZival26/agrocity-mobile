import { AxiosError } from "axios";
import axiosInstance from "./axios"
import { PlantDetail, PlantWiki } from "@/interfaces/Plants";



export const getPlants = async (): Promise<PlantWiki[] | { error: string }> => {
    try {
       const response = await axiosInstance.get("wiki/"); 
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


export const getPlant = async (id: number): Promise<PlantDetail | { error: string }> => {
    try {
        const response = await axiosInstance.get(`wiki/${id}/`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.response?.status === 404) {
                return { error: 'No se encontró la planta' };
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