// src/components/FormInput.jsx
import React from 'react';

const FormInput = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder = "name",
  errorMessage,
  required = false,
}) => {
  return (
    <div className="mb-4">
      {/* Label */}
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}

      {/* Input Field */}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-3 py-2 border ${
          errorMessage ? 'border-red-500' : 'border-gray-300'
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />

      {/* Error Message */}
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormInput;
