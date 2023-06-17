import axios from 'axios';



const amgApi = axios.create({
    baseURL: "http://localhost:8000/api/v1/",
    headers: { 
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2ODY5MzIyNzUsImV4cCI6MTY4Njk3Nzk5NSwibmJmIjoxNjg2OTMyMjc1LCJqdGkiOiJIR3dtQXNTYkZRNkhlM3JTIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.w41sNRmq1_939Irunvzn7_m3-9I82eRijzNiq-1z4T4', 
      'Content-Type': 'application/json'
      },
    
  });

  // amgApi.interceptors.request.use(
  //   (config) => {
  //     const token = localStorage.getItem("accessToken");
  //     if (token) {
  //       config.headers["Authorization"] = `Bearer ${token}`; // for Laravel or Spring boot <application></application>
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  export default amgApi;