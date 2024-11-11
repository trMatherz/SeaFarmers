import React, { useState } from 'react';
import styles from '../css/Sidebar.module.css';

// Assuming you import the items from docusaurus.config.js
import config from '../../docusaurus.config';

// Access navbarItems from customFields
const navbarItems = config.customFields.navbarItems;

function Sidebar({ topics }) {
  // State to track expanded topics (an array of indices)
  const [expandedTopics, setExpandedTopics] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  // Toggle the visibility of the subtopics for a given topic
  const toggleSubtopics = (index) => {
    setExpandedTopics((prevExpanded) =>
      prevExpanded.includes(index)
        ? prevExpanded.filter((i) => i !== index) // Remove from expanded if already open
        : [...prevExpanded, index] // Add to expanded if not open
    );
  };

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={styles.sidebarContainer}>
      {/* Header with dropdown */}
      <header className={styles.sidebarHeader}>
        <div className={styles.dropdown}>
          <button
            className={styles.dropdownButton}
            onClick={toggleDropdown}
          >
            Topics
          </button>
          {dropdownOpen && (
            <div className={styles.dropdownContent}>
              <ul>
                {navbarItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.to}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>

      <div className={styles.sidebar}>
        <ul>
          {topics.map((topic, index) => (
            <li key={index} className={styles.topicItem}>
              {/* Topic name, clicking will toggle its subtopics */}
              <div
                className={styles.topicName}
                onClick={() => toggleSubtopics(index)}
              >
                {topic.name}
              </div>

              {/* Subtopics list, only visible when the topic is expanded */}
              {expandedTopics.includes(index) && (
                <ul className={styles.subtopicsList}>
                  {topic.specificTopics.map((subtopic, subIndex) => (
                    <li key={subIndex} className={styles.subtopicItem}>
                      <a href={`#${subtopic.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        {subtopic.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
