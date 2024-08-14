import React from 'react';
import './About.css'; // Ensure you create this CSS file

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <div className="about-description">
          <p className="about-text">
            Welcome to <strong>Booky</strong>! We are dedicated to curating a vast collection of books for avid readers.
          </p>
          <p className="about-text">
            Our mission is to connect readers with their next favorite book, while offering a platform to explore new authors and genres.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
