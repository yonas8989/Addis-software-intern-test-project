import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import MusicCard from "./MusicCard";
import FilterComponent from "./filter components/FilterComponent";
import SongActions from "./SongActions";
import PromotionComponent from "./PromotionComponent";
import useSongActions from '../hooks/userSongActions';
import SkeletonCard from "./SkeletonCard"; // Import SkeletonCard component

const MusicList = () => {
  const { fetchSongs } = useSongActions();
  const dispatch = useDispatch();

  // Select songs from Redux store
  const { songs, loading, error } = useSelector((state) => state.songs);

  const [filteredSongs, setFilteredSongs] = useState(songs);

  useEffect(() => {
    fetchSongs(); // Fetch songs when component mounts
  }, [fetchSongs]);

  useEffect(() => {
    setFilteredSongs(songs); // Update filtered songs when songs are fetched
  }, [songs]);

  const filterSongs = (genre, artist, album) => {
    const filtered = songs.filter((song) => {
      return (
        (genre === "" || song.genre === genre) &&
        (artist === "" || song.artistImage.includes(artist)) &&
        (album === "" || song.album === album)
      );
    });
    setFilteredSongs(filtered);
  };

  return (
    <div className="music-list-container">
      {error && <p>Error: {error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-50 flex flex-col justify-between h-full p-4">
          <FilterComponent onFilterChange={filterSongs} />
          <PromotionComponent title={"mar eske tuafi "} artist={'tedy afro'} albumCover={"https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"} />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {!loading
              ? Array.from({ length: 50 }).map((_, index) => (
                  <SkeletonCard key={index} /> // Render 10 skeleton cards
                ))
              : filteredSongs.map((song) => (
                  <MusicCard
                    key={song.id}
                    song={song}
                    artistImage={song.artistImage}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicList;
