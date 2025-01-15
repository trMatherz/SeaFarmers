import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import styles from '../css/TopicProgress.module.css'; 

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


const TopicProgress = ({ moduleId, topicId }) => {
  const { siteConfig } = useDocusaurusContext();
  const backendUrl = siteConfig.customFields.backendUrl; 


  const [moduleData, setModuleData] = useState(null);
  const [topicData, setTopicData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({});
  const dropdownRef = useRef(null);

  useEffect(() => {
    async function fetchModuleData() {
      setLoading(true);
      try {
        const userId = sessionStorage.getItem('userId') || 'guest';

        if (!userId) {
          throw new Error('User ID not found in session storage');
        }
        const response = await axios.get(
          `${backendUrl}/api/module/${moduleId}?userId=${userId}`,
          { withCredentials: true }
        );
        setModuleData(response.data);
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
      } finally {
        setLoading(false);
      }
    }

    if (moduleId) {
      fetchModuleData();
    }
  }, [moduleId]);

  useEffect(() => {
    if (!moduleData || !topicId) return;

    const topic = moduleData.topics.find((t) => t.topicId === topicId);
    if (topic) {
      setTopicData(topic);
    } else {
      setError('Topic not found');
    }
  }, [moduleData, topicId]);

  const handleStateChange = async (newState) => {
    setTopicData((prevData) => ({
      ...prevData,
      state: newState,
    }));

    try {
      const userId = sessionStorage.getItem('userId') || 'guest';

      if (!userId) {
        throw new Error('User ID not found in session storage');
      }
      await axios.post(
        `${backendUrl}/api/topic/updateState?userId=${userId}`,
        {
          moduleId: moduleId,
          topicId: topicId,
          newState: newState,
        },
        { withCredentials: true }
      );
      setDropdownOpen(null);
    } catch (err) {
      setError('Failed to update state.');
      setTopicData((prevData) => ({
        ...prevData,
        state: prevData.state,
      }));
    }
  };

  const toggleDropdown = (event) => {
    const rect = event.target.getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom + window.scrollY - 150,
      left: rect.left + window.scrollX,
    });
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const stateLabels = ['Unseen', 'Skipped', 'Solved'];
  const currentStateLabel = stateLabels[topicData?.state ?? 0];

  return (
    <div className={styles.topicProgress}>
      <div className={styles.label}>Topic Progress:</div>
      <div
        className={`${styles.stateLabel} ${styles[`state-${topicData?.state ?? 0}`]}`}
        onClick={toggleDropdown}
      >
        {currentStateLabel}
      </div>
      {dropdownOpen && (
        <div
          className={styles.dropdownMenu}
          ref={dropdownRef}
          style={{
            position: 'absolute',
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
          }}
        >
          {stateLabels.map((label, index) => (
            <div
              key={index}
              onClick={() => handleStateChange(index)}
              className={styles.dropdownItem}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopicProgress;
