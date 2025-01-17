import React, { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';
import styles from '../css/dropdown.module.css'; // Import CSS module

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown menu

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

   
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close the dropdown if the click is outside
      }
    };

    
    document.addEventListener('mousedown', handleOutsideClick);

   
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.navbarItems}>
      <div className={styles.dropdown} ref={dropdownRef}> 
        <button className={styles.dropdownButton} onClick={toggleDropdown}>
          Sections
        </button>
        {isOpen && (
          <div className={styles.dropdownContent}>
            <Link to="/SeaFarmers/modules/LearnToCodeHome/">
              Learn To Code
            </Link>
            <Link to="/SeaFarmers/modules/NoviceHome/">
              Novice
              </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
