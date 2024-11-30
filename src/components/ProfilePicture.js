import React, { useState, useEffect } from 'react';
const config = require('../../docusaurus.config.js');  // Adjust the path if necessary
const backendUrl = config.backendUrl;

const ProfilePicture = () => {
  const [user, setUser] = useState(null);

  console.log("ProfilePicture component rendered");

  useEffect(() => {
    // Fetch user data to display the profile picture
    console.log("Fetching user data...");
    fetch(`${backendUrl}/api/user`, {
      credentials: 'include', // Include session cookies
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('User not authenticated');
        }
        return response.json();
      })
      .then((data) => {
        console.log("User data:", data);
        setUser(data);
      })
      .catch((error) => console.error('Error fetching user:', error));
  }, []);

  if (user) {
    return React.createElement('div', null,
      React.createElement('img', {
        src: user.avatarUrl,
        alt: 'User Avatar',
        width: '40',
        height: '40',
        style: { borderRadius: '50%' }
      })
    );
  } else {
    return React.createElement('div', null, 'Loading...');
  }
};

export { ProfilePicture };
