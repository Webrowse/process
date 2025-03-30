import React from 'react';

const InterviewQuestions = ({ questions }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Interview Questions</h2>
      <ul className="list-decimal pl-5 space-y-2">
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
};

export default InterviewQuestions;
