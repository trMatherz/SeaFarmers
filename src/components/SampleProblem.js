import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from '../css/SampleProblem.module.css';
const config = require('../../docusaurus.config.js');
const backendUrl = config.customFields.backendUrl;

const SampleProblem = ({ moduleName, topicId, location }) => {
  const [moduleData, setModuleData] = useState(null);
  const [topicData, setTopicData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({});
  const [helpDropdownOpen, setHelpDropdownOpen] = useState(null);
  const [helpDropdownPosition, setHelpDropdownPosition] = useState({});
  
  const dropdownRef = useRef(null); // Ref for the dropdown
  const helpDropdownRef = useRef(null); // Ref for the help dropdown

  useEffect(() => {
    async function fetchModuleData() {
      setLoading(true);
      try {
        const userId = sessionStorage.getItem('userId') || "guest";

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

  
  useEffect(() => {
    const handleOutsideClick = (event) => {
     
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null); 
      }
  
     
      if (helpDropdownRef.current && !helpDropdownRef.current.contains(event.target)) {
        setHelpDropdownOpen(null);
      }
    };
  
   
    document.addEventListener('mousedown', handleOutsideClick);
  
  
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);


  const toggleDropdown = (index, event) => {
    if (dropdownOpen === index) {
      setDropdownOpen(null);
      setDropdownPosition({});
    } else {
      const rect = event.target.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
      setDropdownOpen(index);
    }
  };

  const toggleHelpDropdown = (index, event) => {
    if (helpDropdownOpen === index) {
      setHelpDropdownOpen(null);
      setHelpDropdownPosition({});
    } else {
      const rect = event.target.getBoundingClientRect();
      setHelpDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
      setHelpDropdownOpen(index);
    }
  };

  const updateProblemState = async (problem, newState) => {
    const problemId = problem.problemId;
    try {
      const userId = sessionStorage.getItem('userId') || "guest";

      if (!userId) {
        throw new Error('User ID not found in session storage');
      }
      await axios.post(
        `${backendUrl}/api/problem/updateState?userId=${userId}`,
        { moduleName, topicId, problemId, newState },
        { withCredentials: true }
      );
      setTopicData((prevTopicData) => {
        const updatedProblems = prevTopicData.problems.map((p) =>
          p.problemId === problemId ? { ...p, state: newState } : p
        );
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
      {topicData?.problems?.length > 0 ? (
        <table className={styles.problemTable}>
          <thead>
            <tr>
              <th className={styles.statusColumn}>Status</th>
              <th className={styles.sourceColumn}>Source</th>
              <th className={styles.starredColumn}></th>
              <th className={styles.problemColumn}>Problem</th>
              <th className={styles.difficultyColumn}>Dif</th>
              <th className={styles.tagsColumn}>Tags</th>
              <th className={styles.helpColumn}></th>
            </tr>
          </thead>
          <tbody>
            {topicData.problems
              .filter((problem) => problem.location === location)
              .map((problem, index) => (
                <tr key={problem.uniqueId || index}>
                  <td className={styles.statusCell}>
                    <span
                      className={`${styles.stateCircle} ${styles[`state${problem.state}`]}`}
                      onClick={(event) => toggleDropdown(index, event)}
                    >a</span>
                    {dropdownOpen === index && (
                      <div
                        className={styles.dropdownMenu}
                        ref={dropdownRef}
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
                  </td>
                  <td className={styles.sourceCell}>{problem.source}</td>
                  <td className={styles.starredCell}>{problem.star ? '⭐' : ''}</td>
                  <td className={styles.problemCell}>
                    <a
                      href={problem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.problemLink}
                    >
                      {problem.name}
                    </a>
                  </td>
                  <td className={styles.difficultyCell}>{problem.difficulty || 'Unknown'}</td>
                  <td className={styles.tagsCell}>
                    {problem.tags && Array.isArray(problem.tags)
                      ? problem.tags.join(', ')
                      : 'No tags'}
                  </td>
                  <td className={styles.helpCell}>
                    <span
                      className={styles.helpButton}
                      onClick={(event) => toggleHelpDropdown(index, event)}
                    >
                      Help
                    </span>
                    {helpDropdownOpen === index && (
                      <div
                        className={styles.dropdownMenu}
                        ref={helpDropdownRef}
                        style={{
                          position: 'absolute',
                          top: `${helpDropdownPosition.top}px`,
                          left: `${helpDropdownPosition.left}px`,
                        }}
                      >
                        <ul>
                          {problem.helps && problem.helps.length > 0 ? (
                            problem.helps.map((help, helpIndex) => (
                              <li key={helpIndex}>
                                <a
                                  href={help.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={styles.helpLink}
                                >
                                  {help.name}
                                </a>
                              </li>
                            ))
                          ) : (
                            <li>No Help</li>
                          )}
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <p>No problems data available.</p>
      )}
    </div>
  );
};

export default SampleProblem;
