import React, { useState } from "react";
import MusicCard from "./MusicCard";
import FilterComponent from "./FilterComponent";
import Footer from "./Footer";
import SongActions from "./SongActions";
import PromotionComponent from "./PromotionComponent";

const MusicList = () => {
  const allSongs = [
    {
      id: 1,
      title: "Song 1",
      genre: "Rock",
      album: "Album 1",
      artistImage:
        "https://images.pexels.com/photos/28679853/pexels-photo-28679853/free-photo-of-overhead-view-of-person-holding-coffee-cup-outdoors.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 2,
      title: "Song 2",
      genre: "Pop",
      album: "Album 2",
      artistImage:
        "https://images.pexels.com/photos/28521004/pexels-photo-28521004/free-photo-of-stylish-man-in-beige-trench-coat-by-doorway.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 3,
      title: "Song 3",
      genre: "Jazz",
      album: "Album 3",
      artistImage:
        "https://images.pexels.com/photos/20690096/pexels-photo-20690096/free-photo-of-iceland-poppy-flower.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 4,
      title: "Song 4",
      genre: "Hip-Hop",
      album: "Album 1",
      artistImage:
        "https://images.pexels.com/photos/28039616/pexels-photo-28039616/free-photo-of-a-bowl-of-tomatoes-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 5,
      title: "Song 5",
      genre: "Rock",
      album: "Album 2",
      artistImage:
        "https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 5,
      title: "Song 5",
      genre: "Rock",
      album: "Album 2",
      artistImage:
        "https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 5,
      title: "Song 5",
      genre: "Rock",
      album: "Album 2",
      artistImage:
        "https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 5,
      title: "Song 5",
      genre: "Rock",
      album: "Album 2",
      artistImage:
        "https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 5,
      title: "Song 5",
      genre: "Rock",
      album: "Album 2",
      artistImage:
        "https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 5,
      title: "Song 5",
      genre: "Rock",
      album: "Album 2",
      artistImage:
        "https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 5,
      title: "Song 5",
      genre: "Rock",
      album: "Album 2",
      artistImage:
        "https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 5,
      title: "Song 5",
      genre: "Rock",
      album: "Album 2",
      artistImage:
        "https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 5,
      title: "Song 5",
      genre: "Rock",
      album: "Album 2",
      artistImage:
        "https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 5,
      title: "Song 5",
      genre: "Rock",
      album: "Album 2",
      artistImage:
        "https://images.pexels.com/photos/9694702/pexels-photo-9694702.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 5,
      title: "Song 5",
      genre: "Rock",
      album: "Album 2",
      artistImage:
        "https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 5,
      title: "Song 5",
      genre: "Rock",
      album: "Album 2",
      artistImage:
        "https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 5,
      title: "Song 5",
      genre: "Rock",
      album: "Album 2",
      artistImage:
        "https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 5,
      title: "Song 5",
      genre: "Rock",
      album: "Album 2",
      artistImage:
        "https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    {
      id: 5,
      title: "Song 5",
      genre: "Rock",
      album: "Album 2",
      artistImage:
        "https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
    },
    // Add more songs...
  ];

  const [filteredSongs, setFilteredSongs] = useState(allSongs);

  const filterSongs = (genre, artist, album) => {
    const filtered = allSongs.filter((song) => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Left Section: Filter and Actions */}
        <div className="bg-blue-50 flex flex-col justify-between h-full p-4">
          {/* FilterComponent at the top */}
          <FilterComponent onFilterChange={filterSongs} />
          <PromotionComponent title={"mar eske tuafi "} artist={'tedy afro'} albumCover={"https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"} />
          <PromotionComponent title={"mar eske tuafi "} artist={'tedy afro'} albumCover={"https://images.pexels.com/photos/28304389/pexels-photo-28304389/free-photo-of-a-person-holding-a-flower-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"} />
          
          {/* SongActions at the bottom */}
          <div className="mt-4">
            <SongActions />
          </div>
        </div>

        {/* Right Section: Song List */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-red-800">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredSongs.map((song) => (
              <MusicCard
                key={song.id}
                title={song.title}
                genre={song.genre}
                album={song.album}
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
