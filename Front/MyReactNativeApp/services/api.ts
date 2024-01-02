import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Replace with your Django backend URL

export const register = async (username: string, password: string, email: string) => {
  const response = await axios.post(`${API_URL}/register/`, { username, password, email });
  return response.data;
};

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/login/`, { username, password });
  return response.data;
};
