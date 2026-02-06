import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetails.css';
import { 
  FaStar, 
  FaHeart
} from 'react-icons/fa';

import panchakarmaTable from '../assets/panchakarma table.jpeg';
import electricSteamer from '../assets/Electric Steamer.png';
import shirodhara from '../assets/Shirodhara.png';
import steamCabinet from '../assets/Steam Cabinet.png';
import woodenPadabhyang from '../assets/Wooden Padabhyang.png';
import dhoopanYantra from '../assets/dhoopan yantra.png';
import Viddhagni from "../assets/VIDDHAGNI YANTRA.png";
import ShirodharaBrass from "../assets/Shirodhara Brass.png";
import heroBg from '../assets/hero.jpg';
import OwlCarousel from '../components/OwlCarousel';

const products = [
  {
    id: 1,
    title: "Panchakarma Table",
    desc: "Traditional Ayurvedic Panchakarma table designed for comfort and durability.",
    img: panchakarmaTable,
    features: [
      "Handcrafted from premium wood",
      "Ergonomic design for patient comfort",
      "Oil-resistant coating",
      "Easy to clean and maintain",
      "Standard dimensions for all treatments"
    ]
  },
  {
    id: 2,
    title: "Electric Steamer",
    desc: "High-efficiency electric steamer for authentic Ayurvedic steam therapy.",
    img: electricSteamer,
    features: [
      "Quick steam generation",
      "Digital temperature control",
      "Safety auto-cutoff",
      "Durable stainless steel body",
      "Portable design"
    ]
  },
  {
    id: 3,
    title: "Shirodhara Machine",
    desc: "Automated Shirodhara machine ensuring consistent oil flow and temperature.",
    img: shirodhara,
    features: [
      "Adjustable flow rate",
      "Temperature maintenance system",
      "Quiet operation",
      "Easy to clean nozzle",
      "Height adjustable stand"
    ]
  },
  {
    id: 4,
    title: "Galvanized Iron Cabinet",
    desc: "Sturdy steam cabinet made from galvanized iron for long-lasting performance.",
    img: steamCabinet,
    features: [
      "Rust-resistant material",
      "Comfortable seating",
      "Uniform steam distribution",
      "Easy entry and exit",
      "Thermal insulation"
    ]
  },
  {
    id: 5,
    title: "Wooden Padabhyang",
    desc: "Traditional wooden equipment for foot massage and therapy.",
    img: woodenPadabhyang,
    features: [
      "Premium quality wood",
      "Smooth finish",
      "Designed for foot reflexology",
      "Durable construction",
      "Traditional aesthetics"
    ]
  },
  {
    id: 6,
    title: "Dhoopan Yantra",
    desc: "Traditional Dhoopan Yantra for Ayurvedic fumigation therapy.",
    img: dhoopanYantra,
    features: [
      "High-quality material",
      "Efficient smoke dispersion",
      "Safe to handle",
      "Easy to clean",
      "Durable construction"
    ]
  },
  {
    id: 7,
    title: "Viddhagni Yantra",
    desc: "Specialized Viddhagni Yantra for precise Ayurvedic treatments.",
    img: Viddhagni,
    features: [
      "Precision engineered",
      "Surgical grade stainless steel",
      "Ergonomic grip",
      "Sterilizable",
      "Rust-resistant"
    ]
  },
  {
    id: 8,
    title: "Shirodhara Brass",
    desc: "Premium Brass Shirodhara pot for authentic oil flow treatments.",
    img: ShirodharaBrass,
    features: [
      "Pure brass construction",
      "Consistent oil flow",
      "Traditional design",
      "Easy to hang",
      "Corrosion resistant"
    ]
  }
];

// Memoized slider component to prevent re-renders when parent state changes
const RelatedProductsSlider = React.memo(({ products }) => {
  return (
    <OwlCarousel 
      className="owl-theme" 
      loop 
      margin={20} 
      nav 
      dots={false}
      autoplay
      responsive={{
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 4 }
      }}
    >
      {products.map((relProduct) => (
        <div key={relProduct.id} className="item">
          <Link to={`/products/${relProduct.id}`} style={{ textDecoration: 'none' }}>
            <div className="pd-related-card">
              <div className="pd-related-img-box">
                <img src={relProduct.img} alt={relProduct.title} />
              </div>
              <h5 className="pd-related-name">{relProduct.title}</h5>
            </div>
          </Link>
        </div>
      ))}
    </OwlCarousel>
  );
});

