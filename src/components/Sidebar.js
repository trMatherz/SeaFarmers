import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is installed
import styles from '../css/Sidebar.module.css';
import Dropdown from './Dropdown'; 

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


function Sidebar({ moduleName }) {
  const { siteConfig } = useDocusaurusContext();
  const backendUrl = siteConfig.customFields.backendUrl; 


  const [moduleData, setModuleData] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

 
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

  const { genericTopics = [], topics = [] } = moduleData || {};

  return (
    <div className={styles.sidebarContainer}>
      
      <header className={styles.sidebarHeader}>
        <div className={styles.dropdown}>
          <Dropdown />
        </div>
      </header>
      <div className="generic-topics-container">
        {genericTopics.map((genericTopic, index) => {
         
          const matchingTopics = genericTopic.topics.map((topicId) =>
            topics.find((topic) => topic.topicId === topicId)
          );

          return (
            <div key={index} className="generic-topic">
             
              <h3>{genericTopic.genericTopicName}</h3>

             
              <ul>
                {matchingTopics.map(
                  (matchingTopic, subIndex) =>
                    matchingTopic && (
    
                      <li key={subIndex} className={`${styles[`state${matchingTopic.state}`]}`}>
                        <a href={`/SeaFarmers/docs/modules/${moduleData.moduleId}/${matchingTopic.topicId}/`}>
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
