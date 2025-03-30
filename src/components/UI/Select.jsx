// Select.jsx
import React from 'react';

const Select = ({ children, onChange }) => {
  return (
    <select
      onChange={onChange}
      className="w-full p-2 mb-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </select>
  );
};

export default Select;
