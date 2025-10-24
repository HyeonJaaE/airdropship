import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/v1', // Update with your FastAPI backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getHealthCheck = async () => {
  try {
    const response = await apiClient.get('/health');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching health check: ' + error.message);
  }
};

// Add more API functions as needed
