import React from 'react';

const TopicsList = ({ topics }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Topics to Cover</h2>
      <ul className="list-disc pl-5 space-y-2">
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopicsList;
