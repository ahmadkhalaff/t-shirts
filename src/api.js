import axios from 'axios';

const api = axios.create({
  baseURL: "https://651d776844e393af2d59dbc6.mockapi.io/store/",
});

export const insertShoe = payload => api.post(`/shoes`, payload);
export const getAllShoes = () => api.get(`/shoes`);
export const updateShoeById = (id, payload) => api.put(`/shoes/${id}`, payload);
export const getSingleShoe = (id) => api.get(`/shoes/${id}`);
export const deleteShoeById = id => api.delete(`/shoes/${id}`);
