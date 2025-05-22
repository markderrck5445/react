import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation(); // Get current location/route
  const navRef = useRef(null); // Create a reference to navbar element

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close menu when location changes (user clicks a link)
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location]);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Toggle menu open/closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="navbar-container" ref={navRef}>
      
      
      {/* Hamburger menu button - only visible on mobile */}
      {isMobile && (
        <div className="hamburger-menu">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Regular navbar - visible on desktop or when mobile menu is opened */}
      <div className={isMobile && !isMenuOpen ? "navbar-hidden" : ""}>
        {/* Top navbar */}
        <div className="top-navbar">
          <div className="container">
            <nav>
              {/* Left side links */}
              <ul className="top-left-links">
                <li>
                  <Link to="/admin" className={isActive('/admin')}>
                    Admin
                  </Link>
                </li>
                <li>
                  <Link to="/services" className={isActive('/services')}>
                    Services
                  </Link>
                </li>
              </ul>

              {/* Right side auth links */}
              <ul className="top-right-auth">
                <li>
                  <Link to="/login" className={isActive('/login')}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className={`signup-btn ${isActive('/signup')}`}>
                    Sign Up
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Middle navbar - Home, About, Contact */}
        <div className="middle-navbar-wrapper">
          <div className="container">
            <nav className="middle-navbar">
              <ul>
                <li>
                  <Link to="/" className={isActive('/')}>Home</Link>
                </li>
                <li>
                  <Link to="/about" className={isActive('/about')}>About</Link>
                </li>
                <li>
                  <Link to="/contact" className={isActive('/contact')}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMobile && isMenuOpen && (
        <div className="mobile-menu-panel">
          <div className="mobile-menu-content">
            {/* Top navbar items */}
            <div className="mobile-section">
              <h3>Resources</h3>
              <ul>
                <li>
                  <Link to="/admin" className={isActive('/admin')}>
                    Admin
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className={isActive('/blog')}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/services" className={isActive('/services')}>
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Middle navbar items */}
            <div className="mobile-section">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <Link to="/" className={isActive('/')}>Home</Link>
                </li>
                <li>
                  <Link to="/about" className={isActive('/about')}>About</Link>
                </li>
                <li>
                  <Link to="/contact" className={isActive('/contact')}>Contact</Link>
                </li>
              </ul>
            </div>

            {/* Account links */}
            <div className="mobile-section">
              <h3>Account</h3>
              <ul>
                <li>
                  <Link to="/login" className={isActive('/login')}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className={`signup-btn ${isActive('/signup')}`}>
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;