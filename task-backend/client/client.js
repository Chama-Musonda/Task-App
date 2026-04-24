import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://fictional-space-potato-5vq4xjqxvxjp27q57-3000.app.github.dev/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

apiClient.interceptors.response.use(
  (response) => response, 
  (error) => {
    // If the server sends a 401 (Unauthorized), the user's session expired
    if (error.response?.status === 401) {
      console.warn("Session expired. Redirecting to login...");
      // Optional: window.location.href = '/signin';
    }
    
    // Always return the error so the specific page can still catch it
    return Promise.reject(error);
  }
);

export default apiClient;