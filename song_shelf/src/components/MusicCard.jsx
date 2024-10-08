import React from 'react';
import SongActions from "./SongActions";

const MusicCard = ({ song }) => (
  <div className="music-card bg-gray-900 p-4 rounded-lg shadow-md">
    <img
      src={song.artistImage}
      alt={`${song.title} cover`}
      className="w-full h-40 object-cover mb-4 rounded-md"
    />
    <h3 className="text-white text-lg font-bold">{song.title}</h3>
    <p className="text-gray-400">{song.genre}</p>
    <p className="text-gray-400">{song.album}</p>

    {/* Song actions */}
    <SongActions
      onEditSong={() => onEditSong(song.id)} // Pass the song ID for editing
      onDeleteSong={() => onDeleteSong(song.id)} // Pass the song ID for deleting
    />
  </div>
);

export default MusicCard;
