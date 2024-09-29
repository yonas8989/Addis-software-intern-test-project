// src/features/songs/songSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [],
  loading: false,
  error: null,
};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    // Start fetching or modifying songs (for saga)
    fetchSongsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },

    // Success in fetching songs
    fetchSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.loading = false;
    },

    // Error occurred during song fetch
    fetchSongsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Add a new song
    addSongRequest: (state) => {
      state.loading = true;
    },
    addSongSuccess: (state, action) => {
      state.songs.push(action.payload);
      state.loading = false;
    },
    addSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Edit an existing song
    editSongRequest: (state) => {
      state.loading = true;
    },
    editSongSuccess: (state, action) => {
      const { id, updatedSong } = action.payload;
      const existingSongIndex = state.songs.findIndex((song) => song.id === id);
      if (existingSongIndex !== -1) {
        state.songs[existingSongIndex] = updatedSong;
      }
      state.loading = false;
    },
    editSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Delete a song
    deleteSongRequest: (state) => {
      state.loading = true;
    },
    deleteSongSuccess: (state, action) => {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
      state.loading = false;
    },
    deleteSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongRequest,
  addSongSuccess,
  addSongFailure,
  editSongRequest,
  editSongSuccess,
  editSongFailure,
  deleteSongRequest,
  deleteSongSuccess,
  deleteSongFailure,
} = songSlice.actions;

// Export the reducer
export default songSlice.reducer;
