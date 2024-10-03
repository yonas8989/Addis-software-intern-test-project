import React from "react";
import Header from "../components/Header";
import MusicList from "../components/MusicList";
import Footer from "../components/Footer";


function SongList() {
  return (
    <>
    <Header/>
      <div class="grid grid-rows-2 grid-flow-col gap-4">
        <div class="row-span-2 col-span-2 ... bg-gray-900"><MusicList/></div>
      </div>
    </>
  );
}

export default SongList;
