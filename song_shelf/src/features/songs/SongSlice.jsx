import { createSlice } from '@reduxjs/toolkit';
import { songsList } from '../../songsList';

const initialState = {
  songs: songsList,

};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    addSong:(state, action ) =>{
      state.songs.push(action.payload)
    }
  },
});

// Export actions for dispatching
export const { addSong } = songSlice.actions;

// Export the reducer
export default songSlice.reducer;
