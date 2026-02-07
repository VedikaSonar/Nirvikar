import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaMortarPestle, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import leafright from '../assets/leafright.png';
import leafbottom from '../assets/leafbottom.png';
import { getProducts, getImageUrl } from '../services/api';
import panchkarmatable from "../assets/panchakarma table.jpeg";

const Footer = () =>{
    const [topProducts, setTopProducts] = useState([]);

    useEffect(() => {
        const fetchTopProducts = async () => {
            try {
                const data = await getProducts();
                if (data && data.products) {
                    // Already sorted by createdAt DESC from backend
                    setTopProducts(data.products.slice(0, 2));
                }
            } catch (error) {
                console.error("Error fetching top products for footer:", error);
            }
        };
        fetchTopProducts();
    }, []);

    return(
 
      <footer className="footer-section">
        {/* Footer Section */}
        {/* Newsletter Part */}
        <div className="container newsletter-container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <h2 className="newsletter-title">
                Sign Up To Get Updates & News About Us..
              </h2>
            </div>
            <div className="col-md-7">
              <div className="newsletter-form">
                <input type="email" placeholder="Enter Your Email..." className="newsletter-input" />
                <button className="subscribe-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Main Footer Content */}
        <div className="container footer-content">
          <div className="row">
            {/* Col 1: Brand */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-brand">
                <img src={logo} alt="brand logo" width={60} className='mb-3' />
                <p className="footer-desc">
                 NAH Ayutech Pvt. Ltd., under Nirvikar Ayurveda, provides complete Panchakarma instruments, therapy kits, Ayurvedic pharmacy products, consultancy, and hospital solutions across India.
                </p>
                <div className="social-icons">
                  <a href="#" className="social-link"><FaFacebookF /></a>
                  <a href="#" className="social-link"><FaTwitter /></a>
                  <a href="#" className="social-link"><FaPinterestP /></a>
                  <a href="#" className="social-link"><FaInstagram /></a>
                </div>
              </div>
            </div>

            {/* Col 2: Useful Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h4 className="footer-heading">Useful Links</h4>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">Shopping FAQs</a></li>
              </ul>
            </div>

            {/* Col 3: Contact Info */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h4 className="footer-heading">Contact Info</h4>
              <ul className="contact-list">
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span className='text-white'>B Wing, 1st Floor, Jai Ganesh Samrajya,
Bhosari, Pune – 39</span>
                </li>
                <li>
                  <FaPhoneAlt className="contact-icon" />
                  <span className='text-white'>+91 7447476486 <br /> +91 9373284792</span>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <span className='text-white'>nirvikarayurveda@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Recent Blog */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h4 className="footer-heading">Top Products</h4>

              <div className="blog-list">
                {topProducts.length > 0 ? (
                    topProducts.map((product, index) => (
                        <div className="blog-item" key={product.id}>
                          <Link to={`/products/${product.id}`} style={{ display: 'contents', textDecoration: 'none', color: 'inherit' }}>
                              <img 
                                src={getImageUrl(product.main_image) || panchkarmatable} 
                                alt={product.product_name} 
                                className="blog-thumb" 
                                style={{ objectFit: 'cover', cursor: 'pointer' }}
                                onError={(e) => { e.target.onerror = null; e.target.src = panchkarmatable; }}
                              />
                              <div className="blog-info">
                                <span className="blog-date">
                                    {index === 0 ? "Best Seller" : "Most Used"}
                                </span>
                                <h6 className="blog-title">
                                    {product.product_name}
                                </h6>
                              </div>
                          </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-white">Loading products...</p>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Leaf Right */}
        <img src={leafright} alt="Leaf Decoration" className="footer-leaf-right" />
        
        {/* Decorative Leaf Bottom Left (using leafbottom or similar) */}
        <img src={leafbottom} alt="Leaf Decoration" className="footer-leaf-left" />

        {/* Copyright */}
        <div className="footer-bottom text-center">
          <p>© 2026 NAH Ayutech Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </footer>
    );
};

export default Footer;
