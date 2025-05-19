import React from 'react'
import logo192 from '../img/logo192.png';

function Footer() {
  return (
    <div>
  <div class="footer-container">
    <div class="footer-column">
      <h3><i class="fas fa-store"></i> Links</h3>
      <ul className="orderd">
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


 </div>
  )
}

export default Footer;