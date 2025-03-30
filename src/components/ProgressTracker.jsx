import React from 'react';

const ProgressTracker = ({ weeks, progress }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Progress Tracker</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">Week</th>
            <th className="border-b p-2">Focus Area</th>
            <th className="border-b p-2">✅ Done</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, index) => (
            <tr key={index}>
              <td className="border-b p-2">Week {index + 1}</td>
              <td className="border-b p-2">{week.title}</td>
              <td className="border-b p-2">{progress[index] ? '✅' : '⬜'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgressTracker;
