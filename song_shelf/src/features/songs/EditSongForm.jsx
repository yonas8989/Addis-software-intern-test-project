import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateSong } from './SongSlice';




const EditSongForm = () => {

const{id} = useParams();
const songs = useSelector((state) => state.songs);


const existionSong = songs.filter(filteredSong => filteredSong.id == id);
const {title, artist, genre, album} = existionSong[0];
  // Local state to hold the form data
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedArtist, setUpdatedArtist] = useState(artist);
  const [updatedGenre, setUpdatedGenre] = useState(genre);
  const [updatedAlbum, setUpdatedAlbum] = useState(album);
  const dispatch = useDispatch();
  const navigate = useNavigate()



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSong({
        id:id,
        title:updatedTitle,
        artist:updatedArtist,
        genre:updatedGenre,
        album:updatedAlbum
    }))
    navigate("/song-list")
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Edit Song</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Song Title
          </label>
          <input
            type="text"
            id="title"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
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
            value={updatedArtist}
            onChange={(e) => setUpdatedArtist(e.target.value)}
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
            value={updatedGenre}
            onChange={(e) => setUpdatedGenre(e.target.value)}
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
            value={updatedAlbum}
            onChange={(e) => setUpdatedAlbum(e.target.value)}
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
            Update Song
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditSongForm;
