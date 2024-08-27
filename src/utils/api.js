import axios from 'axios';

const API_URL = 'https://api.example.com';

export const fetchProducts = () => axios.get(`${API_URL}/products`);
export const fetchProductById = (id) => axios.get(`${API_URL}/products/${id}`);
export const createOrder = (orderData) => axios.post(`${API_URL}/orders`, orderData);
export const fetchOrders = (userId) => axios.get(`${API_URL}/users/${userId}/orders`);
