import { useState } from 'react';
import logo192 from '../img/logo192.png'; // Adjust the path as necessary

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <div className="hero">
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      
      <p className="mb-6">
        If you have any questions, comments, or would like to collaborate, please feel free to reach out. 
        We are always excited to connect with fellow creatives and explore new opportunities.
      </p>
      
      <div className="mb-8 p-4 bg-gray-50 rounded-md">
        <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
        <div className="space-y-2">
          <p><span className="font-medium">Email:</span> contact@example.com</p>
          <p><span className="font-medium">Phone:</span> (+254) 748-090 862</p>
          <p><span className="font-medium">Address:</span> 00100 Nairobi, Waiyaki Way, Upendo Medical Clinic</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>
 </div>
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
   

    </div>
  );
}

// Default export for the component
export default ContactForm;

// Named export option
export { ContactForm };