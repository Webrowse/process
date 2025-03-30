// Card.jsx
import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-4 transition-all duration-300 hover:shadow-lg">
      {children}
    </div>
  );
};

export default Card;
