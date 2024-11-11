import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import '../css/custom.css'; // Import the global CSS
import '../css/index.css';  // Import the index-specific CSS

function Home() {
 
  return (
    <Layout
      title="Welcome to the Guide"
      description="The ultimate guide to competitive programming."
    >
      {/* Background Video */}
      <div className="background-video-container">
        <video autoPlay loop muted className="background-video">
          <source src="/SeaFarmers/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      

      {/* Main Content */}
      <main className="main-content">
        <section className="container">
          <h1 className="hero__title">Sea Farmers</h1>
          <h2>The ultimate guide to competitive programming.</h2>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
