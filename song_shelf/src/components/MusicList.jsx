import React, { useState } from "react";
import MusicCard from "./MusicCard";
import FilterComponent from "./FilterComponent";

const MusicList = () => {
  const allSongs = [
    {
      id: 1,
      title: "Song 1",
      genre: "Rock",
      album: "Album 1",
      artistImage: "/images/artistA.jpg",
    },
    {
      id: 2,
      title: "Song 2",
      genre: "Pop",
      album: "Album 2",
      artistImage: "/images/artistB.jpg",
    },
    {
      id: 3,
      title: "Song 3",
      genre: "Jazz",
      album: "Album 3",
      artistImage: "/images/artistC.jpg",
    },
    {
      id: 4,
      title: "Song 4",
      genre: "Hip-Hop",
      album: "Album 1",
      artistImage: "/images/artistA.jpg",
    },
    {
      id: 5,
      title: "Song 5",
      genre: "Rock",
      album: "Album 2",
      artistImage: "/images/artistB.jpg",
    },
    // Add more songs...
  ];

  const [filteredSongs, setFilteredSongs] = useState(allSongs);

  const filterSongs = (genre, artist, album) => {
    const filtered = allSongs.filter((song) => {
      return (
        (genre === "" || song.genre === genre) &&
        (artist === "" || song.artistImage.includes(artist)) && // filter artist based on image or artist name
        (album === "" || song.album === album)
      );
    });
    setFilteredSongs(filtered);
  };

  return (
    <div className="music-list-container flex">
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 ...  bg-blue-50">
          {" "}
          <FilterComponent onFilterChange={filterSongs} />{" "}
        </div>
        <div class="row-span-2 col-span-2 ... bg-red-800">
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
  );
};

export default MusicList;
