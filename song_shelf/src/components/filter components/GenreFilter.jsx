import React, { useState } from 'react';

const GenreFilter = ({ genres, onFilter }) => {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
    onFilter(genre);
  };

  return (
    <div className="genre-filter">
      <label htmlFor="genre-select" className="block text-gray-700">Filter by Genre:</label>
      <select
        id="genre-select"
        value={selectedGenre}
        onChange={handleGenreChange}
        className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
