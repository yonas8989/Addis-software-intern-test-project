// src/pages/Home.js
import React  from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AlbumImage from "../components/AlbumImage";

const Home = () => {
  const albums = [
    {
      imageUrl:
        "https://images.pexels.com/photos/27969812/pexels-photo-27969812/free-photo-of-croissant-with-salmon-on-plate.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
      albumTitle: "Thriller",
      musicianName: "Michael Jackson",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/20227920/pexels-photo-20227920/free-photo-of-harbor-of-valletta.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
      albumTitle: "The Dark Side of the Moon",
      musicianName: "Pink Floyd",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/28403274/pexels-photo-28403274/free-photo-of-strawberries.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
      albumTitle: "Abbey Road",
      musicianName: "The Beatles",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/28403274/pexels-photo-28403274/free-photo-of-strawberries.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
      albumTitle: "Abbey Road",
      musicianName: "The Beatles",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/28403274/pexels-photo-28403274/free-photo-of-strawberries.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
      albumTitle: "Abbey Road",
      musicianName: "The Beatles",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/28403274/pexels-photo-28403274/free-photo-of-strawberries.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
      albumTitle: "Abbey Road",
      musicianName: "The Beatles",
    },

  ];


  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <HeroSection />
      <div className="  text-white ">
        <h1 className="text-3xl font-bold text-center my-8">Famous Albums</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 hover:gap-6">
          {albums.map((album, index) => (
            <AlbumImage
              key={index}
              imageUrl={album.imageUrl}
              albumTitle={album.albumTitle}
              musicianName={album.musicianName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
