import React from "react";
import SongCard from "../components/SongCard";
import Header from "../components/Header";
import MusicList from "../components/MusicList";
import GenreFilter from "../components/GenreFilter";
import FilterComponent from "../components/FilterComponent";

function SongList() {
  return (
    <>
    <Header/>
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-2 col-span-2 ... bg-red-800"><MusicList/></div>
      </div>
    </>
  );
}

export default SongList;
