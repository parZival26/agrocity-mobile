import { AxiosError } from "axios";
import axiosInstance from "./axios";
import { Mission, UserPlantMission } from "@/interfaces/Mission";


export const getUserPlantMissions = async (userPlantId: number): Promise<UserPlantMission[] | { error: string }> => {
    try {
        const response = await axiosInstance.get(`/mission/userPlant/${userPlantId}`);
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

export const getMission = async (id: number):Promise<Mission | {error: string} >=> {
    try {
        const response = await axiosInstance.get(`/mission/${id}`);
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


export const completeMission = async (id: number):Promise<boolean | {error: string} >=> {
    try {
        const response = await axiosInstance.patch(`/mission/completeMission/${id}`);
        if (response.status === 200) {
            return true;
        }
        return false;
        
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