import axios from 'axios';

// Base URL for the API (you can configure this via an environment variable)
const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // Replace with your actual API URL

// Fetch all albums
export const fetchAlbumsApi = () => {
  return axios.get(`${API_BASE_URL}/albums`); // Fetch from '/albums'
};

// Add a new album (mock API, won't actually create an album)
export const addAlbumApi = (album) => {
  return axios.post(`${API_BASE_URL}/albums`, album); // Use '/albums' for mock
};

// Edit an existing album (mock API, won't actually edit an album)
export const editAlbumApi = (id, updatedAlbum) => {
  return axios.put(`${API_BASE_URL}/albums/${id}`, updatedAlbum); // Use '/albums/:id'
};

// Delete an album by ID (mock API, won't actually delete an album)
export const deleteAlbumApi = (id) => {
  return axios.delete(`${API_BASE_URL}/albums/${id}`); // Use '/albums/:id'
};
