import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation
import { ProfilePicture } from './ProfilePicture'; // Import ProfilePicture component
import Dropdown from './Dropdown'; // Adjust path as needed
import styles from '../css/navbar.module.css'; // Import CSS module

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the user data from the backend API
    fetch('http://localhost:3001/api/user', {
      credentials: 'include', // To include session cookies
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('User not authenticated');
        }
        return response.json();
      })
      .then((data) => {
        setUser(data); // Set the user data in state
      })
      .catch((error) => {
        setError(error.message); // Capture the error
      });
  }, []);

  return (
    <nav className={styles.customNavbar}>
      <div className={styles.customNavbarTitle}>
        <h1>Sea Farmers</h1>
      </div>
      <div className={styles.customNavbarItems}>
        {/* Add your dropdown menu */}
        <Dropdown />
      </div>
      <div className={styles.customNavbarProfile}>
        {error && <p className={styles.error}>{error}</p>}
        {user ? (
          <div className={styles.customUserProfile}>
            <ProfilePicture /> {/* Use the ProfilePicture component */}
            <span>{user.username}</span>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
