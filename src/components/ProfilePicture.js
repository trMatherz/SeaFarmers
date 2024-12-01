import React, { useState, useEffect } from 'react';
const config = require('../../docusaurus.config.js');  // Adjust the path if necessary
const backendUrl = config.customFields.backendUrl; // Access customFields for backendUrl

const ProfilePicture = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the user data when the component mounts
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setIsLoading(true);

    try {
      // Send a request to the backend to get user data
      const response = await fetch(`${backendUrl}/api/user`, {
        credentials: 'include', // Include session cookies to check if the user is authenticated
      });

      if (!response.ok) {
        throw new Error('User not authenticated');
      }

      // Parse the user data from the response
      const data = await response.json();
      console.log("User data:", data); // Log user data to the console

      // Set the user data in the state
      setUser(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUser(null); // Handle error if not authenticated
    } finally {
      setIsLoading(false);
    }
  };

  const handleGitHubLogin = () => {
    // Redirect the user to GitHub's OAuth authorization URL
    window.location.href = `${backendUrl}/auth/github`; // This will start the GitHub authentication flow
  };

  if (isLoading) {
    return <div>Loading user data...</div>;
  }

  if (user) {
    return (
      <div>
        <img
          src={user.avatarUrl}
          alt="User Avatar"
          width="40"
          height="40"
          style={{ borderRadius: '50%' }}
        />
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={handleGitHubLogin}>Login with GitHub</button>
      </div>
    );
  }
};

export { ProfilePicture };
