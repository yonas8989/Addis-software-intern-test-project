import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
useSelector
import { addSong } from './SongSlice';
import { useNavigate } from 'react-router-dom';
const AddSongForm = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');
  const [album, setAlbum] = useState('');

  const songs = useSelector((state) =>state.songs);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = songs.length > 0 ? songs[songs.length - 1].id + 1 : 1;
    dispatch(addSong({id:newId , title, artist, genre, album}))
    navigate("/song-list")
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Song</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Song Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter song title"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="artist">
            Artist
          </label>
          <input
            type="text"
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter artist name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="genre">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter genre"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="album">
            Album
          </label>
          <input
            type="text"
            id="album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter album name"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500"
          >
            Add Song
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSongForm;
