import React from 'react';

const MusicCard = ({ title, genre, album, artistImage }) => {
  return (
    <div className="music-card border rounded-lg p-4 shadow-md">
      <img 
        src={artistImage} 
        alt={title} 
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600">Genre: {genre}</p>
        <p className="text-sm text-gray-600">Album: {album}</p>
      </div>
    </div>
  );
};

export default MusicCard;
