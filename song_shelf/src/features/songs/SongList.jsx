// src/features/songs/SongList.js
import React from 'react';
import SongCard from '../../components/SongCard';

const SongList = ({ songs, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      {songs.map((song) => (
        <SongCard 
          key={song.id} 
          title={song.title} 
          artist={song.artist} 
          onEdit={() => onEdit(song.id)} 
          onDelete={() => onDelete(song.id)} 
        />
      ))}
    </div>
  );
};

export default SongList;
