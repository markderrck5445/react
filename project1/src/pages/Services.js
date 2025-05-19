import React from 'react';

// Import images
import pic6 from '../img/pic6.jpg';
import pic7 from '../img/pic7.jpg';
import pic8 from '../img/pic8.jpg';
import pic9 from '../img/pic9.jpg';
import pic10 from '../img/pic10.jpg';
import pic11 from '../img/pic11.jpg';
import logo192 from '../img/logo192.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
  // Service card data with descriptions and IDs for the buttons
  const services = [
    { 
      id: 'button1', 
      image: pic7, 
      title: 'Film Making'
    },
    { 
      id: 'button2', 
      image: pic6, 
      title: 'Podcast'
    },
    { 
      id: 'button3', 
      image: pic8, 
      title: 'Photography'
    },
    { 
      id: 'button4', 
      image: pic9, 
      title: 'Videography'
    },
    { 
      id: 'button5', 
      image: pic10, 
      title: 'Photo Lab'
    },
    { 
      id: 'button6', 
      image: pic11, 
      title: 'Content Writing'
    },
    { 
      id: 'button6', 
      image: pic11, 
      title: 'Content Writing'
    }
  ];

  const handleBookNow = (serviceId) => {
    console.log(`Booking service with id: ${serviceId}`);
    // Add your booking logic here
  };

  return (
    <>
      <div className="title2">
        <h2>Services <span>i Offer</span></h2>
      </div>

      <div className="wiz">
        {services.map((service) => (
          <div className="card" key={service.id}>
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <a 
              href="#" 
              className="button" 
              id={service.id}
              onClick={(e) => {
                e.preventDefault();
                handleBookNow(service.id);
              }}
            >
              Book Now
            </a>
          </div>
        ))}
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
        <li><i className="fab fa-youtube"></i> <a href="#">Youtube</a></li>
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
       <img src={logo192.png}/>
    </div>
     </div>
    </>
  );
};

export default Services;