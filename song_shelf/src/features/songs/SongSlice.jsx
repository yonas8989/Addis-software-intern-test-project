import { createSlice } from '@reduxjs/toolkit';
import { songsList } from '../../songsList';


const songSlice = createSlice({
  name: 'songs',
  initialState: songsList,
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },
    updateSong: (state, action) => {
      const { id, title, genre, artist, album } = action.payload;
      
      // Find the song by id
      const us = state.find(song => song.id == id);

      // Log the found song's properties to debug
      console.log('Found song:', us);

      if (us) {
        // Update the song properties
        us.title = title;
        us.genre = genre;
        us.artist = artist;
        us.album = album;

        // Log after updating to verify the update
        console.log('Updated song:', us);
      } else {
        console.error('Song not found');
      }
    }
  },
});


// Export actions for dispatching
export const { addSong, updateSong } = songSlice.actions;

// Export the reducer
export default songSlice.reducer;
