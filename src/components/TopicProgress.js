import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../css/TopicProgress.module.css'; // Import the CSS module
const config = require('../../docusaurus.config.js');  // Adjust the path if necessary
const backendUrl = config.customFields.backendUrl; // Access customFields for backendUrl

const TopicProgress = ({ moduleName, topicId }) => {
    const [moduleData, setModuleData] = useState(null); // Add moduleData state
    const [topicData, setTopicData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false); // Track dropdown visibility

    // Fetch module data
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
    }, [moduleName]); // Run this effect when the moduleName changes

    // Fetch topic data based on moduleData and topicId
    useEffect(() => {
        if (!moduleData || !topicId) return; // Ensure both moduleData and topicId are present

        const topic = moduleData.topics.find((t) => t.topicId === topicId);
        if (topic) {
            setTopicData(topic);
        } else {
            setError('Topic not found');
        }
    }, [moduleData, topicId]); // This effect depends on moduleData and topicId

    const handleStateChange = async (newState) => {
        // Optimistically update local state before API call
        setTopicData((prevData) => ({
            ...prevData,
            state: newState,
        }));

        try {
            const userId = sessionStorage.getItem('userId') || "guest";

            if (!userId) {
              throw new Error('User ID not found in session storage');
            }
            // Send state change to the backend
            await axios.post(`${backendUrl}/api/topic/updateState?userId=${userId}`, {
                moduleName: moduleName,
                topicId: topicId,
                newState: newState,
            }, {
                withCredentials: true,  // Ensures cookies are sent with the request
            });

            // Close the dropdown once the state is changed
            setDropdownVisible(false);
        } catch (err) {
            setError('Failed to update state.');
            // Optionally, revert the state change if the API call fails
            setTopicData((prevData) => ({
                ...prevData,
                state: prevData.state, // Revert to previous state
            }));
        }
    };

    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

    // Loading and error handling
    if (loading) {
        return <p>Loading data...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className={styles.topicProgress}>
            <div className={styles.label}>
                Topic Progress: 
            </div>
            <div
                className={`${styles.stateCircle} ${styles[`state${topicData?.state ?? 0}`]}`}
                onClick={toggleDropdown} 
            />
            
          
            {dropdownVisible && (
                <div className="dropdown">
                    <div onClick={() => handleStateChange(0)} className="dropdownItem">
                    Unseen
                    </div>
                    <div onClick={() => handleStateChange(1)} className="dropdownItem">
                    Skipped
                    </div>
                    <div onClick={() => handleStateChange(2)} className="dropdownItem">
                    Solved
                    </div>
                </div>
                )}
        </div>
    );
};

export default TopicProgress;
