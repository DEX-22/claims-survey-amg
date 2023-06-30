import axios from 'axios';

const amgApi = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_AMG_URL,
    headers: { 
      'Authorization':'',
      'Content-Type': 'application/json'
      },
    
  });

export default amgApi;