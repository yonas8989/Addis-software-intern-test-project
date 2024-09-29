// src/components/SongCard.js
import React from 'react';

const SongCard = ({ title, artist, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">by {artist}</p>
      </div>
      <div className="flex space-x-2">
        <button 
          className="bg-blue-500 text-white px-3 py-1 rounded-md"
          onClick={onEdit}
        >
          Edit
        </button>
        <button 
          className="bg-red-500 text-white px-3 py-1 rounded-md"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SongCard;
