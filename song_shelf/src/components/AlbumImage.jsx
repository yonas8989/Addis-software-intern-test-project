import React from 'react';

const AlbumImage = ({ imageUrl, albumTitle, musicianName }) => {
  return (
    <div className="w-64 mx-auto bg-gray-900 rounded-lg shadow-md overflow-hidden mt-">
      {/* Image section */}
      <div className="relative w-full h-64">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={`${albumTitle} album cover`}
        />
      </div>

      {/* Text section */}
      <div className="p-4 h-24 flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {albumTitle}
        </h3>
        <p className="text-gray-600 truncate">By {musicianName}</p>
      </div>
    </div>
  );
};

export default AlbumImage;
