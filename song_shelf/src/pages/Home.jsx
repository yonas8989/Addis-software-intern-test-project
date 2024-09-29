// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SongList from '../features/songs/SongList';
import Button from '../components/Button';
import FormInput from '../components/FormInput';

const Home = () => {
  // Example: Fake song data
  const [songs, setSongs] = useState([
    { id: 1, title: 'Song One', artist: 'Artist One' },
    { id: 2, title: 'Song Two', artist: 'Artist Two' },
  ]);

  const handleEdit = (id) => {
    // Handle edit logic here
    console.log(`Edit song with id: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    setSongs(songs.filter(song => song.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Button/>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">All Songs</h2>
        <SongList songs={songs} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
      <FormInput/>
    </div>
  );
};

export default Home;
