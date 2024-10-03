// src/redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import songSlice from '../features/songs/SongSlice'; // Import your song slice reducer

// Combine your slices (add more as needed)
const rootReducer = combineReducers({
  songs: songSlice, // Add more slices if you have more features
});

export default rootReducer;
