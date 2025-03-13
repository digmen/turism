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

export const fetchRoute = async (id) => {
    try {
        const response = await fetch(`${API_URL}/tour/${id}/route/?language=en`, {
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
        console.error('Ошибка при получение данных путей:', error);
        throw error;
    }
}

export const fetchRouteStartEnd = async (id) => {
    try {
        const response = await fetch(`${API_URL}/tour/${id}/start-end/?language=en`, {
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
        console.error('Ошибка при получение данных путей:', error);
        throw error;
    }
}


export const fetchDiscountTour = async (id) => {
    try {
        const response = await fetch(`${API_URL}/discount-tour/${id}/?language=en`, {
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
        console.error('Ошибка при получение данных горячего тура:', error);
        throw error;
    }
}


export const fetchCatalogDiscountTours = async () => {
    try {
        const response = await fetch(`${API_URL}/discount-tours/?language=en`, {
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
        console.error('Ошибка при получение данных горячих туров:', error);
        throw error;
    }
}

export const fetchCountry = async () => {
    try {
        const response = await fetch(`${API_URL}/country/?language=en`, {
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
        console.error('Ошибка при получение данных страны:', error);
        throw error;
    }
}

export const fetchFilter = async (countryId, tourTypeId) => {
    try {
        const response = await fetch(`${API_URL}/filter/?country_id=${countryId}&language=en&tour_type_id=${tourTypeId}`, {
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
        console.error('Ошибка при получение данных фильтра:', error);
        throw error;
    }
}

