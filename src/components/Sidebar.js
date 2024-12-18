import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is installed
import styles from '../css/Sidebar.module.css';
import Dropdown from './Dropdown'; // Adjust path as needed
const config = require('../../docusaurus.config.js');  // Adjust the path if necessary
const backendUrl = config.customFields.backendUrl; // Access customFields for backendUrl

function Sidebar({ moduleName }) {
  const [moduleData, setModuleData] = useState(null); // Holds the entire module data
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const [error, setError] = useState(null); // Holds any error that occurs

  // Fetch module data when component mounts or when moduleName changes
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
  }, [moduleName]); // Runs whenever moduleName changes

  if (loading) {
    return <p>Loading module data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Ensure moduleData and topics exist before rendering
  const { genericTopics = [], topics = [] } = moduleData || {};

  return (
    <div className={styles.sidebarContainer}>
      {/* Header with dropdown */}
      <header className={styles.sidebarHeader}>
        <div className={styles.dropdown}>
          <Dropdown />
        </div>
      </header>
      <div className="generic-topics-container">
        {genericTopics.map((genericTopic, index) => {
          // Find all matching topics for the current generic topic
          const matchingTopics = genericTopic.topics.map((topicId) =>
            topics.find((topic) => topic.topicId === topicId)
          );

          return (
            <div key={index} className="generic-topic">
              {/* Output the genericTopicName */}
              <h3>{genericTopic.genericTopicName}</h3>

              {/* Output all matching topics */}
              <ul>
                {matchingTopics.map(
                  (matchingTopic, subIndex) =>
                    matchingTopic && (
                      <li key={subIndex}>
                         <a href={`/SeaFarmers/modules/${moduleName}/${matchingTopic.topicId}/`}>
                              {matchingTopic.topicName}
                            </a>
                      </li>
                    )
                )}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
