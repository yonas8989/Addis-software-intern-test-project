import React from 'react';

const PromotionComponent = ({ title, artist, albumCover, onListenClick }) => {
  return (
    <div className="sticky top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md p-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {/* Album Cover */}
        <img
          src={albumCover}
          alt={`${title} album cover`}
          className="w-16 h-16 rounded-full shadow-lg"
        />

        {/* Song Info */}
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-md">By {artist}</p>
        </div>
      </div>

      {/* Call to Action Button */}
      <div>
        <button
          onClick={onListenClick}
          className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition duration-300"
        >
          Listen Now
        </button>
      </div>
    </div>
  );
};

export default PromotionComponent;
