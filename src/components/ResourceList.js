import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../css/ResourceList.module.css'; 

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


const ResourceList = ({ moduleName, topicId }) => {
  const { siteConfig } = useDocusaurusContext();
  const backendUrl = siteConfig.customFields.backendUrl; 


  const [moduleData, setModuleData] = useState(null);
  const [topicData, setTopicData] = useState(null);
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

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {topicData && topicData.resources && (
        <table className={styles.resourceTable}>
          <thead>
            <tr>
              <th className={styles.sourceColumn}>Resources</th>
              <th className={styles.starredColumn}></th>
              <th className={styles.nameColumn}></th>
              <th className={styles.descriptionColumn}></th>
            </tr>
          </thead>
          <tbody>
            {topicData.resources 
                .map((resource, index) => (
                <tr key={resource.uniqueId || index}>
                  <td className={styles.sourceCell}>{resource.source}</td>
                  <td className={styles.starredCell}>{resource.star ? '⭐' : ''}</td>
                  <td className={styles.nameCell}>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.resourceLink}
                    >
                      {resource.name}
                    </a>
                  </td>
                  <td className={styles.descriptionCell}>{resource.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ResourceList;
