import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar';
import styles from '../../../css/TopicPage.module.css';
import { learnToCodeData } from './LearnToCodeHome';

function TestPage() {
  // Initialize resources with useState to track circleState
  const [resources, setResources] = useState([
    {
      name: 'Resource 1',
      url: 'https://link-to-resource1.com',
      description: 'This is a comprehensive guide on web development, covering HTML, CSS, and JavaScript.',
      source: 'Web Dev Academy',
      circleState: 'unseen', // Track circle state
      showMenu: false, // Show menu flag
    },
    {
      name: 'Resource 2',
      url: 'https://link-to-resource2.com',
      description: 'Learn advanced algorithms and data structures in this detailed tutorial.',
      source: 'Algorithms Expert',
      circleState: 'unseen', // Track circle state
      showMenu: false, // Show menu flag
    },
    {
      name: 'Resource 3',
      url: 'https://link-to-resource3.com',
      description: 'A step-by-step tutorial on building web applications using React.',
      source: 'React Mastery',
      circleState: 'unseen', // Track circle state
      showMenu: false, // Show menu flag
    },
  ]);

  // Function to handle circle click and show popup
  const handleCircleClick = (index) => {
    const updatedResources = [...resources];
    updatedResources[index].showMenu = !updatedResources[index].showMenu; // Toggle menu visibility
    setResources(updatedResources);
  };

  // Function to change the circle state
  const changeCircleState = (index, newState) => {
    const updatedResources = [...resources];
    updatedResources[index].circleState = newState; // Change the state
    updatedResources[index].showMenu = false; // Close the menu after selection
    setResources(updatedResources);
  };

  return (
    <div className={styles.pageContainer}>
      {/*<Sidebar topics={learnToCodeData.topics} />*/}

      <div className={styles.content}>
        {/* Title and Subtitle */}
        <div className={styles.header}>
          <h1>Learn to Code: Test Module</h1>
          <h3>Resources and Learning Materials</h3>
        </div>

        {/* Resources Block */}
        <div className={styles.resourcesBlock} id="resources">
          <h2>Resources</h2>
          <ul>
            {resources.map((resource, index) => (
              <li
                key={index}
                className={index % 2 === 0 ? styles.evenItem : styles.oddItem}
              >
                <div className={styles.resourceItem}>
                  {/* Circle with dynamic state */}
                  <div 
                    className={`${styles.circle} ${styles[resource.circleState]}`} 
                    onClick={() => handleCircleClick(index)} // Toggle menu visibility
                  />
                  <div className={styles.source}>{resource.source}</div>
                  <Link to={resource.url} target="_blank" rel="noopener noreferrer">
                    <div className={styles.name}>{resource.name}</div>
                  </Link>
                  <div className={styles.description}>{resource.description}</div>
                  {/* Show popup menu when circle is clicked */}
                  {resource.showMenu && (
                    <div className={styles.circleMenu}>
                      <button onClick={() => changeCircleState(index, 'unseen')}>Unseen</button>
                      <button onClick={() => changeCircleState(index, 'skipped')}>Skipped</button>
                      <button onClick={() => changeCircleState(index, 'done')}>Done</button>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
