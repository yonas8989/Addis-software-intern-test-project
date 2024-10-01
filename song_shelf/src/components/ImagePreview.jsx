import React from 'react';

const ImagePreview = ({ imageUrl }) => {
  if (!imageUrl) return null;

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Preview</label>
      <img src={imageUrl} alt="Artist" className="w-32 h-32 rounded-md shadow-md" />
    </div>
  );
};

export default ImagePreview;
