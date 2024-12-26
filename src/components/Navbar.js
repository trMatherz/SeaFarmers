import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { ProfilePicture } from './ProfilePicture'; 
import Dropdown from './Dropdown'; 
import styles from '../css/navbar.module.css';


const Navbar = () => {
  return (
    <nav className={styles.customNavbar}>
      <div className={styles.customNavbarTitle}>
        <h1> 
          <Link to="/SeaFarmers/">
              Sea Farmers
          </Link>
        </h1>
      </div>
      <div className={styles.customNavbarItems}>
       
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
