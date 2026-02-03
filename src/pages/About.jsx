import React, { useState, useEffect, useRef } from 'react';
import { FaCheck, FaLeaf, FaFlask, FaHospital, FaGlobeAmericas, FaRecycle, FaIndustry, FaBullseye, FaEye, FaAward, FaUsers, FaShieldAlt } from 'react-icons/fa';

import heroImg from '../assets/hero.jpg';
import aboutImg from '../assets/aboutus.png';
import leafLeft from '../assets/leaf.png';
import leafRight from '../assets/leafright.png';

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="about-hero-overlay"></div>
        <div className="container about-hero-content text-center">
         <div className="contact-leaf-icon ">
                    <FaLeaf />
                  </div>
          <h1 className="about-hero-title text-center">About Us</h1>
          <p className="about-hero-text text-center">
            Committed to providing authentic ayurvedic solutions for a healthy lifestyle.
          </p>
         
        </div>
      </section>

      {/* Intro Section */}
      <section className="about-intro-section">
        <div className="container">
          <div className="who-we-are-card">
            <div className="row g-0 align-items-center">
              <div className="col-lg-6">
                <div className="about-content p-4 p-lg-5">
                  <h3 className="content-title">Who We Are</h3>
                  <p className="content-text">
NAH Ayutech, an initiative of Nirvikar Ayurved Hospital, is a leading Ayurvedic healthcare and trading enterprise specializing in modern Panchakarma instruments and therapeutic innovations. We design, manufacture, import, export, and supply high-quality Ayurvedic tools that combine traditional wisdom with advanced technology. Our mission is to make Ayurvedic therapies safer, standardized, efficient, and globally competitive.               </p>
                  <ul className="check-list">
                    <li><FaCheck className="check-icon" /> Authentic Ayurvedic Products</li>
                    <li><FaCheck className="check-icon" /> Precision Engineered Instruments</li>
                    <li><FaCheck className="check-icon" /> Trusted by Clinics & Hospitals</li>
                    <li><FaCheck className="check-icon" /> Pan-India Delivery</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-image-wrapper-card h-100">
                  <img src={aboutImg} alt="Who We Are" className="img-fluid w-52 object-fit-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Vision & Mission Section */}
       <section className="py-3 text-center new-product bg-text ">
         <div className="container">
             <div className="mb-3 mt-5 text-success">
                 <i className="fa fa-leaf fa-2x"></i>
             </div>
             <h3 className="section-title">Our Vision & Mission</h3>
             <p className="text-muted">Discover newly launched Ayurvedic therapy essentials and Panchakarma care products <br /> designed for doctors, clinics, and wellness centers.</p>
         </div>
      </section>
      <section className="vision-mission-section">
        <div className="container position-relative z-2">
          <div className="row g-4">
            {/* Mission Card */}
            <div className="col-lg-6">
              <div className="vm-card mission-card">
                <div className="vm-content">
                  <div className="vm-icon-wrapper">
                    <FaBullseye className="vm-icon" />
                  </div>
                  <h3 className="vm-title">Our Mission</h3>
                  <p className="vm-text">
                    To revolutionize the Ayurvedic ecosystem by providing high-quality, scientifically validated, and standardized Panchakarma instruments. We aim to bridge the gap between ancient wisdom and modern technology, ensuring safety, efficacy, and global acceptance of Ayurvedic therapies.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="col-lg-6">
              <div className="vm-card vision-card">
                <div className="vm-content">
                  <div className="vm-icon-wrapper">
                    <FaEye className="vm-icon" />
                  </div>
                  <h3 className="vm-title">Our Vision</h3>
                  <p className="vm-text">
                    To be the global leader in Ayurvedic technology and infrastructure, empowering wellness centers and hospitals with state-of-the-art solutions. We envision a world where Ayurveda is the first choice for holistic healing, supported by world-class equipment and diagnostic tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Leafs */}
        <img src={leafLeft} className="vm-leaf-left" alt="" />
        <img src={leafRight} className="vm-leaf-right" alt="" />
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side: Text */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <span className="achievements-subtitle">Our Recent Achievements</span>
              <h2 className="achievements-title">Benefit From Choosing The Best</h2>
              <p className="achievements-desc">
                We take pride in our journey of excellence, delivering premium Ayurvedic solutions globally. Our commitment to quality and customer satisfaction sets us apart.
              </p>
            </div>

            {/* Right Side: Cards Grid */}
            <div className="col-lg-7">
              <div className="row g-4">
                {/* Card 1 */}
                <div className="col-md-6">
                  <div className="achievement-card">
                    <div className="ach-icon-box">
                      <FaAward className="ach-icon" />
                    </div>
                    <div className="ach-content">
                      <h3 className="ach-number"><CountUp end={25} suffix="+" /></h3>
                      <p className="ach-label">Years Experience</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-6">
                  <div className="achievement-card">
                    <div className="ach-icon-box">
                      <FaUsers className="ach-icon" />
                    </div>
                    <div className="ach-content">
                      <h3 className="ach-number"><CountUp end={60} suffix="+" /></h3>
                      <p className="ach-label">Happy Customers</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-6">
                  <div className="achievement-card">
                    <div className="ach-icon-box">
                      <FaFlask className="ach-icon" />
                    </div>
                    <div className="ach-content">
                      <h3 className="ach-number"><CountUp end={800} suffix="+" /></h3>
                      <p className="ach-label">Our Products</p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="col-md-6">
                  <div className="achievement-card">
                    <div className="ach-icon-box">
                      <FaShieldAlt className="ach-icon" />
                    </div>
                    <div className="ach-content">
                      <h3 className="ach-number"><CountUp end={100} suffix="%" /></h3>
                      <p className="ach-label">Product Purity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
