// src/features/songs/SongList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsRequest, editSongRequest, deleteSongRequest } from './SongSlice'; // Import your Redux actions
import SongCard from '../../components/SongCard';

const SongList = () => {
  const dispatch = useDispatch();

  // Access the songs state from Redux
  const songs = useSelector((state) => state.songs.songs);

  // Fetch songs when the component mounts
  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  // Dispatch edit action
  const handleEdit = (id) => {
    const updatedSong = { /* add your updated song data here */ };
    dispatch(editSongRequest({ id, updatedSong }));
  };

  // Dispatch delete action
  const handleDelete = (id) => {
    dispatch(deleteSongRequest(id));
  };

  return (
    <div className="space-y-4">
      {songs.map((song) => (
        <SongCard 
          key={song.id} 
          title={song.title} 
          artist={song.artist} 
          onEdit={() => handleEdit(song.id)} 
          onDelete={() => handleDelete(song.id)} 
        />
      ))}
    </div>
  );
};

export default SongList;
