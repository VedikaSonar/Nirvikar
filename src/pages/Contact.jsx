import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaLeaf } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero ">
        <div className="container contact-hero-content text-center">
          <div className="contact-leaf-icon mt-5">
            <FaLeaf />
          </div>
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-text">We’d love to hear from you — reach out anytime.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-main-card">
          <div className="row g-5 align-items-start">
            {/* Left: Company Details */}
            <div className="col-lg-5">
              <div className="contact-info-card">
                <h3 className="contact-card-title">Company Details</h3>
                <p className="contact-card-desc">
                  Our team is available during working hours. Contact us for appointments, partnerships, or product inquiries.
                </p>

                <div className="contact-details">
                  <div className="contact-item"> 
                    <div className="icon-box">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="info-box">
                      <span>B Wing, 1st Floor, Jai Ganesh Samrajya, Bhosari, Pune – 39</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="icon-box">
                      <FaPhoneAlt />
                    </div>
                    <div className="info-box">
                      <span>+91 7447476486 <br />
                        +91 9373284792</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="icon-box">
                      <FaEnvelope />
                    </div>
                    <div className="info-box">
                      <span>nirvikarayurveda@gmail.com</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="icon-box">
                      <FaClock />
                    </div>
                    <div className="info-box">
                      <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Left column small map card to match reference */}
              <div className="contact-map-card mt-4">
                <div className="map-overlay-content">
                  <h5>Headquarters</h5>
                  <p>123, Street Name, City, Country</p>
                </div>
                <iframe
                  title="map-mini"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.260533362174!2d77.3788883!3d28.6219444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzE5LjAiTiA3N8KwMjInNDQuMCJF!5e0!3m2!1sen!2sin!4v1625562000000!5m2!1sen!2sin"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            
            {/* Right: Contact Form */}
            <div className="col-lg-7">
              <div className="contact-form-card">
                <h3 className="contact-card-title">Drop us a Message</h3>
                <p className="contact-card-desc mb-4">We’ll get back to you as soon as possible.</p>

                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control custom-input" id="name" placeholder="Enter your name" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control custom-input" id="email" placeholder="Enter your email" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control custom-input" id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control custom-input" id="message" rows="5" placeholder="Your message..."></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-send bg-success text-white">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Contact;