const ProductDetails = () => {
  const { id } = useParams();
  
  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [activeTab, setActiveTab] = useState('description');
  const [showModal, setShowModal] = useState(false);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products.filter(p => p.id !== product.id);
  }, [product]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Enquiry submitted successfully!");
    setShowModal(false);
  };

  if (!product) {
    return <div className="text-center py-5" style={{ marginTop: '100px' }}>Product not found</div>;
  }

  return (
    <div className="product-details-page">
      <div className="pd-header-section" style={{ backgroundImage: `url(${heroBg})` }}>
       
      </div>
<section className='bg-pd '>
 <div className="container  ">
        <div className="row g-5 py-5">
          <div className="col-lg-6">
            <div className="pd-image-container">
              <img src={product.img} alt={product.title} className="pd-main-img" />
            </div>
            <div className="pd-thumbnails-row">
              {[product.img, product.img, product.img].map((img, idx) => (
                <div key={idx} className="pd-thumb-box">
                  <img src={img} alt="thumb" />
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="pd-info-content">
              <h2 className="pd-product-title">{product.title}</h2>
              <div className="pd-label">About Product</div>
              
              <ul className="pd-desc-list">
                <li>Traditional craftsmanship meeting modern standards.</li>
                <li>Designed by experts for optimal therapeutic results.</li>
                <li>Durable materials ensuring long-term usage.</li>
                {product.features && product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              
              <div className="mb-3 text-warning">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>

              <div className="pd-action-buttons">
                <button className="pd-btn-quote" onClick={handleOpenModal}>Get a Quote</button>
              
              </div>
            </div>
          </div>
        </div>

      

        <div className="pd-tabs-section">
          <div className="pd-tabs-nav">
            <button
              className={`pd-tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
              type="button"
            >
              DESCRIPTION
            </button>
            <button
              className={`pd-tab-btn ${activeTab === 'additional' ? 'active' : ''}`}
              onClick={() => setActiveTab('additional')}
              type="button"
            >
              ADDITIONAL INFORMATION
            </button>
          
          </div>

          <div className="pd-tabs-content">
            {activeTab === 'description' && (
              <div>
                <h4 className="pd-section-title">More Detail</h4>
                <ul className="pd-desc-list">
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  <li>Lorem Ipsum has been the 's standard dummy text. Lorem Ipsummum is simply dummy text.</li>
                  <li>type here your detail one by one 1 more add</li>
                  <li>has been the industry's standard dummy text ever since. Lorem Ips</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.</li>
                </ul>

                <h4 className="pd-section-title">Key Specification</h4>
                <ul className="pd-desc-list">
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  <li>Lorem Ipsum has been the 's standard dummy text. Lorem Ipsummum is simply dummy text.</li>
                  <li>type here your detail one by one 1 more add</li>
                  <li>has been the industry's standard dummy text ever since. Lorem Ips</li>
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                </ul>
              </div>
            )}

            {activeTab === 'additional' && (
              <div>
                <h4 className="pd-section-title">Additional Information</h4>
                <table className="pd-spec-table">
                  <tbody>
                    <tr>
                      <th>Vendor:</th>
                      <td>Vegist</td>
                    </tr>
                    <tr>
                      <th>Size:</th>
                      <td>1kg, 2kg, 5kg</td>
                    </tr>
                    <tr>
                      <th>Material:</th>
                      <td>Canada, India, Germany</td>
                    </tr>
                    <tr>
                      <th>SKU:</th>
                      <td>123456</td>
                    </tr>
                    <tr>
                      <th>Weight:</th>
                      <td>0.011 kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h4 className="pd-section-title">Reviews</h4>
                <p className="pd-review-empty">No reviews yet.</p>
              </div>
            )}
          </div>
        </div>

        <div className="pd-related-section">
          <h3 className="pd-related-title">Related Products</h3>
          <p className="pd-related-subtitle">Explore more of our premium ayurvedic products.</p>
          
          <div className="mt-4">
            <RelatedProductsSlider products={relatedProducts} key={product.id} />
          </div>
        </div>
      </div>
</section>
     
      {showModal && (
        <div className="pd-modal-overlay">
          <div className="pd-modal-content">
            <div className="pd-modal-header">
              <h4 className="pd-modal-title">Get a Quote</h4>
              <button className="pd-modal-close" onClick={handleCloseModal}>&times;</button>
            </div>
            <div className="pd-modal-body">
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input type="tel" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email ID</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="3" required></textarea>
                </div>
                <div className='text-center'>
                <button type="submit" className="btn pd-btn-submit bg-success w-50 text-white">Submit</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
