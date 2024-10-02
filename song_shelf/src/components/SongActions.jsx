import React from 'react';

const SongActions = ({ onAddSong, onDeleteSong, onEditSong }) => {
  return (
    <div className="song-actions flex justify-around items-center p-4 bg-blue-100 rounded-lg shadow-md">
      <button
        onClick={onAddSong}
        className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Add Song
      </button>

      <button
        onClick={onEditSong}
        className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Edit Song
      </button>

      <button
        onClick={onDeleteSong}
        className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Delete Song
      </button>
    </div>
  );
};

export default SongActions;
