import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaCheckCircle, FaLeaf, FaUserMd, FaMortarPestle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import panchakarmaTable from '../assets/panchakarma table.jpeg';
import electricSteamer from '../assets/Electric Steamer.png';
import shirodhara from '../assets/Shirodhara.png';
import steamCabinet from '../assets/Steam Cabinet.png';
import woodenPadabhyang from '../assets/Wooden Padabhyang.png';
import dhoopanYantra from '../assets/dhoopan yantra.png';

const ProductDetails = () => {
  const { id } = useParams();
  
  // Mock data - should match Products.jsx
  const products = [
    {
      id: 1,
      title: "Panchakarma Table",
      desc: "See the finest craftsmanship designed for traditional Ayurvedic care.",
      price: "Rs. 64,000",
      originalPrice: "Rs. 70,000",
      img: panchakarmaTable,
      rating: 4.8,
      reviews: 124,
      features: [
        "Authentic Wooden Construction",
        "Durable & Long-lasting",
        "Designed for Comfort"
      ]
    },
    {
      id: 2,
      title: "Electric Steamer",
      desc: "High-efficiency electric steamer for authentic Ayurvedic treatments.",
      price: "Rs. 84,000",
      originalPrice: "Rs. 90,000",
      img: electricSteamer,
      rating: 4.9,
      reviews: 89,
      features: [
        "Automatic Temperature Control",
        "Safety Cut-off Feature",
        "Easy to Clean"
      ]
    },
    {
      id: 3,
      title: "Shirodhara Machine",
      desc: "Automated Shirodhara machine for precise and consistent oil flow.",
      price: "Rs. 94,000",
      originalPrice: "Rs. 105,000",
      img: shirodhara,
      rating: 4.7,
      reviews: 56,
      features: [
        "Adjustable Height & Flow",
        "Silent Operation",
        "Premium Steel Build"
      ]
    },
    {
      id: 4,
      title: "Galvanized Iron Cabinet",
      desc: "Robust steam cabinet designed for effective perspiration therapy.",
      price: "Rs. 84,000",
      originalPrice: "Rs. 92,000",
      img: steamCabinet,
      rating: 4.6,
      reviews: 42,
      features: [
        "Corrosion Resistant",
        "Comfortable Seating",
        "Uniform Steam Distribution"
      ]
    },
    {
      id: 5,
      title: "Wooden Padabhyang",
      desc: "Traditional wooden equipment for foot massage and therapy.",
      price: "Rs. 84,000",
      originalPrice: "Rs. 88,000",
      img: woodenPadabhyang,
      rating: 4.8,
      reviews: 35,
      features: [
        "Ergonomic Design",
        "High-Quality Wood",
        "Smooth Finish"
      ]
    },
    {
      id: 6,
      title: "Heated Mattress (Mat)",
      desc: "Therapeutic heated mattress for enhanced relaxation and treatment efficacy.",
      price: "Rs. 64,000",
      originalPrice: "Rs. 75,000",
      img: dhoopanYantra,
      rating: 4.5,
      reviews: 28,
      features: [
        "Adjustable Heat Settings",
        "Waterproof Cover",
        "Safe & Reliable"
      ]
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div className="text-center py-5">Product not found</div>;
  }

  return (
    <div className="product-details-page">
      {/* Header Section */}
      <section className="pd-header-section text-center">
        <h1 className="pd-title">Our Premium Ayurvedic Products</h1>
        <p className="pd-subtitle">Explore our authentic and carefully crafted ayurvedic products designed for ultimate wellness and traditional care.</p>
      </section>

      <div className="container">
        {/* Main Product Section */}
        <div className="row align-items-center mb-5">
          {/* Left Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="pd-image-wrapper">
              <img src={product.img} alt={product.title} className="pd-main-image" />
            </div>
          </div>

          {/* Right Details */}
          <div className="col-lg-6">
            <div className="pd-content">
              <h2 className="pd-product-title">{product.title}</h2>
              
              <div className="pd-rating-wrapper">
                <div className="pd-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? "text-warning" : "text-muted"} />
                  ))}
                </div>
                <span className="pd-review-text">Customer Review</span>
              </div>

              <div className="pd-price-wrapper">
                <span className="pd-current-price">{product.price}</span>
                <span className="pd-original-price">{product.originalPrice}</span>
              </div>

              <span className="pd-badge">Best Seller</span>

              <h5 className="pd-short-desc-title">About This Product</h5>
              <p className="pd-description">
                {product.desc} Simple ways to reduce inflammation include following an anti-inflammatory diet, managing stress, and getting enough sleep.
              </p>

              <div className="pd-features-list">
                {product.features.map((feature, index) => (
                  <div key={index} className="pd-feature-item">
                    <FaCheckCircle className="pd-check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="pd-cta-btn">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ / Accordion Section */}
        <div className="pd-accordion-section mb-5">
            <div className="accordion" id="productAccordion">
                <div className="accordion-item pd-accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button pd-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            Is this Non-GMO product?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#productAccordion">
                        <div className="accordion-body">
                            Yes, all our products are made from naturally sourced materials and are free from genetically modified organisms.
                        </div>
                    </div>
                </div>
                <div className="accordion-item pd-accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button pd-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                            Where to store the product?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#productAccordion">
                        <div className="accordion-body">
                            Store in a cool, dry place away from direct sunlight to maintain the integrity of the materials.
                        </div>
                    </div>
                </div>
                 <div className="accordion-item pd-accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button pd-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                            Is this Vegan Product?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#productAccordion">
                        <div className="accordion-body">
                            Most of our equipment is vegan-friendly. Please check specific product specifications for details on leather or other animal-derived components if applicable.
                        </div>
                    </div>
                </div>
                 <div className="accordion-item pd-accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button pd-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                            What is the warranty period?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#productAccordion">
                        <div className="accordion-body">
                            We offer a standard 1-year warranty on manufacturing defects for all our equipment.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Features Section */}
        <div className="pd-bottom-features mb-5">
            <div className="text-center mb-4">
                 <h3 className="section-title">Frequently Asked Questions</h3>
            </div>
             <div className="row g-4">
                 <div className="col-md-4">
                     <div className="pd-feature-card text-center">
                         <div className="pd-icon-circle">
                             <FaUserMd />
                         </div>
                         <h5>Trusted Vedic Ayurvedic Experts</h5>
                         <p className="small text-muted">Guided by experienced practitioners.</p>
                     </div>
                 </div>
                  <div className="col-md-4">
                     <div className="pd-feature-card text-center">
                         <div className="pd-icon-circle">
                             <FaLeaf />
                         </div>
                         <h5>Preservative Free Products</h5>
                         <p className="small text-muted">100% natural and authentic materials.</p>
                     </div>
                 </div>
                  <div className="col-md-4">
                     <div className="pd-feature-card text-center">
                         <div className="pd-icon-circle">
                             <FaMortarPestle />
                         </div>
                         <h5>Prepared Processes & Quality</h5>
                         <p className="small text-muted">Rigorous quality checks and standards.</p>
                     </div>
                 </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
