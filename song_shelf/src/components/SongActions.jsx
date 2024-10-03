import React from 'react';

const SongActions = ({ onAddSong, onDeleteSong, onEditSong }) => {
  return (
    <div className="song-actions flex justify-around items-center p-4 bg-gradient-to-r
     from-gray-500 to-indigo-100rounded-lg shadow-md">
      <button
        onClick={onAddSong}
        className="bg-gradient-to-r
     from-blue-900 to-indigo-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Add Song
      </button>

      <button
        onClick={onEditSong}
        className="bg-gradient-to-r
     from-blue-800 to-indigo-300 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Edit Song
      </button>

      <button
        onClick={onDeleteSong}
        className="bg-gradient-to-r
     from-blue-600 to-indigo-100 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-400transition duration-300 ease-in-out transform hover:scale-105"
      >
        Delete Song
      </button>
    </div>
  );
};

export default SongActions;
