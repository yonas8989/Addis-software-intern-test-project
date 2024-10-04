import React from 'react';
import { Link } from 'react-router-dom';

const MusicCard = ({ id, title, genre, album, artistImage }) => {
  return (
    <Link to={`/edit-song/${id}`}>
      <div className="music-card border rounded-lg shadow-md cursor-pointer flex flex-col h-64 w-full"> 
        {/* Fixed height for the image */}
        <div className="h-32 w-full">
          <img 
            src={artistImage} 
            alt={title} 
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        
        {/* Fixed height for the text container */}
        <div className="p-4 flex-grow flex flex-col justify-between">
          <h2 className="text-lg font-bold truncate">{title}</h2>
          <p className="text-sm text-gray-600 truncate">Genre: {genre}</p>
          <p className="text-sm text-gray-600 truncate">Album: {album}</p>
        </div>
      </div>
    </Link>
  );
};

export default MusicCard;
