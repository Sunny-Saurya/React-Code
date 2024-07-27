import React from 'react';
import Navbar from "./Navbar/Navbar"
import Footer from './Footer';
 // Import the CSS file for styling

const About = () => {
  return (
    <div>
        <Navbar/>
      <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-cards">
        <div className="about-card">
          <h2 className="card-title">Our Mission</h2>
          <p className="card-text">
            At our shoe store, we are dedicated to providing high-quality footwear that combines style and comfort. 
            Our mission is to ensure every customer finds the perfect pair of shoes that meets their needs and 
            exceeds their expectations.
          </p>
        </div>
        <div className="about-card">
          <h2 className="card-title">Quality and Craftsmanship</h2>
          <p className="card-text">
            We meticulously select our materials and use skilled craftsmanship to create shoes that are not only 
            stylish but also durable and comfortable. Each pair of shoes is crafted with attention to detail to 
            ensure the highest standards of quality.
          </p>
        </div>
        <div className="about-card">
          <h2 className="card-title">Customer Satisfaction</h2>
          <p className="card-text">
            Our customers are at the heart of everything we do. We strive to offer excellent service and a seamless 
            shopping experience. Our friendly team is always here to assist you and answer any questions you may 
            have.
          </p>
        </div>
        <div className="about-card">
          <h2 className="card-title">Thank You</h2>
          <p className="card-text">
            Thank you for choosing us as your go-to destination for footwear. We look forward to serving you and 
            helping you find the perfect pair of shoes that you'll love.
          </p>
        </div>
      </div>
    </div>
      <Footer/>
      </div>
  );
};

export default About;
