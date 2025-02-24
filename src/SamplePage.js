import React from 'react';
import { Helmet } from 'react-helmet';
import './SamplePage.css'; // Import the CSS file

const SamplePage = () => {
  return (
    <div className="sample-page">
      <Helmet>
        <title>Sample Page with Animations</title>
        <meta name="description" content="This is a sample page with animations and modern design using React Helmet." />
        <meta name="keywords" content="React, Helmet, Animations, Design" />
      </Helmet>

      <div className="hero-section">
        <h1 className="hero-title">Welcome to the Sample Page</h1>
        <p className="hero-subtitle">This page demonstrates the use of React Helmet and CSS animations.</p>
        <button className="cta-button">Get Started</button>
      </div>

      <div className="card-container">
        <div className="card">
          <h2>Feature One</h2>
          <p>This is a feature description. It’s short and to the point.</p>
        </div>
        <div className="card">
          <h2>Feature Two</h2>
          <p>This is another feature description. It’s also short and to the point.</p>
        </div>
        <div className="card">
          <h2>Feature Three</h2>
          <p>This is yet another feature description. It’s short and to the point.</p>
        </div>
      </div>
    </div>
  );
};

export default SamplePage;