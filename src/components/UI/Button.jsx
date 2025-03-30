// Button.jsx
import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition-colors duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
