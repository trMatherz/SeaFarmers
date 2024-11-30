import React, { useEffect, useState } from 'react';
const config = require('../../docusaurus.config.js');  // Adjust the path if necessary
const backendUrl = config.customFields.backendUrl; // Access customFields for backendUrl

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the user data from the backend API
    fetch(`${backendUrl}/api/user`, {
      credentials: 'include', // To include session cookies
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('User not authenticated');
        }
        return response.json();
      })
      .then(data => {
        setUser(data); // Set the user data in state
      })
      .catch(error => {
        setError(error.message); // Capture the error
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>Loading...</p>; // Show a loading message if user data is not available yet
  }

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>Your GitHub Email: {user.email}</p>
      <img src={user.avatarUrl} alt="Avatar" width="100" />
    </div>
  );
};

export default UserProfile;
