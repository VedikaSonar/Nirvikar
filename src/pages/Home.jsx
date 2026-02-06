import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { FaArrowRight, FaMortarPestle, FaMotorcycle, FaAngleRight, FaLeaf, FaFlask, FaPlay, FaCertificate, FaCannabis, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import OwlCarousel from '../components/OwlCarousel';

import heroimg from "../assets/hero-sideimg.png";
import serviceimg1 from "../assets/service2.png";
import serviceimg2 from "../assets/service1.png";
import serviceimg3 from "../assets/service4.jpg";
import serviceimg4 from "../assets/service3.jpg";
import servicecorner from "../assets/services-corner.png";
import servicesIcon5 from "../assets/cunsaltation.png";
import servicesIcon6 from "../assets/logo.png";
import leaf from "../assets/leaf.png";
import leafright from "../assets/leafright.png";
import leaftop from "../assets/leaftop.png";
import leafbottom from "../assets/leafbottom.png";
import bgimg from "../assets/bgimg.avif";
import testimonialtop from "../assets/testimonialtop.png";
import panchkarmatable from "../assets/panchakarma table.jpeg";
import Viddhagni from "../assets/VIDDHAGNI YANTRA.png";
import Shirodhara from "../assets/Shirodhara.png";
import dhoopanyantrs from "../assets/dhoopan yantra.png";
import ElectricSteamer from "../assets/Electric Steamer.png";
import steamcabinet from "../assets/steam cabinet.png";
import WoodenPadabhyang from "../assets/Wooden Padabhyang.png";
import ShirodharaBrass from "../assets/Shirodhara Brass.png";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-leaf"></div>
        <div className="container hero-content">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-text">
                <h6 className="hero-subtitle">NAH Ayutech Pvt. Ltd.</h6>
                <h1 className="hero-title">
                  Complete Panchakarma Care, Instruments
                  <span style={{ color: '#7da640', fontWeight: 'bold' }}>
                    <Typewriter
                      words={['& Wellness Solutions', '& Herbal Treatments', '& Natural Healing']}
                      loop={0}
                      cursor
                      cursorStyle=''
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
                <button className="btn btn-custom-white bg-white">
                  Explore Our Products
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product-showcase text-center">
                {/* Placeholder for product image from design */}
                <img 
                  src={heroimg}
                  alt="Medical Marijuana Products" 
                  className="product-img-main"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="services-overlap bg-text" >
        <div className="container">
          <div className="service-card-wrapper">
            <div className="service-card">
              <div className="service-left">
                <h2 className="service-title">Professional services</h2>
                <p className="service-desc">
                 NAH Ayutech Pvt. Ltd., under the trusted guidance of Nirvikar Ayurveda, provides complete Ayurvedic healthcare solutions, supporting hospitals, clinics, and wellness centers with premium Panchakarma services, products, and consultancy.
                </p>

                <div className="service-list">
                  <div className="service-item">
                    <div className="service-icon">
                      <img src={serviceimg1} alt="Marketing" />
                    </div>
                    <span>Panchakarma Setup</span>
                  </div>
                  <div className="service-item">
                    <div className="service-icon">
                      <img src={serviceimg2} alt="Distribution" />
                    </div>
                    <span>Distribution</span>
                  </div>
                 
                  <div className="service-item">
                    <div className="service-icon">
                      <img src={servicesIcon5} alt="Consultation" />
                    </div>
                    <span>Consultation</span>
                  </div>
                   <div className="service-item">
                    <div className="service-icon">
                      <img src={serviceimg4} alt="Insurance" />
                    </div>
                    <span>Instruments Support</span>
                  </div>
                </div>
              </div>
              
              <div className="service-right">
                {/* Placeholder for service side image */}
                 <img 
                  src={servicecorner} 
                  alt="Hemp Flower" 
                  className="service-corner-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Spacer for next section */}
      <section className="py-3 text-center new-product bg-text">
         <div className="container">
             <div className="mb-3 text-success">
                 <i className="fa fa-leaf fa-2x"></i>
             </div>
             <h3 className="section-title">Our New Products</h3>
             <p className="text-muted">Discover newly launched Ayurvedic therapy essentials and Panchakarma care products <br /> designed for doctors, clinics, and wellness centers.</p>
         </div>
      </section>
      
      {/* Products Grid Section (before Our Best Services) */}
      <section className="products-grid-section">
        <img src={leaf} alt="" className="product-bg-leaf" />
        <img src={leafright} alt="" className="product-bg-leaf-right" />
        <div className="container">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              375: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="products-swiper"
            style={{ paddingBottom: '40px' }}
          >
            <SwiperSlide>
              <Link to="/products/1" className="text-decoration-none text-dark">
              <div className="product-card">
              
                <div className="product-thumb">
                  <img src={panchkarmatable} alt="panchakarma table" />
                </div>
                <div className="product-info">
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <h6 className="product-title">Panchakarma Table</h6>
                  <div className="product-price">
                  <span className="price-current">Rs. 70000</span>
                  <span className="price-old">Rs. 75000</span>
                </div>                </div>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/products/7" className="text-decoration-none text-dark">
              <div className="product-card">
               
                <div className="product-thumb">
                  <img src={Viddhagni} alt="Viddhagni yantra" />
                </div>
                <div className="product-info">
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                  </div>
                  <h6 className="product-title">Viddhagni Yantra</h6>
                  <div className="product-price">
                    <span className="price-current">Rs. 20000</span>
                    <span className="price-old">Rs. 24500</span>
                  </div>
                </div>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/products/3" className="text-decoration-none text-dark">
              <div className="product-card">
               
                <div className="product-thumb">
                  <img src={Shirodhara} alt="Shirodhara Machine" />
                </div>
                <div className="product-info">
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <h6 className="product-title">Shirodhara Machine</h6>
                  <div className="product-price">
                    <span className="price-current">Rs. 64000</span>
                    <span className="price-old">Rs. 69000</span>
                  </div>
                </div>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/products/6" className="text-decoration-none text-dark">
              <div className="product-card">
                
                <div className="product-thumb">
                  <img src={dhoopanyantrs} alt="Dhoopan Yantra" />
                </div>
                <div className="product-info">
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <h6 className="product-title">Dhoopan Yantra</h6>
                  <div className="product-price">
                    <span className="price-current">Rs. 2,999</span>
                    <span className="price-old">Rs. 3,999</span>
                  </div>
                </div>
              </div>
              </Link>
            </SwiperSlide>
              <SwiperSlide>
              <Link to="/products/2" className="text-decoration-none text-dark">
              <div className="product-card">
                
                <div className="product-thumb">
                  <img src={ElectricSteamer} alt="Electric Steamer" />
                </div>
                <div className="product-info">
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <h6 className="product-title">Electric Steamer</h6>
                  <div className="product-price">
                    <span className="price-current">Rs. 9500</span>
                    <span className="price-old">Rs. 11900</span>
                  </div>
                </div>
              </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="best-services-section">
        <div className="container">
          <div className="text-center mb-5">
           <div className="mb-3 text-success">
                 <i className="fa fa-leaf fa-2x"></i>
             </div>
            <h3 className="section-title">Our Best Services</h3>
            <p className="section-subtitle">
             We deliver complete Ayurvedic solutions from therapy instruments to consultancy and training, ensuring the highest standards in Panchakarma care.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-box">
              <div className="icon-wrap">
                <img src={serviceimg2} alt="Marijuana Medicine" />
              </div>
              <h5>Ayurvedic Instruments</h5>
              <p>Premium Panchakarma instruments engineered for hospitals and clinics.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
            <div className="service-box">
              <div className="icon-wrap">
                <img src={serviceimg1} alt="Cannabis Leaf" />
              </div>
              <h5>Therapy Kits & Consumables</h5>
              <p>Ready-to-use Panchakarma kits for all classical Ayurvedic procedures.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
            <div className="service-box">
              <div className="icon-wrap">
                <img src={servicesIcon6} alt="100% Natural Edibles" />
              </div>
              <h5>Natural Pharmacy Products</h5>
              <p>Authentic Ayurvedic medicines, oils, churnas, and formulations.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
            <div className="service-box">
              <div className="icon-wrap">
                <img src={serviceimg4} alt="Cannabis Flower" />
              </div>
              <h5>Hospital & OPD Setup</h5>
              <p>End-to-end consultancy for Ayurveda clinic and hospital development.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
            <div className="service-box">
              <div className="icon-wrap">
                <img src={servicesIcon5} alt="100% Fresh Apothecary" />
              </div>
              <h5>Cashless Insurance Support</h5>
              <p>Assistance with NABH, CGHS, and insurance empanelment services.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
            <div className="service-box">
              <div className="icon-wrap">
                <img src={serviceimg3} alt="Safe & Legal" />
              </div>
              <h5>Medical Tourism Guidance</h5>
              <p>Support for wellness tourism and Ayurveda retreat expansion.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
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
          backgroundColor: 'rgb(63 87 40 / 89%)',
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

      {/* Best Selling Section */}
      <section className="products-grid-section" style={{ background: '#f8fdf9', position: 'relative' }}>
        <img src={leaftop} alt="Leaf Top" style={{ 
          position: 'absolute', 
          top: -25, 
          left: -20, 
          zIndex: 1,
          width: '270px'
        }} />
        <img src={leafbottom} alt="Leaf Bottom" style={{ 
          position: 'absolute', 
          bottom: -25, 
          right: -170, 
          zIndex: 1,
          width: '470px'
        }} />

        <div className="container">
          <div className="text-center mb-5">
            <div className="mb-3 text-success">
                <FaLeaf size={30} />
            </div>
            <h3 className="section-title">Best Selling</h3>
            <p className="section-subtitle">
              Most trusted Panchakarma instruments and Ayurvedic therapy essentials preferred by professionals.
            </p>
          </div>
          
          <div className="products-grid">
            {/* Product 1 */}
            <Link to="/products/1" className="text-decoration-none text-dark">
            <div className="product-card">
              <div className="product-thumb">
                <img src={panchkarmatable} alt="panchakarna table" />
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i>
                </div>
                <h6 className="product-title">Panchakarma Table </h6>
                <div className="product-price">
                  <span className="price-current">Rs. 70000</span>
                  <span className="price-old">Rs. 75000</span>
                </div>
              </div>
            </div>
            </Link>

            {/* Product 2 */}
            <Link to="/products/7" className="text-decoration-none text-dark">
            <div className="product-card">
              
              <div className="product-thumb">
                <img src={Viddhagni} alt="Viddhagni yantra" />
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                </div>
                <h6 className="product-title">Viddhagni Yantra</h6>
                <div className="product-price">
                  <span className="price-current">Rs. 20000</span>
                  <span className="price-old">Rs. 24500</span>
                </div>
              </div>
            </div>
            </Link>

            {/* Product 3 */}
            <Link to="/products/3" className="text-decoration-none text-dark">
            <div className="product-card">
             
              <div className="product-thumb">
                <img src={Shirodhara} alt="Shirodhara Machine" />
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                </div>
                <h6 className="product-title">Shirodhara Machine</h6>
                <div className="product-price">
                  <span className="price-current">Rs. 64000</span>
                  <span className="price-old">Rs. 69000</span>
                </div>
              </div>
            </div>
            </Link>

            {/* Product 4 */}
            <Link to="/products/6" className="text-decoration-none text-dark">
            <div className="product-card">
              
              <div className="product-thumb">
                <img src={dhoopanyantrs} alt="dhoopan yantrs" />
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i>
                </div>
                <h6 className="product-title">Dhoopan Yantrs</h6>
                <div className="product-price">
                  <span className="price-current">Rs. 2,999</span>
                  <span className="price-old">Rs. 3,999</span>
                </div>
              </div>
            </div>
            </Link>

            {/* Product 5 */}
            <Link to="/products/4" className="text-decoration-none text-dark">
            <div className="product-card">
              
              <div className="product-thumb">
                <img src={steamcabinet} alt="Steam Cabinet" />
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                </div>
                <h6 className="product-title">Steam Cabinet</h6>
                <div className="product-price">
                  <span className="price-current">Rs. 32,000</span>
                  <span className="price-old">Rs. 36,000</span>
                </div>
              </div>
            </div>
            </Link>

            {/* Product 6 */}
            <Link to="/products/2" className="text-decoration-none text-dark">
            <div className="product-card">
              <div className="product-thumb">
                <img src={ElectricSteamer} alt="Electric Steamer" />
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i>
                </div>
                <h6 className="product-title">Electric Steamer</h6>
 <div className="product-price">
                  <span className="price-current">Rs. 9,500</span>
                  <span className="price-old">Rs. 11,900</span>
                </div>              </div>
            </div>
            </Link>

            {/* Product 7 */}
            <Link to="/products/5" className="text-decoration-none text-dark">
            <div className="product-card">
             
              <div className="product-thumb">
                <img src={WoodenPadabhyang} alt="Wooden Padabhyang" />
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                </div>
                <h6 className="product-title">Wooden Padabhyang</h6>
                <div className="product-price">
                  <span className="price-current">Rs. 565/850/950</span>
                  <span className="price-old">Rs. 800/1100/1200</span>
                </div>
              </div>
            </div>
            </Link>

            {/* Product 8 */}
            <Link to="/products/8" className="text-decoration-none text-dark">
            <div className="product-card">
              <div className="product-thumb">
                <img src={ShirodharaBrass} alt="ShirodharaBrass" />
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i>
                </div>
                <h6 className="product-title">Shirodhara Brass</h6>
                <div className="product-price">
                  <span className="price-current">Rs. 3000</span>
                  <span className="price-old">Rs. 3500</span>
                </div>
              </div>
            </div>
            </Link>

          </div>
        </div>
      </section>

     

      {/* Making Medicine Section */}
      <section className="making-medicine-section mt-5">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Left Column: Video/Image */}
            <div className="col-md-6 video-column">
              <div className="video-overlay">
                <div className="play-button-wrapper">
                  
                </div>
              </div>
            </div>

            {/* Right Column: Info List */}
            <div className="col-md-6 info-column">
              <div className="info-list">
                
                {/* Item 1 */}
                <div className="info-item">
                  <div className="info-icon">
                    <FaCertificate />
                  </div>
                  <div className="info-content">
                    <h4 className="info-title">Trusted Nirvikar Ayurveda Expertise</h4>
                    <p className="info-desc">
                     Years of excellence in Ayurvedic hospital care and Panchakarma therapy solutions.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="info-item">
                  <div className="info-icon">
                    <FaLeaf />
                  </div>
                  <div className="info-content">
                    <h4 className="info-title">Premium Quality Products</h4>
                    <p className="info-desc">
                      All instruments and kits are designed for durability, hygiene, and professional use.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="info-item">
                  <div className="info-icon">
                    <FaMortarPestle />
                  </div>
                  <div className="info-content">
                    <h4 className="info-title">Complete Manufacturing & Supply</h4>
                    <p className="info-desc">
                     From instruments to medicines, we deliver a complete Ayurvedic ecosystem.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Happy Clients Section */}
      <section className="happy-clients-section">
        <img src={leaftop} alt="Leaf Decoration" style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '150px',
          zIndex: 0
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center mb-5">
            <div className="mb-3 text-success">
                <FaLeaf size={30} />
            </div>
            <h3 className="section-title">Happy Clients</h3>
            <p className="section-subtitle">
             Doctors, therapists, and wellness centers trust NAH Ayutech Pvt. Ltd. for authentic Panchakarma instruments and Ayurvedic healthcare support.
            </p>
          </div>

          <OwlCarousel
            className="owl-theme pb-5"
            loop
            margin={30}
            nav={false}
            dots={true}
            autoplay={true}
            autoplayTimeout={3000}
            responsive={{
              0: {
                items: 1
              },
              768: {
                items: 2
              }
            }}
          >
            <div className="item">
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i>
                </div>
                <p className="testimonial-text">
                  “Excellent quality Panchakarma instruments. Very professional service and fast delivery.”

                </p>
                <div className="client-info">
                  <img src="https://placehold.co/100x100?text=E" alt="Eleanor" className="client-img" />
                  <div className="client-name">Dr. Mehta</div>
                  <div className="client-role">Ayurvedic Consultant</div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i>
                </div>
                <p className="testimonial-text">
                 NAH Ayutech helped us set up our complete Panchakarma unit with expert guidance.
                </p>
                <div className="client-info">
                  <img src="https://placehold.co/100x100?text=A" alt="Anderson" className="client-img" />
                  <div className="client-name">Wellness Center</div>
                  <div className="client-role">Pune</div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                </div>
                <p className="testimonial-text">
                  Quis viverra nibh cras pulvinar mattis nunc sed blandit. Ultricies tristique nulla aliquet enim tortor at auctor urna. Nunc lobortis mattis aliquam faucibus purus in massa tempor.
                </p>
                <div className="client-info">
                  <img src="https://placehold.co/100x100?text=M" alt="Michael" className="client-img" />
                  <div className="client-name">Michael</div>
                  <div className="client-role">Designer</div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
     
    </div>
  );
};

export default Home;
