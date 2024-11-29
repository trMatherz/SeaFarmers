import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Navbar from '../components/Navbar'; // Import the Navbar component
import styles from '../css/index.module.css'; // Import the index-specific CSS module

function Home() {
  return (
    <Layout
      title="Welcome to the Guide"
      description="The ultimate guide to competitive programming."
    >
      {/* Navbar */}
      <Navbar />

      {/* Background Video */}
      <div className={styles.backgroundVideoContainer}>
        <video autoPlay loop muted className={styles.backgroundVideo}>
          <source src="/SeaFarmers/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <section className="container">
          <h1 className={styles.heroTitle}>Sea Farmers</h1>
          <h2 className={styles.subtitle}>
            The ultimate guide to competitive programming.
          </h2>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
