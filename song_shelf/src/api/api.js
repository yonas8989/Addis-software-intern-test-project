// src/api/index.js
import axios from 'axios';

// Base URL for the API (you can configure this via an environment variable)
const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // Replace with your actual API URL

// Fetch all songs
export const fetchSongsApi = () => {
  return axios.get(`${API_BASE_URL}/posts`); // Assuming the mock service uses '/posts' as a placeholder
};

// Add a new song
export const addSongApi = (song) => {
  return axios.post(`${API_BASE_URL}/posts`, song); // Again, use '/posts' for mock
};

// Edit an existing song
export const editSongApi = (id, updatedSong) => {
  return axios.put(`${API_BASE_URL}/posts/${id}`, updatedSong); // Use '/posts/:id'
};

// Delete a song by ID
export const deleteSongApi = (id) => {
  return axios.delete(`${API_BASE_URL}/posts/${id}`); // Use '/posts/:id'
};
