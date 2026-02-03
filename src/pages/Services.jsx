import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaUserMd, FaSpa, FaFlask, FaHandHoldingHeart, FaStethoscope, FaCheckCircle } from 'react-icons/fa';

// Import images
import bgimg from '../assets/bgimg.avif';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.jpg';
import service4 from '../assets/service4.jpg';
import consultation from '../assets/cunsaltation.png';
import logo from '../assets/logo.png';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Panchakarma Therapy",
      desc: "Detoxify and rejuvenate your body with our authentic Panchakarma treatments tailored to your constitution.",
      img: service1,
      icon: <FaSpa />
    },
    {
      id: 2,
      title: "Ayurvedic Consultation",
      desc: "Get personalized health assessments and treatment plans from our experienced Ayurvedic doctors.",
      img: consultation,
      icon: <FaUserMd />
    },
    {
      id: 3,
      title: "Herbal Medicines",
      desc: "High-quality, authentic herbal formulations prepared according to traditional texts for various ailments.",
      img: service2,
      icon: <FaFlask />
    },
    {
      id: 4,
      title: "Wellness Programs",
      desc: "Holistic wellness programs designed to restore balance, reduce stress, and enhance overall vitality.",
      img: service3,
      icon: <FaHandHoldingHeart />
    },
    {
      id: 5,
      title: "Yoga & Meditation",
      desc: "Integrate physical postures and mental focus to achieve harmony between body, mind, and soul.",
      img: logo, // Using logo as placeholder if specific icon/img missing
      icon: <FaLeaf />
    },
    {
      id: 6,
      title: "Diet & Lifestyle",
      desc: "Nutritional guidance and lifestyle modifications based on your Dosha for sustainable health.",
      img: service4,
      icon: <FaStethoscope />
    }
  ];

  const features = [
    {
      title: "Expert Practitioners",
      desc: "Our team consists of highly qualified and experienced Ayurvedic doctors and therapists."
    },
    {
      title: "Authentic Treatments",
      desc: "We strictly adhere to traditional Ayurvedic principles and use genuine herbal products."
    },
    {
      title: "Personalized Care",
      desc: "Every treatment plan is customized to meet the unique health needs of each individual."
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-overlay"></div>
        <div className="container relative-z">
          <h1 className="page-title">Our Services</h1>
          <p className="hero-subtitle">Holistic Healing for Body, Mind & Soul</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="service-card-page">
                  <div className="service-card-img">
                    <img src={service.img} alt={service.title} />
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-text">{service.desc}</p>
                  <Link to="/contact" className="service-read-more">
                    Book Now <FaCheckCircle />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title text-secondary-green fw-bold">Why Choose Us?</h2>
              <p className="section-subtitle text-muted">Experience the true essence of Ayurveda with us.</p>
            </div>
            {features.map((feature, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="priority-card text-center">
                  <div className="priority-icon">
                    <FaLeaf />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary-green text-white text-center">
        <div className="container">
          <h2 className="mb-3 fw-bold">Start Your Healing Journey Today</h2>
          <p className="mb-4 lead">Contact us to schedule a consultation or learn more about our therapies.</p>
          <Link to="/contact" className="btn btn-light btn-lg rounded-pill px-5 fw-bold text-primary-green">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
