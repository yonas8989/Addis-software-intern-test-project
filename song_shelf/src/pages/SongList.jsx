import React from "react";
import SongCard from "../components/SongCard";
import Header from "../components/Header";
import MusicList from "../components/MusicList";
import GenreFilter from "../components/GenreFilter";

function SongList() {
  return (
    <>
    <Header/>
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 ...  bg-blue-50"></div>
        <div class="col-span-2 ... bg-stone-500"><MusicList/></div>
        {/* <div class="row-span-2 col-span-2 ... bg-red-800">03</div> */}
      </div>
    </>
  );
}

export default SongList;
