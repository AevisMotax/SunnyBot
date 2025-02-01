import axios from 'axios';

// Base URL for the backend API
const BASE_URL = 'https://api.example.com'; // Replace with your actual backend URL

// QueryManager - A utility to manage all API requests
const queryManager = async (type, endpoint, data = {}, config = {}) => {
  try {
    let response;

    // Handle different HTTP methods
    switch (type) {
      case 'GET':
        response = await axios.get(`${BASE_URL}${endpoint}`, config);
        break;
      case 'POST':
        response = await axios.post(`${BASE_URL}${endpoint}`, data, config);
        break;
      case 'PUT':
        response = await axios.put(`${BASE_URL}${endpoint}`, data, config);
        break;
      case 'DELETE':
        response = await axios.delete(`${BASE_URL}${endpoint}`, config);
        break;
      default:
        throw new Error('Invalid request type');
    }

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error('API call error:', error);
    throw error;  // Rethrow the error after logging
  }
};

export default queryManager;
