// src/components/Button.js
import React from 'react';

const Button = ({ label = 'click me ', onClick, variant = 'primary' }) => {
  const baseClasses = 'px-4 py-2 rounded-md text-white';
  const variantClasses = variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500';

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
