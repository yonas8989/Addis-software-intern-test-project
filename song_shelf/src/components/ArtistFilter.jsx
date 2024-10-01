import React, { useState } from 'react';

const ArtistFilter = ({ artists, onFilter }) => {
  const [selectedArtist, setSelectedArtist] = useState('');

  const handleArtistChange = (event) => {
    const artist = event.target.value;
    setSelectedArtist(artist);
    onFilter(artist);
  };

  return (
    <div className="artist-filter mt-4">
      <label htmlFor="artist-select" className="block text-gray-700">Filter by Artist:</label>
      <select
        id="artist-select"
        value={selectedArtist}
        onChange={handleArtistChange}
        className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        <option value="">All Artists</option>
        {artists.map((artist) => (
          <option key={artist} value={artist}>
            {artist}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ArtistFilter;
