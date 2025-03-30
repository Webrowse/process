import React from 'react';

const ProjectDetails = ({ project }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Project - {project.name}</h2>
      <ul className="list-disc pl-5 space-y-2">
        {project.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
