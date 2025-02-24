// src/SamplePage.js
import React from 'react';
import { Helmet } from 'react-helmet';

const SamplePage = () => {
  return (
    <div>
      <Helmet>
        <title>Sample Page Title</title>
        <meta name="description" content="This is a sample page using React Helmet." />
        <meta name="keywords" content="React, Helmet, POC" />
      </Helmet>
      <h1>Welcome to the Sample Page</h1>
      <p>This page demonstrates the use of React Helmet for managing document head elements.</p>
    </div>
  );
};

export default SamplePage;