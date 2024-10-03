import React, { useState } from "react";
import AlbumFilter from "./AlbumFilter";
import GenreFilter from './GenreFilter';
import ArtistFilter from './ArtistFilter';

const FilterComponent = ({ onFilterChange }) => {
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("");

  const handleAlbumFilter = (album) => {
    setSelectedAlbum(album);
    onFilterChange(selectedGenre, selectedArtist, album);
  };

  const handleArtistFilter = (artist) => {
    setSelectedArtist(artist);
    onFilterChange(selectedGenre, artist, selectedAlbum);
  };

  const handleGenreFilter = (genre) => {
    setSelectedGenre(genre);
    onFilterChange(genre, selectedArtist, selectedAlbum);
  };

  return (
    <div className="filter-component p-4 bg-gray-300 rounded-lg shadow-md sticky top-20 h-max">
      <h3 className="text-lg font-bold mb-2">Filter Songs</h3>
      <GenreFilter
        genres={["Rock", "Pop", "Jazz", "Hip-Hop"]}
        onFilter={handleGenreFilter}
      />
      <ArtistFilter
        artists={["Artist A", "Artist B", "Artist C"]}
        onFilter={handleArtistFilter}
      />
      <AlbumFilter
        albums={["Album 1", "Album 2", "Album 3"]}
        onFilter={handleAlbumFilter}
      />
    </div>
  );
};

export default FilterComponent;
