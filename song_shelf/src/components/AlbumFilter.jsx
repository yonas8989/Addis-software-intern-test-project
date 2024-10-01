import React, { useState } from 'react';

const AlbumFilter = ({ albums, onFilter }) => {
  const [selectedAlbum, setSelectedAlbum] = useState('');

  const handleAlbumChange = (event) => {
    const album = event.target.value;
    setSelectedAlbum(album);
    onFilter(album);
  };

  return (
    <div className="album-filter mt-4">
      <label htmlFor="album-select" className="block text-gray-700">Filter by Album:</label>
      <select
        id="album-select"
        value={selectedAlbum}
        onChange={handleAlbumChange}
        className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        <option value="">All Albums</option>
        {albums.map((album) => (
          <option key={album} value={album}>
            {album}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AlbumFilter;
