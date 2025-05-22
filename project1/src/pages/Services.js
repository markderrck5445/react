import React, { useState } from 'react';
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
  // State to manage booking selections for each service
  const [bookingSelections, setBookingSelections] = useState({});

  // Service card data with pricing, duration, and time slots
  const services = [
    {
      id: 'button1',
      image: pic7,
      title: 'Film Making',
      sessions: [
        { type: 'Basic Package', price: 299, duration: 4 },
        { type: 'Standard Package', price: 499, duration: 8 },
        { type: 'Premium Package', price: 799, duration: 12 }
      ]
    },
    {
      id: 'button2',
      image: pic6,
      title: 'Podcast',
      sessions: [
        { type: 'Single Episode', price: 149, duration: 2 },
        { type: 'Multi Episode', price: 249, duration: 4 },
        { type: 'Full Production', price: 399, duration: 6 }
      ]
    },
    {
      id: 'button3',
      image: pic8,
      title: 'Photography',
      sessions: [
        { type: 'Portrait Session', price: 199, duration: 2 },
        { type: 'Event Photography', price: 349, duration: 4 },
        { type: 'Commercial Shoot', price: 599, duration: 8 }
      ]
    },
    {
      id: 'button4',
      image: pic9,
      title: 'Videography',
      sessions: [
        { type: 'Basic Video', price: 249, duration: 3 },
        { type: 'Professional Video', price: 449, duration: 6 },
        { type: 'Cinematic Package', price: 699, duration: 10 }
      ]
    },
    {
      id: 'button5',
      image: pic10,
      title: 'Photo Lab',
      sessions: [
        { type: 'Basic Editing', price: 99, duration: 2 },
        { type: 'Advanced Retouching', price: 199, duration: 4 },
        { type: 'Complete Processing', price: 299, duration: 6 }
      ]
    },
    {
      id: 'button6',
      image: pic11,
      title: 'Content Writing',
      sessions: [
        { type: 'Blog Posts', price: 79, duration: 2 },
        { type: 'Website Content', price: 149, duration: 4 },
        { type: 'Full Content Strategy', price: 299, duration: 8 }
      ]
    }
  ];

  // Generate time slots (9 AM to 6 PM)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 18; hour++) {
      const time12h = hour > 12 ? `${hour - 12}:00 PM` : hour === 12 ? '12:00 PM' : `${hour}:00 AM`;
      slots.push({
        value: `${hour}:00`,
        label: time12h
      });
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Handle selection changes
  const handleSelectionChange = (serviceId, field, value) => {
    setBookingSelections(prev => ({
      ...prev,
      [serviceId]: {
        ...prev[serviceId],
        [field]: value
      }
    }));
  };

  const handleBookNow = (serviceId) => {
    const selection = bookingSelections[serviceId];
    if (!selection || !selection.sessionType || !selection.startTime) {
      alert('Please select a session type and start time before booking.');
      return;
    }

    const service = services.find(s => s.id === serviceId);
    const selectedSession = service.sessions.find(s => s.type === selection.sessionType);
    
    console.log('Booking Details:', {
      serviceId,
      service: service.title,
      sessionType: selection.sessionType,
      price: selectedSession.price,
      duration: selectedSession.duration,
      startTime: selection.startTime
    });
    
    // Add your booking logic here
    alert(`Booking confirmed for ${service.title} - ${selection.sessionType} starting at ${selection.startTime}`);
  };

  return (
    <>
      <div className="title2">
        <h2>Services <span>i Offer</span></h2>
      </div>

      <div className="wiz">
        {services.map((service) => {
          const currentSelection = bookingSelections[service.id] || {};
          const selectedSession = service.sessions.find(s => s.type === currentSelection.sessionType);
          
          return (
            <div className="card" key={service.id}>
              <img src={service.image} alt={service.title} />
              <h2>{service.title}</h2>
              
              {/* Session Type Selection */}
              <div className="booking-section">
                <label htmlFor={`session-${service.id}`}>Session Type:</label>
                <select
                  id={`session-${service.id}`}
                  value={currentSelection.sessionType || ''}
                  onChange={(e) => handleSelectionChange(service.id, 'sessionType', e.target.value)}
                  className="booking-select"
                >
                  <option value="">Select Session Type</option>
                  {service.sessions.map((session, index) => (
                    <option key={index} value={session.type}>
                      {session.type} - ${session.price} ({session.duration}h)
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration Display */}
              {selectedSession && (
                <div className="duration-info">
                  <span className="duration-label">Duration: {selectedSession.duration} hours</span>
                  <span className="price-label">Price: ${selectedSession.price}</span>
                </div>
              )}

              {/* Start Time Selection */}
              <div className="booking-section">
                <label htmlFor={`time-${service.id}`}>Start Time:</label>
                <select
                  id={`time-${service.id}`}
                  value={currentSelection.startTime || ''}
                  onChange={(e) => handleSelectionChange(service.id, 'startTime', e.target.value)}
                  className="booking-select"
                  disabled={!selectedSession}
                >
                  <option value="">Select Start Time</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
              </div>

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
          );
        })}
      </div>

      <div className="footer-container">
        <div className="footer-column">
          <h3><i className="fas fa-store"></i> Links</h3>
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

        <div className="footer-column">
          <h3><i className="fas fa-paper-plane"></i> CONTACT</h3>
          <p>example@gmail.com</p>
        </div>

        <div className="foot-logo">
          <img src={logo192} alt="Logo" />
        </div>
      </div>
    </>
  );
};

export default Services;