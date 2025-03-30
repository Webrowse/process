import React, { useState } from 'react';
import DropdownMenu from './Dropdown';
import TopicsList from './TopicList';
import ProjectDetails from './ProjectDetails';
import MiniExercises from './MiniExercises';
import InterviewQuestions from './InterviewQuestions';
import ProgressTracker from './ProgressTracker';
import roadmapData from '../data/roadmapData';

const RoadmapView = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const data = roadmapData[selectedWeek];

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-6">
      <DropdownMenu weeks={Object.keys(roadmapData)} onSelectWeek={setSelectedWeek} />
      <TopicsList topics={data.topics} />
      <ProjectDetails project={data.project} />
      <MiniExercises exercises={data.miniExercises} />
      <InterviewQuestions questions={data.interviewQuestions} />
      <ProgressTracker weeks={Object.values(roadmapData)} progress={{}} />
    </div>
  );
};

export default RoadmapView;
