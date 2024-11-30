import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation
import { ProfilePicture } from './ProfilePicture'; // Import ProfilePicture component
import Dropdown from './Dropdown'; // Adjust path as needed
import styles from '../css/navbar.module.css'; // Import CSS module


const Navbar = () => {
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
          <div className={styles.customUserProfile}>
            <ProfilePicture /> 
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
