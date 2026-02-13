import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL || "http://localhost:8080",
    timeout: 8000,
});

export async function getCharacters(){
    const response = await api.get("/characters");
    return response.data;
}


export async function getCharacterById(id){
    const response = await api.get("/characters/" + id);
    return response.data;

}

export default api;