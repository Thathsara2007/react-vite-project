import axios from 'axios';

export const backendApi = axios.create({baseURL: 'http://localhost:3000/api'});

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust to your backend URL

export const submitContactForm = async (formData: {
    email: string;
    subject: string;
    message: string;
}) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/contact`, formData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to submit contact form' };
    }
};

// Optional: For verification
export const fetchContactMessages = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/contact`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch contact messages' };
    }
};