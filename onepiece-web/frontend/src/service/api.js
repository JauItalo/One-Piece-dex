import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL || "http://localhost:8080",
    timeout: 8000,
});


// Busca paginada
export async function getCharactersPaginated(page = 0, size = 9) {
    const response = await api.get(`/characters?page=${page}&size=${size}`);
    return response.data;
}

// CRUD
export async function createCharacter(character) {
    const response = await api.post("/characters", character);
    return response.data;
}

export async function updateCharacter(id, character) {
    const response = await api.put(`/characters/${id}`, character);
    return response.data;
}

export async function deleteCharacter(id) {
    await api.delete(`/characters/${id}`);
}


export async function getCharacterById(id){
    const response = await api.get("/characters/" + id);
    return response.data;

}

export default api;