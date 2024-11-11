// src/pages/modules/LearnToCode/LearnToCodeHome.js
import React from 'react';
import ModuleHome from '../../../components/ModuleHome';

export const learnToCodeData = {
  moduleName: 'Learn To Code',
  description: 'An introduction to foundational programming skills.',
  unseenTopics: 20,
  skippedTopics: 2,
  solvedTopics: 0,
  unseenProblems: 3,
  skippedProblems: 2,
  solvedProblems: 3,
  totalTopics: 22,
  totalProblems: 8,
  topics: [
    {
      name: 'Preliminaries',
      specificTopics: [
        { name: 'How To Code', description: 'How to setup a coding environment', link: '/SeaFarmers/modules/LearnToCode/HowToCode' },
        { name: 'Time Complexity', description: 'Description of Subtopic 1b', link: '/SeaFarmers/modules/LearnToCode/TimeComplexity' },
      ],
    },
    // {
    //   name: 'Topic 2',
    //   specificTopics: [
    //     { name: 'Subtopic 2a', description: 'Description of Subtopic 2a', link: '/subtopic-2a' },
    //     { name: 'Subtopic 2b', description: 'Description of Subtopic 2b', link: '/subtopic-2b' },
    //   ],
    // },
  ],
};
const LearnToCode = () => {
  return <ModuleHome {...learnToCodeData} />;
};

export default LearnToCode;
