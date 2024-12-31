import React, { useState, useEffect } from 'react';
import ModuleHome from '../../components/ModuleHome';
import axios from 'axios';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const LearnToCode = () => {
  const { siteConfig } = useDocusaurusContext();
  const backendUrl = siteConfig.customFields.backendUrl; 



  const [error, setError] = useState(null);
  const [moduleData, setModuleData] = useState(null);
  const [loading, setLoading] = useState(true); // To track loading state
  

  // Fetch module data based on moduleName
  const fetchModuleData = async (moduleName) => {
    setLoading(true); // Start loading
    try {
      const userId = sessionStorage.getItem('userId') || "guest";

      if (!userId) {
        throw new Error('User ID not found in session storage');
      }
      const response = await axios.get(`${backendUrl}/api/module/${moduleName}?userId=${userId}`, {
        withCredentials: true, // Ensure session cookies are included
        credentials: 'include',
      });
      setModuleData(response.data);
      setLoading(false); // Stop loading
    } catch (error) {
      setError(error.response ? error.response.data : error.message);
      setLoading(false); // Stop loading
    }
  };

  // Fetch module data after component mounts or when the user is authenticated
  useEffect(() => {
    // Fetch the module data only if the user is authenticated or the required conditions are met
    fetchModuleData('LearnToCode'); // Fetch module data for a specific module name
  }, []);  // Empty dependency array to run once when the component mounts

  // Display loading or error state
  if (loading) {
    return <p>Loading module data...</p>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {moduleData ? (
        <ModuleHome {...moduleData} />
      ) : (
        <div>Error: No data available</div>
      )}
    </div>
  );
};

export default LearnToCode;
