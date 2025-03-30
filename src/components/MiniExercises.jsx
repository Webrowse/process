import React from 'react';

const MiniExercises = ({ exercises }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Mini Exercises</h2>
      <ul className="list-decimal pl-5 space-y-2">
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default MiniExercises;
