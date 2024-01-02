import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Replace with your Django backend URL

export const fetchTodos = async () => {
  try {
    const response = await axios.get(`${API_URL}/todos/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error.response ? error.response.data : error);
    throw error;
  }
};

export const addTodo = async (title, description = '', completed = false) => {
  try {
    const response = await axios.post(`${API_URL}/todos/`, { title, description, completed });
    return response.data;
  } catch (error) {
    console.error('Error adding todo:', error.response ? error.response.data : error);
    throw error;
  }
};

export const updateTodo = async (id, updatedTodo) => {
  try {
    const response = await axios.put(`${API_URL}/todos/${id}/`, updatedTodo);
    return response.data;
  } catch (error) {
    console.error('Error updating todo:', error.response ? error.response.data : error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${API_URL}/todos/${id}/`);
  } catch (error) {
    console.error('Error deleting todo:', error.response ? error.response.data : error);
    throw error;
  }
};

// ... other API functions like register and login ...

export const register = async (username, password, email) => {
  const response = await axios.post(`${API_URL}/register/`, { username, password, email });
  return response.data;
};

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login/`, { username, password });
  return response.data;
};
