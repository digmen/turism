import { API_URL } from "~/api/const";

const switchLanguage = () => {
    const language = localStorage.getItem('language');
    if (language === 'en') {
        return 'en';
    } else if (language === 'ru') {
        return 'ru';
    } else {
        return 'en';
    }
}

export const fetchCatalogTours = async () => {
    const language = switchLanguage()
    try {
        const response = await fetch(`${API_URL}/tour-types/?language=${language}`, {
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
    const language = switchLanguage()
    try {
        const response = await fetch(`${API_URL}/tour-types/${id}/tours/?language=${language}`, {
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
    const language = switchLanguage()
    try {
        const response = await fetch(`${API_URL}/tour/${id}/?language=${language}`, {
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
    const language = switchLanguage()
    try {
        const response = await fetch(`${API_URL}/employees/?language=${language}`, {
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
    const language = switchLanguage()
    try {
        const response = await fetch(`${API_URL}/discount-tours-slider/?language=${language}`, {
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
    const language = switchLanguage()
    try {
        const response = await fetch(`${API_URL}/tour/${id}/route/?language=${language}`, {
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
    const language = switchLanguage()
    try {
        const response = await fetch(`${API_URL}/tour/${id}/start-end/?language=${language}`, {
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
    const language = switchLanguage()
    try {
        const response = await fetch(`${API_URL}/discount-tour/${id}/?language=${language}`, {
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
    const language = switchLanguage()
    try {
        const response = await fetch(`${API_URL}/discount-tours/?language=${language}`, {
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
    const language = switchLanguage()
    try {
        const response = await fetch(`${API_URL}/country/?language=${language}`, {
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
    const language = switchLanguage()
    try {
        const response = await fetch(`${API_URL}/filter/?country_id=${countryId}&language=${language}&tour_type_id=${tourTypeId}`, {
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

