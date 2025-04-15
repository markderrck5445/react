import React from 'react';
function About({ onBack }) {
  return (
    <div className="about-page">
      <button className="back-button" onClick={onBack}>← Back to Blog</button>
      
      <section className="about-section">
        <h2>About Us</h2>
        
        <div className="about-container">
          <div className="about-image">
            {/* Placeholder for company image */}
            <div className="image-placeholder">
              <span>Company Image</span>
            </div>
          </div>
          
          <div className="about-content">
            <h3>Our Story</h3>
            <p>
              Founded in 2023, our blog and web development company has been dedicated to sharing knowledge
              and creating exceptional digital experiences. What started as a passion project between
              three friends with backgrounds in software development, design, and content creation
              has grown into a trusted resource for web developers and businesses alike.
            </p>
            
            <p>
              We believe in the power of well-crafted content and intuitive design to transform ideas
              into impactful digital solutions. Our team combines technical expertise with creative 
              thinking to deliver results that exceed expectations.
            </p>
            
            <div className="mission-vision">
              <div className="mission">
                <h4>Our Mission</h4>
                <p>
                  To empower individuals and businesses with practical knowledge and digital solutions
                  that drive growth and foster innovation.
                </p>
              </div>
              
              <div className="vision">
                <h4>Our Vision</h4>
                <p>
                  To be the go-to resource for web development insights and create digital experiences 
                  that make a lasting impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="team-section">
        <h3>Our Team</h3>
        <div className="team-container">
          <div className="team-member">
            <div className="member-avatar">JD</div>
            <h4>Jane Doe</h4>
            <p className="member-title">Founder & Lead Developer</p>
            <p className="member-bio">
              Jane has over 10 years of experience in web development with expertise in React and modern 
              JavaScript frameworks.
            </p>
          </div>
          
          <div className="team-member">
            <div className="member-avatar">JS</div>
            <h4>John Smith</h4>
            <p className="member-title">Creative Director</p>
            <p className="member-bio">
              John brings his design expertise to ensure all our projects are not just functional, 
              but visually stunning and user-friendly.
            </p>
          </div>
          
          <div className="team-member">
            <div className="member-avatar">AJ</div>
            <h4>Alex Johnson</h4>
            <p className="member-title">Content Strategist</p>
            <p className="member-bio">
              Alex oversees our content strategy, ensuring all our blog posts and client content 
              are engaging, informative, and optimized for SEO.
            </p>
          </div>
        </div>
      </section>
      
      <section className="services-section">
        <h3>Our Services</h3>
        <p className="services-intro">
          We offer a comprehensive range of web development and content services to help your business thrive online.
        </p>
        
        <div className="services-container">
          <div className="service-item">
            <div className="service-icon">📱</div>
            <div className="service-details">
              <h4>Web Development</h4>
              <p>
                Custom websites built with React and modern frameworks, focusing on performance, 
                responsive design, and exceptional user experience.
              </p>
              <ul>
                <li>Single Page Applications</li>
                <li>E-commerce Websites</li>
                <li>Portfolio Sites</li>
                <li>Corporate Websites</li>
              </ul>
            </div>
          </div>
          
          <div className="service-item">
            <div className="service-icon">✍️</div>
            <div className="service-details">
              <h4>Content Creation</h4>
              <p>
                High-quality content tailored to your audience and optimized for search engines.
              </p>
              <ul>
                <li>Blog Articles</li>
                <li>Technical Tutorials</li>
                <li>Product Descriptions</li>
                <li>Email Newsletters</li>
              </ul>
            </div>
          </div>
          
          <div className="service-item">
            <div className="service-icon">🔍</div>
            <div className="service-details">
              <h4>SEO Optimization</h4>
              <p>
                Improve your site's visibility and ranking in search engine results.
              </p>
              <ul>
                <li>Keyword Research</li>
                <li>On-Page SEO</li>
                <li>Technical SEO Audits</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
          </div>
          
          <div className="service-item">
            <div className="service-icon">📊</div>
            <div className="service-details">
              <h4>Digital Marketing</h4>
              <p>
                Comprehensive digital marketing strategies to grow your online presence.
              </p>
              <ul>
                <li>Social Media Management</li>
                <li>Email Marketing Campaigns</li>
                <li>Content Marketing</li>
                <li>Analytics & Reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <h3>Ready to Work Together?</h3>
        <p>Let's discuss how we can help your business grow online.</p>
        <button className="/contact">Contact Us</button>
      </section>
    </div>
  );
}

export default About;