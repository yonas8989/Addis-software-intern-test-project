import React from 'react';

const SongActions = ({  onDeleteSong, onEditSong }) => (
  <div className="song-actions flex justify-between items-center p-2 bg-gradient-to-r from-gray-500 to-indigo-100 rounded-lg shadow-md">
    {[
      { label: 'Edit', onClick: onEditSong },
      { label: 'Delete', onClick: onDeleteSong }
    ].map(({ label, onClick }) => (
      <button
        key={label}
        onClick={onClick}
        className="bg-gradient-to-r from-blue-900 to-indigo-400 text-white font-bold py-1 px-2 rounded-lg text-sm hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
      >
        {label}
      </button>
    ))}
  </div>
);

export default SongActions;
