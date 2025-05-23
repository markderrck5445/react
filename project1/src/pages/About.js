import React from 'react';
import logo192 from '../img/logo192.png';
function About({ onBack }) {
  return (
    <div>
    <div className="about-page">
      <section className="about-section">
        <h2>About Us</h2>
        <div className="about-container">
          <div className="about-content">
            <h3>Our Story</h3>
            <p>
              Founded in 2023, our studio has been dedicated to capturing creativity and delivering exceptional visual experiences. What started as a small photography and videography studio has grown into a full-fledged creative hub, offering a wide range of services for individuals and businesses alike.
            </p>
            <p>
              We believe in the power of storytelling through visuals. Whether it's a cinematic video, a professional photoshoot, or a creative branding project, our team combines technical expertise with artistic vision to bring your ideas to life.
            </p>
            <div className="mission-vision">
              <div className="mission">
                <h4>Our Mission</h4>
                <p>
                  To empower individuals and businesses by creating stunning visual content that tells their unique stories and leaves a lasting impression.
                </p>
              </div>
              <div className="vision">
                <h4>Our Vision</h4>
                <p>
                  To be the leading creative studio, known for innovation, quality, and the ability to transform ideas into captivating visual experiences.
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
            <p className="member-title">Founder & Lead Photographer</p>
            <p className="member-bio">
              Jane has over 10 years of experience in photography and videography, specializing in capturing moments that tell compelling stories.
            </p>
          </div>

          <div className="team-member">
            <div className="member-avatar">JS</div>
            <h4>John Smith</h4>
            <p className="member-title">Creative Director</p>
            <p className="member-bio">
              John brings his design expertise to ensure all our projects are visually stunning, innovative, and aligned with our clients' visions.
            </p>
          </div>

          <div className="team-member">
            <div className="member-avatar">AJ</div>
            <h4>Alex Johnson</h4>
            <p className="member-title">Content Strategist</p>
            <p className="member-bio">
              Alex oversees our content strategy, ensuring all our visual and written content is engaging, impactful, and tailored to our clients' needs.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h3>Our Services</h3>
        <p className="services-intro">
          We offer a comprehensive range of creative studio services to help you bring your vision to life.
        </p>
        <div className="services-container">
          <div className="service-item">
            <div className="service-icon">📸</div>
            <div className="service-details">
              <h4>Photography</h4>
              <p>
                Professional photoshoots for events, portraits, and commercial projects.
              </p>
              <ul>
                <li>Event Photography</li>
                <li>Portrait Photography</li>
                <li>Product Photography</li>
                <li>Commercial Shoots</li>
              </ul>
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon">🎥</div>
            <div className="service-details">
              <h4>Videography</h4>
              <p>
                High-quality video production for events, branding, and storytelling.
              </p>
              <ul>
                <li>Event Videography</li>
                <li>Corporate Videos</li>
                <li>Documentaries</li>
                <li>Promotional Videos</li>
              </ul>
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon">🎨</div>
            <div className="service-details">
              <h4>Creative Design</h4>
              <p>
                Custom graphic design and branding solutions to elevate your business.
              </p>
              <ul>
                <li>Logo Design</li>
                <li>Brand Identity</li>
                <li>Marketing Materials</li>
                <li>Social Media Graphics</li>
              </ul>
            </div>
          </div>

          <div className="service-item">
            <div className="service-icon">💡</div>
            <div className="service-details">
              <h4>Studio Rentals</h4>
              <p>
                Fully equipped studio spaces for your photography and videography needs.
              </p>
              <ul>
                <li>Photography Studios</li>
                <li>Video Production Studios</li>
                <li>Lighting Equipment</li>
                <li>Props and Backdrops</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h3>Ready to Create Something Amazing?</h3>
        <p>Contact us today to discuss your project and bring your vision to life.</p>
        <button className="contact-button">
          <a href="/contact">Contact Us</a>
        </button>
      </section>
    </div>

       
<div class="footer-container">
    <div class="footer-column">
      <h3><i class="fas fa-store"></i> Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  

    <div className="footer-column">
      <h3><i className="fas fa-share-alt"></i> Socials</h3>
      <ul className="social-links">
        <li><i className class="fa-brands fa-youtube"></i><a href="#">Youtube</a></li>
        <li>
          <i className="fab fa-facebook-f"></i> <a href="#">Facebook</a>
        </li>
        <li>
          <i className="fab fa-instagram"></i> <a href="#">Instagram</a>
        </li>
      </ul>
    </div>

    <div class="footer-column">
      <h3><i class="fas fa-paper-plane"></i> CONTACT</h3>
      <p>example@gmail.com</p>
    </div>

    <div className="foot-logo">
      <img src={logo192} alt="Logo" />
    </div>
      </div>

      </div>

  );
}

export default About;