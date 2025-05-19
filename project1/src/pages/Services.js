import React from 'react';

// Import images
import pic6 from '../img/pic6.jpg';
import pic7 from '../img/pic7.jpg';
import pic8 from '../img/pic8.jpg';
import pic9 from '../img/pic9.jpg';
import pic10 from '../img/pic10.jpg';
import pic11 from '../img/pic11.jpg';

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
    </>
  );
};

export default Services;