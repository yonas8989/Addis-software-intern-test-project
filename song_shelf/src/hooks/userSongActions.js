// src/hooks/useSongActions.js
import { useDispatch } from 'react-redux';
import {
  fetchSongsRequest,
  addSongRequest,
  editSongRequest,
  deleteSongRequest,
} from '../features/songs/songSlice';

const useSongActions = () => {
  const dispatch = useDispatch();

  // Fetch all songs
  const fetchSongs = () => {
    dispatch(fetchSongsRequest());
  };

  // Add a new song
  const addSong = (song) => {
    dispatch(addSongRequest(song));
  };

  // Edit an existing song
  const editSong = (id, updatedSong) => {
    dispatch(editSongRequest({ id, updatedSong }));
  };

  // Delete a song by ID
  const deleteSong = (id) => {
    dispatch(deleteSongRequest(id));
  };

  // Return the available actions to use in your components
  return {
    fetchSongs,
    addSong,
    editSong,
    deleteSong,
  };
};

export default useSongActions;
