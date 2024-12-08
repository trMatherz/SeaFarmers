import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../css/SampleProblem.module.css'; // Import the CSS module
const config = require('../../docusaurus.config.js');  // Adjust the path if necessary
const backendUrl = config.customFields.backendUrl; // Access customFields for backendUrl

const SampleProblem = ({ moduleName, topicId, location }) => {
  const [moduleData, setModuleData] = useState(null);
  const [topicData, setTopicData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open
  const [dropdownPosition, setDropdownPosition] = useState({}); // Store dropdown position dynamically

  useEffect(() => {
    async function fetchModuleData() {
      setLoading(true);
      try {
        const userId = sessionStorage.getItem('userId');

        if (!userId) {
          throw new Error('User ID not found in session storage');
        }
        const response = await axios.get(`${backendUrl}/api/module/${moduleName}?userId=${userId}`, {
          withCredentials: true,
        });
        setModuleData(response.data);
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
      } finally {
        setLoading(false);
      }
    }

    if (moduleName) {
      fetchModuleData();
    }
  }, [moduleName]);

  useEffect(() => {
    if (!moduleData || !topicId) return;
    const topic = moduleData.topics.find((t) => t.topicId === topicId);
    if (topic) {
      setTopicData(topic);
    } else {
      setError('Topic not found');
    }
  }, [moduleData, topicId]);

  const toggleDropdown = (index, event) => {
    if (dropdownOpen === index) {
      // Close dropdown if it's already open
      setDropdownOpen(null);
      setDropdownPosition({});
    } else {
      // Calculate position and open dropdown
      const rect = event.target.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY, // Position just below the circle
        left: rect.left + window.scrollX, // Align with the circle
      });
      setDropdownOpen(index);
    }
  };

  const updateProblemState = async (problem, newState) => {
    const problemId = problem.problemId; 
    try {
      const userId = sessionStorage.getItem('userId');

      if (!userId) {
        throw new Error('User ID not found in session storage');
      }
      const response = await axios.post(`${backendUrl}/api/problem/updateState?userId=${userId}`, {
        moduleName,
        topicId,
        problemId,
        newState,
      }, {
        withCredentials: true,  // Ensures cookies are sent with the request
      });
      setTopicData((prevTopicData) => {
        // Find the problem in the topicData.problems array and update its state
        const updatedProblems = prevTopicData.problems.map((p) =>
          p.problemId === problemId ? { ...p, state: newState } : p
        );
  
        // Return the updated topicData with the modified problems array
        return { ...prevTopicData, problems: updatedProblems };
      });
      setDropdownOpen(null);
    } catch (error) {
      console.error('Error updating problem state:', error);
    }
  };

  
  

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
        {topicData && topicData.problems && (
            topicData.problems
            .find((problem) => problem.location === location) && (
                <div className={styles.problemDetails} style={{ display: 'flex', flexWrap: 'nowrap' }}>
                {(() => {
                    const problem = topicData.problems.find((p) => p.location === location);
                    return (
                    <>
                        <div className={styles.statusCell} style={{ display: 'inline-block', marginRight: '10px' }}>
                        <span
                            className={`${styles.stateCircle} ${styles[`state${problem.state}`]}`}
                            onClick={(event) => toggleDropdown(problem.uniqueId, event)} // Pass the click event
                        ></span>
                        {dropdownOpen === problem.uniqueId && (
                            <div
                            className={styles.dropdownMenu}
                            style={{
                                position: 'absolute',
                                top: `${dropdownPosition.top}px`,
                                left: `${dropdownPosition.left}px`,
                            }}
                            >
                            <ul>
                                <li onClick={() => updateProblemState(problem, 2)}>Solved</li>
                                <li onClick={() => updateProblemState(problem, 1)}>Skipped</li>
                                <li onClick={() => updateProblemState(problem, 0)}>Unseen</li>
                            </ul>
                            </div>
                        )}
                        </div>
                        <div className={styles.sourceCell} style={{ display: 'inline-block', marginRight: '10px' }}>
                        <strong>Source:</strong> {problem.source}
                        </div>
                        <div className={styles.starredCell} style={{ display: 'inline-block', marginRight: '10px' }}>
                        <strong>Starred:</strong> {problem.star ? '⭐' : 'No'}
                        </div>
                        <div className={styles.problemCell} style={{ display: 'inline-block', marginRight: '10px' }}>
                        <strong>Problem:</strong>
                        <a
                            href={problem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.problemLink}
                        >
                            {problem.name}
                        </a>
                        </div>
                        <div className={styles.difficultyCell} style={{ display: 'inline-block', marginRight: '10px' }}>
                        <strong>Difficulty:</strong> {problem.difficulty}
                        </div>
                        <div className={styles.tagsCell} style={{ display: 'inline-block' }}>
                        <strong>Tags:</strong> {problem.tags && Array.isArray(problem.tags)
                            ? problem.tags.join(', ')
                            : 'No tags'}
                        </div>
                    </>
                    );
                })()}
                </div>
            )
        )}
        </div>

  );
};

export default SampleProblem; 
