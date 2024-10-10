import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteSong } from "../features/songs/songSlice"

const SongCard = ({ song }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (song) => {
    if (window.confirm("Are you sure you want to delete this song?")) {
      dispatch(deleteSong({ id: song.id }));
      navigate('/song-list'); // Optionally navigate to the main page after deletion
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{song.title}</div>
        <p className="text-gray-700 text-base">Artist: {song.artist}</p>
        <p className="text-gray-700 text-base">Album: {song.album}</p>
        <p className="text-gray-700 text-base">Genre: {song.genre}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {song.year}
        </span>
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
          {song.duration} mins
        </span>
      </div>

      {/* Edit and Delete buttons */}
      <div className="px-6 py-4 flex justify-between">
        <Link
          to={`/edit-song/${song.id}`}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDelete(song)} // Call handleDelete on click
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SongCard;
