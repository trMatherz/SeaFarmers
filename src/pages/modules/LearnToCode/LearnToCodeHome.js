import React, { useState, useEffect } from 'react';
import ModuleHome from '../../../components/ModuleHome';
import axios from 'axios';

const LearnToCode = () => {
  const [error, setError] = useState(null);
  const [moduleData, setModuleData] = useState(null);
  const [loading, setLoading] = useState(true); // To track loading state

  // Fetch module data based on moduleName
  const fetchModuleData = async (moduleName) => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get(`http://localhost:3001/api/module/${moduleName}`, {
        withCredentials: true, // Ensure session cookies are included
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
