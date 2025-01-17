import React, { useState, useEffect } from 'react';
import ModuleHome from '../../components/ModuleHome';
import axios from 'axios';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Novice = () => {
  const { siteConfig } = useDocusaurusContext();
  const backendUrl = siteConfig.customFields.backendUrl; 



  const [error, setError] = useState(null);
  const [moduleData, setModuleData] = useState(null);
  const [loading, setLoading] = useState(true);
  


  const fetchModuleData = async (moduleId) => {
    setLoading(true); 
    try {
      const userId = sessionStorage.getItem('userId') || "guest";

      if (!userId) {
        throw new Error('User ID not found in session storage');
      }
      const response = await axios.get(`${backendUrl}/api/module/${moduleId}?userId=${userId}`, {
        withCredentials: true,
        credentials: 'include',
      });
      setModuleData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.response ? error.response.data : error.message);
      setLoading(false); 
    }
  };

  
  useEffect(() => {
    fetchModuleData('Novice'); 
  }, []);  

  
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

export default Novice;
