import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getProducts, getImageUrl, createInquiry } from '../services/api';
import panchakarmaTable from '../assets/panchakarma table.jpeg';
import electricSteamer from '../assets/Electric Steamer.png';
import shirodhara from '../assets/Shirodhara.png';
import steamCabinet from '../assets/Steam Cabinet.png';
import woodenPadabhyang from '../assets/Wooden Padabhyang.png';
import dhoopanYantra from '../assets/dhoopan yantra.png'; 
import heroBg from '../assets/hero.jpg';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Get search query from URL
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';

  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null); // 'sending', 'success', 'error'
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [searchQuery]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getProducts(searchQuery);
      // API returns { products: [], total: ... }
      setProducts(data.products || []);
    } catch (error) {
      console.error("Failed to load products", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookNow = (e, product) => {
    e.preventDefault();
    setSelectedProduct(product);
    setShowModal(true);
    setSubmitStatus(null);
    setStatusMessage('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInquiryForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    
    try {
      const payload = {
        ...inquiryForm,
        product_id: selectedProduct?.id
      };
      
      const result = await createInquiry(payload);
      
      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage('Inquiry submitted successfully! We will contact you soon.');
        setInquiryForm({ name: '', email: '', phone: '', address: '', message: '' });
        setTimeout(() => {
          handleCloseModal();
        }, 3000);
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'Failed to submit inquiry. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-overlay"></div>
       
      </section>

      <div className="container py-5">
        {/* Product Grid */}
        {loading ? (
           <div className="text-center py-5">
             <div className="spinner-border text-success" role="status">
               <span className="visually-hidden">Loading...</span>
             </div>
           </div>
        ) : (
        <div className="row g-4">
          {products.length > 0 ? (
            products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6">
              <div 
                className="product-card" 
                onClick={() => navigate(`/products/${product.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="product-img-wrapper">
                  <img 
                    src={getImageUrl(product.main_image) || panchakarmaTable} 
                    alt={product.product_name}
                    onError={(e) => { e.target.onerror = null; e.target.src = panchakarmaTable; }} 
                  />
                </div>
                <div className="product-content">
                  <h3 className="product-title">{product.product_name}</h3>
                  <p className="product-desc">{product.short_description || product.desc || 'No description available'}</p>
                  <div className="product-footer">
                    <span className="product-price">Rs. {product.selling_price || product.mrp_price || 'N/A'}</span>
                    <button className="book-now-btn">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
          ) : (
            <div className="col-12 text-center">
              <h3>No products found.</h3>
            </div>
          )}
        </div>
        )}
      </div>

      {/* Inquiry Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Inquire about {selectedProduct?.product_name}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                {submitStatus === 'success' ? (
                  <div className="alert alert-success">{statusMessage}</div>
                ) : (
                  <form onSubmit={handleSubmitInquiry}>
                    {submitStatus === 'error' && <div className="alert alert-danger">{statusMessage}</div>}
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        required 
                        value={inquiryForm.name} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        required 
                        value={inquiryForm.email} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        name="phone" 
                        required 
                        value={inquiryForm.phone} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="address" 
                        value={inquiryForm.address} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea 
                        className="form-control" 
                        name="message" 
                        rows="3" 
                        value={inquiryForm.message} 
                        onChange={handleInputChange} 
                      ></textarea>
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-success" disabled={submitStatus === 'sending'}>
                        {submitStatus === 'sending' ? 'Sending...' : 'Submit Inquiry'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
