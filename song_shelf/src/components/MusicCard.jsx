import React from 'react';
import SongActions from "./SongActions"
const MusicCard = ({ id, title, genre, album, artistImage, onEditSong, onDeleteSong }) => (
  <div className="music-card bg-gray-900 p-4 rounded-lg shadow-md">
    <img src={artistImage} alt={`${title} cover`} className="w-full h-40 object-cover mb-4" />
    <h3 className="text-white text-lg font-bold">{title}</h3>
    <p className="text-gray-400">{genre}</p>
    <p className="text-gray-400">{album}</p>
    
    {/* Song actions */}
    <SongActions
      onAddSong={null} // You might skip this if not needed for individual songs
      onEditSong={() => onEditSong(id)} // Pass the song ID for editing
      onDeleteSong={() => onDeleteSong(id)} // Pass the song ID for deleting
    />
  </div>
);

export default MusicCard;
