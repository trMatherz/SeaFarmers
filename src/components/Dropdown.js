import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import styles from '../css/dropdown.module.css'; // Import CSS module

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbarItems}>
      <div className={styles.dropdown}>
        <button className={styles.dropdownButton} onClick={toggleDropdown}>
          Sections
        </button>
        {isOpen && (
          <div className={styles.dropdownContent}>
            <Link to="/SeaFarmers/modules/LearnToCode/LearnToCodeHome">
              Learn To Code
            </Link>
            <Link to="/SeaFarmers/modules/Novice/NoviceHome">Novice</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
