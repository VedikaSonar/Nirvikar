import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaUserMd, FaSpa, FaFlask, FaHandHoldingHeart, FaStethoscope, FaCheckCircle, FaHospital, FaTools, FaGlobe, FaBoxOpen, FaAngleRight, FaMortarPestle, FaMotorcycle } from 'react-icons/fa';

// Import images
import bgimg from '../assets/bgimg.avif';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.jpg';
import service4 from '../assets/service4.jpg';
import consultation from '../assets/cunsaltation.png';
import logo from '../assets/logo.png';
import shirodhara from '../assets/Shirodhara.png';
import steamer from '../assets/Electric Steamer.png';
import table from '../assets/panchakarma table.jpeg';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Ayurvedic Instruments",
      desc: "High-quality, durable ayurvedic instruments designed for authentic clinical procedures and treatments.",
      img: shirodhara,
      rating: "4.8"
    },
    {
      id: 2,
      title: "Therapy Kits & Consumables",
      desc: "Complete therapy kits and daily consumables required for smooth panchakarma operations.",
      img: service1,
      rating: "4.9"
    },
    {
      id: 3,
      title: "Natural Pharmacy Products",
      desc: "Authentic ayurvedic medicines and herbal products sourced from trusted manufacturers.",
      img: service2,
      rating: "4.3"
    },
    {
      id: 4,
      title: "Hospital & OPD Setup",
      desc: "Comprehensive guidance and equipment for setting up new Ayurvedic hospitals and OPD clinics.",
      img: table,
      rating: "4.9"
    },
    {
      id: 5,
      title: "Instruments Installation & Support",
      desc: "Professional installation services and ongoing technical support for all your equipment.",
      img: steamer,
      rating: "4.9"
    },
    {
      id: 6,
      title: "Medical Tourism Guidance",
      desc: "Expert assistance in attracting and managing international patients for wellness tourism.",
      img: service3,
      rating: "4.9"
    }
  ];

  const features = [
    {
      title: "Trusted Experts",
      desc: "Our team consists of highly qualified and experienced Ayurvedic doctors and therapists."
    },
    {
      title: "High Quality Standards",
      desc: "We strictly adhere to traditional Ayurvedic principles and use genuine herbal products."
    },
    {
      title: "Dedicated Support",
      desc: "Every treatment plan is customized to meet the unique health needs of each individual."
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero-new">
       <div class="container contact-hero-content text-center">
       <div class="contact-leaf-icon mt-5">
       <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"></path></svg></div>
       <h1 class="contact-hero-title">Services</h1>
       <p class="contact-hero-text">Complete Panchakarma Solutions Under one roof</p>
       </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section-new">
        <div className="container">
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="service-card-new">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                     <div className="service-icon-box">
                        <img src={service.img} alt={service.title} className="service-img-icon" />
                     </div>
                     <span className="rating-badge">{service.rating}</span>
                  </div>
                  <h3 className="service-card-title-new">{service.title}</h3>
                  <p className="service-card-text-new">{service.desc}</p>
                  <Link to="/contact" className="service-read-more-new">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 {/* We are What you Need Section */}
      <section className="process-section" style={{ 
        backgroundImage: `url(${bgimg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(63, 87, 40, 0.89)',
          zIndex: 1
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="text-center mb-5">
             <div className="mb-3 text-white icon-top-leaf">
                 <FaLeaf size={40} />
             </div>
            <h3 className="section-title text-white">We are What you Need</h3>
            <p className="section-subtitle text-white-50">
             At NAH Ayutech Pvt. Ltd., we combine the wisdom of Ayurveda with modern innovation to provide complete Panchakarma healthcare solutions trusted by doctors, therapists, and hospitals across India.
            </p>
          </div>
          
          <div className="process-grid">
            {/* Step 1 */}
            <div className="process-item">
               <div className="process-icon">
                 <FaLeaf />
               </div>
               <h5 className="process-title">Authentic Ayurveda Products</h5>
               <div className="process-arrow">
                 <span className="arrow-circle"><FaAngleRight /></span>
               </div>
               <p className="process-desc">Premium quality instruments, kits, and medicines.</p>
            </div>
             {/* Step 2 */}
            <div className="process-item">
               <div className="process-icon">
                 <FaMortarPestle />
               </div>
               <h5 className="process-title">Advanced Therapy Equipment</h5>
               <div className="process-arrow">
                 <span className="arrow-circle"><FaAngleRight /></span>
               </div>
               <p className="process-desc">Designed for precision Panchakarma procedures.</p>
            </div>
             {/* Step 3 */}
            <div className="process-item">
               <div className="process-icon">
                 <FaFlask />
               </div>
               <h5 className="process-title">Ayurvedic Formulations
</h5>
               <div className="process-arrow">
                 <span className="arrow-circle"><FaAngleRight /></span>
               </div>
               <p className="process-desc">Certified herbal medicines and wellness solutions.</p>
            </div>
             {/* Step 4 */}
            <div className="process-item">
               <div className="process-icon">
                 <FaMotorcycle />
               </div>
               <h5 className="process-title">Fast & Safe Delivery
</h5>
               <div className="process-arrow">
                 <span className="arrow-circle"><FaAngleRight /></span>
               </div>
               <p className="process-desc">Home delivery available across India.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Your Success is Our Priority */}
      <section className="priority-section-new">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title-new">Your Success is Our Priority</h2>
              <p className="section-subtitle-new">Your well-being is our priority, ensuring holistic care and complete healing.</p>
            </div>
            {features.map((feature, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="priority-card-new">
                  <div className="priority-header mb-3">
                    <FaLeaf className="priority-icon-new" />
                    <h3 className="priority-title-new">{feature.title}</h3>
                  </div>
                  <p className="priority-desc-new">{feature.desc}</p>
                  <Link to="/contact" className="priority-read-more">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    
    </div>
  );
};

export default Services;
