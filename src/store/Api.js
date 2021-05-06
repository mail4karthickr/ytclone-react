import axios from 'axios';
const KEY = 'AIzaSyCJOABHCSxbTM8pC5027e6b26YyPfGB4_4';

const api = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        key: KEY
    }
});

export default api;