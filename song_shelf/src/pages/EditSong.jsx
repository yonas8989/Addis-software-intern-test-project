import React, { useState } from "react";
import InputField from "../components/InputField";
import ImagePreview from "../components/ImagePreview";
import ActionButtons from "../components/ActionButtons";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EditSong = ({ song, onSave, onCancel }) => {
  const [editedSong, setEditedSong] = useState({
    title: song?.title || "",
    genre: song?.genre || "",
    album: song?.album || "",
    artistImage: song?.artistImage || "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedSong({ ...editedSong, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedSong);
  };

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto bg-gray-900 shadow-md rounded-lg p-6 mt-10 mb-56">
        <h1 className="text-2xl text-white-600 font-bold mb-4 text-white ">Edit Song</h1>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Title"
            type="text"
            name="title"
            value={editedSong.title}
            onChange={handleInputChange}
            placeholder="Enter song title"
          />

          <InputField
            label="Genre"
            type="text"
            name="genre"
            value={editedSong.genre}
            onChange={handleInputChange}
            placeholder="Enter song genre"
          />

          <InputField
            label="Album"
            type="text"
            name="album"
            value={editedSong.album}
            onChange={handleInputChange}
            placeholder="Enter album name"
          />

          <InputField
            label="Artist Image URL"
            type="url"
            name="artistImage"
            value={editedSong.artistImage}
            onChange={handleInputChange}
            placeholder="Enter image URL"
          />

          <ImagePreview imageUrl={editedSong.artistImage} />

          <ActionButtons onSave={handleSubmit} onCancel={onCancel} />
        </form>
      </div>
    </>
  );
};

export default EditSong;
