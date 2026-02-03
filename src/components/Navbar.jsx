import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaPinterestP, FaLinkedinIn, FaSearch, FaTimes, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`custom-navbar ${isSticky ? 'sticky-top' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="top-bar-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaPinterestP /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
          <div className="top-bar-right d-flex align-items-center gap-3">
            <div className="currency-selector">
              <FaEnvelope className="contact-icon m-0" />
                         &nbsp;      <span>nirvikarayurveda@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="nav-main">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="CANA Logo" style={{ maxHeight: '50px' }} />
            </Link>
            
            <button 
              className="navbar-toggler" 
              type="button" 
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-controls="navbarNav" 
              aria-expanded={isNavOpen} 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse justify-content-center ${isNavOpen ? 'show' : ''}`} id="navbarNav">
              <button className="close-nav-btn d-lg-none" onClick={() => setIsNavOpen(false)}>
                <FaTimes />
              </button>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={() => setIsNavOpen(false)}>Home</Link>
                </li>
               
                <li className="nav-item">
                  <Link className="nav-link" to="/about" onClick={() => setIsNavOpen(false)}>About</Link>
                </li>
                 <li className="nav-item">
                  <Link className="nav-link" to="/products" onClick={() => setIsNavOpen(false)}>Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services" onClick={() => setIsNavOpen(false)}>Services </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" onClick={() => setIsNavOpen(false)}>Contact</Link>
                </li>
              </ul>
            </div>

            <div className="header-actions d-flex align-items-center">
              <div className="search-box">
                <input type="text" placeholder="Search Here..." className="search-input" />
                <button className="search-btn"><FaSearch /></button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

