import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../css/ModuleHome.module.css'; // Import CSS module
import Layout from '@theme/Layout';
import Navbar from './Navbar';
const config = require('../../docusaurus.config.js');  // Adjust the path if necessary
const backendUrl = config.customFields.backendUrl; // Access customFields for backendUrl

function ModuleHome({
  moduleName,
  description,
  unseenTopics,
  skippedTopics,
  solvedTopics,
  unseenProblems,
  skippedProblems,
  solvedProblems,
  totalTopics,
  totalProblems,
  genericTopics = [],
  topics = [],
}) {
 

  const topicsProgress = ((solvedTopics + skippedTopics) / totalTopics) * 100;
  const problemsProgress = ((solvedProblems + skippedProblems) / totalProblems) * 100;

  return (
    <Layout>
      <Navbar />
      <div className={styles.moduleHome}>
        <div className={styles.informationBackground}>
          <h1>{moduleName}</h1>
          <p>{description}</p>

          <div className={styles.progressCardsContainer}>
            <div className={styles.progressCard}>
              <h3>Progress on Problems</h3>
              <div className={styles.progressBar}>
                <div
                  className={`${styles.progressFill} ${styles.unseen}`}
                  style={{ width: `${(unseenProblems / totalProblems) * 100}%` }}
                ></div>
                <div
                  className={`${styles.progressFill} ${styles.skipped}`}
                  style={{ width: `${(skippedProblems / totalProblems) * 100}%` }}
                ></div>
                <div
                  className={`${styles.progressFill} ${styles.solved}`}
                  style={{ width: `${(solvedProblems / totalProblems) * 100}%` }}
                ></div>
              </div>
              <div className={styles.progressNumbers}>
                <span>
                  <div className={styles.number}>{unseenProblems}</div>
                  <div className={styles.label}>Unseen</div>
                </span>
                <span>
                  <div className={styles.number}>{skippedProblems}</div>
                  <div className={styles.label}>Skipped</div>
                </span>
                <span>
                  <div className={styles.number}>{solvedProblems}</div>
                  <div className={styles.label}>Solved</div>
                </span>
              </div>
            </div>

            <div className={styles.progressCard}>
              <h3>Progress on Topics</h3>
              <div className={styles.progressBar}>
                <div
                  className={`${styles.progressFill} ${styles.unseen}`}
                  style={{ width: `${(unseenTopics / totalTopics) * 100}%` }}
                ></div>
                <div
                  className={`${styles.progressFill} ${styles.skipped}`}
                  style={{ width: `${(skippedTopics / totalTopics) * 100}%` }}
                ></div>
                <div
                  className={`${styles.progressFill} ${styles.solved}`}
                  style={{ width: `${(solvedTopics / totalTopics) * 100}%` }}
                ></div>
              </div>
              <div className={styles.progressNumbers}>
                <span>
                  <div className={styles.number}>{unseenTopics}</div>
                  <div className={styles.label}>Unseen</div>
                </span>
                <span>
                  <div className={styles.number}>{skippedTopics}</div>
                  <div className={styles.label}>Skipped</div>
                </span>
                <span>
                  <div className={styles.number}>{solvedTopics}</div>
                  <div className={styles.label}>Solved</div>
                </span>
              </div>
            </div>
          </div>
        </div>


        <h3>Topics in This Module:</h3>
        <div className={styles.genericTopicsContainer}>
          {genericTopics.map((genericTopic, index) => {
            const matchingTopics = genericTopic.topics.map((topicId) =>
              topics.find((topic) => topic.topicId === topicId)
            );

            return (
              <div key={index} className={styles.genericTopic}>
                <h3>{genericTopic.genericTopicName}</h3>
                <ul>
                  {matchingTopics.map(
                    (matchingTopic, subIndex) =>
                      matchingTopic && (
                        <li key={subIndex}>
                          <a href={`/SeaFarmers/modules/${moduleName}/${matchingTopic.topicId}`}>
                            {matchingTopic.topicName}
                          </a>
                        </li>
                      )
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default ModuleHome;
