import React from 'react';


function Services({ onBack }) {
  return (
    <div className="services-page">
      <button className="back-button" onClick={onBack}>← Back to Blog</button>
      
      <h2>Our Services</h2>
      <p className="services-intro">
        We offer a range of web development and content creation services to help you establish 
        your online presence. Below are our core services:
      </p>
      
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">📱</div>
          <h3>Web Development</h3>
          <p>Custom websites built with React and modern frameworks. We focus on performance, 
             responsive design, and user experience.</p>
          <ul>
            <li>Single Page Applications</li>
            <li>E-commerce Websites</li>
            <li>Portfolio Websites</li>
            <li>Corporate Sites</li>
          </ul>
        </div>
        
        <div className="service-card">
          <div className="service-icon">✍️</div>
          <h3>Content Creation</h3>
          <p>High-quality content tailored to your audience and optimized for search engines.</p>
          <ul>
            <li>Blog Articles</li>
            <li>Technical Tutorials</li>
            <li>Product Descriptions</li>
            <li>Email Newsletters</li>
          </ul>
        </div>
        
        <div className="service-card">
          <div className="service-icon">🔍</div>
          <h3>SEO Optimization</h3>
          <p>Improve your site's visibility and ranking in search engine results.</p>
          <ul>
            <li>Keyword Research</li>
            <li>On-Page SEO</li>
            <li>Technical SEO Audits</li>
            <li>Performance Optimization</li>
          </ul>
        </div>
        
        <div className="service-card">
          <div className="service-icon">📊</div>
          <h3>Digital Marketing</h3>
          <p>Comprehensive digital marketing strategies to grow your online presence.</p>
          <ul>
            <li>Social Media Management</li>
            <li>Email Marketing Campaigns</li>
            <li>Content Marketing</li>
            <li>Analytics & Reporting</li>
          </ul>
        </div>
      </div>
      
      <div className="contact-section">
        <h3>Ready to get started?</h3>
        <p>Contact us today to discuss your project needs and get a free quote.</p>
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
}

export default Services;