
import axios from "axios"

const api = axios.create({
    baseURL: '/api',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export async function getAnimalInfo(animalId) {
    try {
        console.log(`[API] Buscando animal ID: ${animalId}`)
        const response = await api.get(`/animais/${animalId}`)
        return response.data
    } catch (error) {
        const errorInfo = {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data
        }
        console.error('[API] Erro detalhado:', errorInfo)
        throw error
    }
}

export async function getLatestBatimentos(animalId) {
    try {
        const response = await api.get(`/batimentos/animal/${animalId}`)
        console.log("[DEBUG] Dados de batimentos:", response.data)
        return response.data?.[0] ?? null
    } catch (error) {
        console.error('[API] Erro ao buscar batimentos:', error)
        throw error
    }
}
