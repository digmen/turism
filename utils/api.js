import { API_URL } from "~/api/const";

export const fetchCatalogTours = async () => {
    try {
        const response = await fetch(`${API_URL}/tour-types/?language=en`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при получении туров:', error);
        throw error;
    }
};

export const fetchDetailsCatalogTours = async (id) => {
    try {
        const response = await fetch(`${API_URL}/tour-types/${id}/tours/?language=en`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при получении каталога деталей туров:', error);
        throw error;
    }
};


export const fetchTour = async (id) => {
    try {
        const response = await fetch(`${API_URL}/tour/${id}/?language=en`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при получении тура:', error);
        throw error;
    }
};

export const fetchEmployees = async () => {
    try {
        const response = await fetch(`${API_URL}/employees/?language=en`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при получении сотрудников:', error);
        throw error;
    }
};


export const fetchSlider = async () => {
    try {
        const response = await fetch(`${API_URL}/discount-tours-slider/?language=en`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Ошибка при получение данных слайдера', error);
        throw error
    }
}