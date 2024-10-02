import React from 'react';

const ActionButtons = ({ onSave, onCancel }) => {
  return (
    <div className="flex justify-end space-x-4">
      <button
        type="button"
        onClick={onCancel}
        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md shadow hover:bg-gray-300"
      >
        Cancel
      </button>
      <button
        type="submit"
        onClick={onSave}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  );
};

export default ActionButtons;
