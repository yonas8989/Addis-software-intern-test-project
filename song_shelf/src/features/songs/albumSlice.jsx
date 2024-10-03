import { createSlice } from '@reduxjs/toolkit';

const albumSlice = createSlice({
  name: 'albums',
  initialState: {
    albums: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchAlbumsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchAlbumsSuccess: (state, action) => {
      state.loading = false;
      state.albums = action.payload;
    },
    fetchAlbumsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAlbumsRequest,
  fetchAlbumsSuccess,
  fetchAlbumsFailure,
} = albumSlice.actions;

export default albumSlice.reducer;
