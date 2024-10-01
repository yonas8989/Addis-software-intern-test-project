import React, { useState } from 'react';
import GenreFilter from './GenreFilter';
import ArtistFilter from './ArtistFilter';
import AlbumFilter from './AlbumFilter';

const MusicList = () => {
  const allSongs = [
    { id: 1, title: 'Song 1', genre: 'Rock', artist: 'Artist A', album: 'Album 1' },
    { id: 2, title: 'Song 2', genre: 'Pop', artist: 'Artist B', album: 'Album 2' },
    { id: 3, title: 'Song 3', genre: 'Jazz', artist: 'Artist C', album: 'Album 3' },
    { id: 4, title: 'Song 4', genre: 'Hip-Hop', artist: 'Artist A', album: 'Album 1' },
    { id: 5, title: 'Song 5', genre: 'Rock', artist: 'Artist B', album: 'Album 2' },
    // Add more songs here...
  ];

  const [filteredSongs, setFilteredSongs] = useState(allSongs);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedArtist, setSelectedArtist] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState('');

  const filterSongs = (genre, artist, album) => {
    return allSongs.filter((song) => {
      return (
        (genre === '' || song.genre === genre) &&
        (artist === '' || song.artist === artist) &&
        (album === '' || song.album === album)
      );
    });
  };

  const handleGenreFilter = (genre) => {
    setSelectedGenre(genre);
    setFilteredSongs(filterSongs(genre, selectedArtist, selectedAlbum));
  };

  const handleArtistFilter = (artist) => {
    setSelectedArtist(artist);
    setFilteredSongs(filterSongs(selectedGenre, artist, selectedAlbum));
  };

  const handleAlbumFilter = (album) => {
    setSelectedAlbum(album);
    setFilteredSongs(filterSongs(selectedGenre, selectedArtist, album));
  };

  return (
    <div className="music-list">
      <h1 className="text-2xl font-bold">Music List</h1>
      <GenreFilter
        genres={['Rock', 'Pop', 'Jazz', 'Hip-Hop']}
        onFilter={handleGenreFilter}
      />
      <ArtistFilter
        artists={['Artist A', 'Artist B', 'Artist C']}
        onFilter={handleArtistFilter}
      />
      <AlbumFilter
        albums={['Album 1', 'Album 2', 'Album 3']}
        onFilter={handleAlbumFilter}
      />
      <ul className="mt-4">
        {filteredSongs.map((song) => (
          <li key={song.id} className="py-2 border-b border-gray-200">
            {song.title} - {song.genre} - {song.artist} - {song.album}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
