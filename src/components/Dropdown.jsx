import React from 'react';

const DropdownMenu = ({ weeks, onSelectWeek }) => {
  return (
    <div className="w-full p-4">
      <label htmlFor="week-select" className="block mb-2 text-sm font-medium text-gray-700">Select Week</label>
      <select
        id="week-select"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onSelectWeek(e.target.value)}
      >
        {weeks.map((week, index) => (
          <option key={index} value={index + 1}>
            Week {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
