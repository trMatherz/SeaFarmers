// src/components/ModuleHome.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ModuleHome.css';
import Layout from '@theme/Layout';

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
  topics
}) {
  // Calculate progress for topics and problems as percentages
  const topicsProgress = ((solvedTopics + skippedTopics) / totalTopics) * 100;
  const problemsProgress = ((solvedProblems + skippedProblems) / totalProblems) * 100;

  return (
    <Layout>
      <div className="module-home">
        <div className="information-background">
          <h1>{moduleName}</h1>
          <p>{description}</p>

          <div className="progress-cards-container">
            {/* Progress Card for Problems */}
            <div className="progress-card">
              <h3>Progress on Problems</h3>
              <div className="progress-bar">
                <div
                  className="progress-fill unseen"
                  style={{ width: `${(unseenProblems / totalProblems) * 100}%` }}
                ></div>
                <div
                  className="progress-fill skipped"
                  style={{ width: `${(skippedProblems / totalProblems) * 100}%` }}
                ></div>
                <div
                  className="progress-fill solved"
                  style={{ width: `${(solvedProblems / totalProblems) * 100}%` }}
                ></div>
              </div>
              <div className="progress-numbers">
                <span>
                  <div className="number">{unseenProblems}</div>
                  <div className="label">Unseen</div>
                </span>
                <span>
                  <div className="number">{skippedProblems}</div>
                  <div className="label">Skipped</div>
                </span>
                <span>
                  <div className="number">{solvedProblems}</div>
                  <div className="label">Solved</div>
                </span>
              </div>
            </div>

            {/* Progress Card for Topics */}
            <div className="progress-card">
              <h3>Progress on Topics</h3>
              <div className="progress-bar">
                <div
                  className="progress-fill unseen"
                  style={{ width: `${(unseenTopics / totalTopics) * 100}%` }}
                ></div>
                <div
                  className="progress-fill skipped"
                  style={{ width: `${(skippedTopics / totalTopics) * 100}%` }}
                ></div>
                <div
                  className="progress-fill solved"
                  style={{ width: `${(solvedTopics / totalTopics) * 100}%` }}
                ></div>
              </div>
              <div className="progress-numbers">
                <span>
                  <div className="number">{unseenTopics}</div>
                  <div className="label">Unseen</div>
                </span>
                <span>
                  <div className="number">{skippedTopics}</div>
                  <div className="label">Skipped</div>
                </span>
                <span>
                  <div className="number">{solvedTopics}</div>
                  <div className="label">Solved</div>
                </span>
              </div>
            </div>
          </div>
        </div>
          {/* Render list of topics */}
          <h3>Topics in This Module:</h3>
          <div className="topics-container">
            {topics.map((genericTopic, index) => (
              <div key={index} className="generic-topic">
                <div className="generic-topic-name">{genericTopic.name}</div>

                <div className="specific-topics">
                  {genericTopic.specificTopics.map((specificTopic, idx) => (
                    <div key={idx} className="topic-item">
                      <div className="topic-name">
                        {/* Wrap the topic name with Link for navigation */}
                        <Link to={specificTopic.link}>{specificTopic.name}</Link>
                      </div>
                      <div className="topic-description">{specificTopic.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
       
      </div>
    </Layout>
  );
}

export default ModuleHome;
