import React from 'react';
import SongCard from './SongCard';
import { useSelector } from 'react-redux';


const SongList = () => {
  // Get the songs array from the Redux store
  const songs = useSelector((state) => state.songs.songs); // Assuming `songs` is nested inside `songs` slice
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Map through the songs array and render a SongCard for each song */}
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SongList;
