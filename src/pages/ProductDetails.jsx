import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetails.css';
import { 
  FaStar, 
  FaHeart
} from 'react-icons/fa';
import { getProductById, getProducts, getImageUrl, createInquiry } from '../services/api';
import panchakarmaTable from '../assets/panchakarma table.jpeg';
import heroBg from '../assets/hero.jpg';
import OwlCarousel from '../components/OwlCarousel';

// Memoized slider component
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
                <img 
                  src={getImageUrl(relProduct.main_image) || panchakarmaTable} 
                  alt={relProduct.product_name}
                  onError={(e) => { e.target.onerror = null; e.target.src = panchakarmaTable; }} 
                />
              </div>
              <h5 className="pd-related-name">{relProduct.product_name}</h5>
            </div>
          </Link>
        </div>
      ))}
    </OwlCarousel>
  );
});

const ProductDetails = () => {
  const { id } = useParams();
  
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');
  const [activeImage, setActiveImage] = useState(null);
  
  // Inquiry Modal State
  const [showModal, setShowModal] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    fetchProductData();
    window.scrollTo(0, 0);
  }, [id]);

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const productData = await getProductById(id);
      setProduct(productData);
      
      // Set initial active image
      if (productData) {
        const initialImage = getImageUrl(productData.main_image) || panchakarmaTable;
        setActiveImage(initialImage);
      }
      
      // Fetch related products
      const allProductsData = await getProducts();
      if (allProductsData && allProductsData.products) {
        setRelatedProducts(allProductsData.products.filter(p => p.id !== parseInt(id)));
      }
    } catch (error) {
      console.error("Error loading product details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSubmitStatus(null);
    setStatusMessage('');
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
        product_id: product?.id
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

  if (loading) {
    return <div className="text-center py-5" style={{ marginTop: '100px' }}>Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-5" style={{ marginTop: '100px' }}>Product not found</div>;
  }

  // Images logic
  const mainImage = getImageUrl(product.main_image) || panchakarmaTable;
  const additionalImages = product.images ? product.images.map(img => getImageUrl(img.image_path)) : [];
  const allImages = [mainImage, ...additionalImages];

  // Safe parsing for specifications_json
  let parsedSpecifications = {};
  if (product.specifications_json) {
      if (typeof product.specifications_json === 'string') {
          try {
              parsedSpecifications = JSON.parse(product.specifications_json);
          } catch (e) {
              console.error("Failed to parse specifications_json", e);
          }
      } else if (typeof product.specifications_json === 'object') {
          parsedSpecifications = product.specifications_json;
      }
  }

  return (
    <div className="product-details-page">
      <div className="pd-header-section" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <section className='bg-pd'>
        <div className="container">
          <div className="row g-5 py-5">
            <div className="col-lg-6">
              <div className="pd-image-container">
                <img 
                  src={activeImage || mainImage} 
                  alt={product.product_name} 
                  className="pd-main-img" 
                  onError={(e) => { e.target.onerror = null; e.target.src = panchakarmaTable; }}
                />
              </div>
               {allImages.length > 0 && (
                <div className="pd-thumbnails-row">
                    {allImages.slice(0, 4).map((img, idx) => (
                        <div 
                          key={idx} 
                          className={`pd-thumb-box ${activeImage === img ? 'active' : ''}`}
                          onClick={() => setActiveImage(img)}
                          style={{ cursor: 'pointer', border: activeImage === img ? '2px solid #28a745' : '1px solid #ddd' }}
                        >
                            <img 
                              src={img} 
                              alt="thumb" 
                              onError={(e) => { e.target.onerror = null; e.target.src = panchakarmaTable; }}
                            />
                        </div>
                    ))}
                </div>
               )}
            </div>

            <div className="col-lg-6">
              <div className="pd-info-content">
                <h2 className="pd-product-title">{product.product_name}</h2>
                <div className="d-flex align-items-center mb-3">
                    {product.mrp_price && (
                        <span className="text-decoration-line-through text-muted me-3 fs-5">
                            ₹{product.mrp_price}
                        </span>
                    )}
                    {product.selling_price && (
                        <span className="fw-bold text-success fs-4">
                            ₹{product.selling_price}
                        </span>
                    )}
                </div>

                <div className="pd-label">About Product</div>
                
                <div className="pd-desc-list">
                    {product.about_product ? (
                        <p>{product.about_product}</p>
                    ) : (
                        <p>{product.short_description || product.full_description || "No description available."}</p>
                    )}
                </div>

                {/* Main Key Features Summary */}
                <ul className="pd-desc-list mt-3">
                  {product.brand && <li><strong>Brand:</strong> {product.brand}</li>}
                  {product.material_type && <li><strong>Material Type:</strong> {product.material_type}</li>}
                  {product.country_of_origin && <li><strong>Country:</strong> {product.country_of_origin}</li>}
                  {product.uses && <li><strong>Uses:</strong> {product.uses}</li>}
                </ul>
                
                <div className="mb-3 text-warning">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <div className="pd-action-buttons">
                  <button className="pd-btn-quote" onClick={() => setShowModal(true)}>Get a Quote</button>
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
                  <div className="pd-desc-content">
                    {product.full_description ? (
                        <div dangerouslySetInnerHTML={{ __html: product.full_description }} />
                    ) : (
                        <p>{product.about_product || product.short_description || "No additional details available."}</p>
                    )}
                    
                    {product.uses && (
                        <div className="mt-3">
                            <strong>Uses:</strong>
                            <p>{product.uses}</p>
                        </div>
                    )}
                  </div>

                  <h4 className="pd-section-title mt-4">Key Specification</h4>
                  <ul className="pd-desc-list">
                    {product.width && <li><strong>Width:</strong> {product.width}</li>}
                    {product.length && <li><strong>Length:</strong> {product.length}</li>}
                    {product.height && <li><strong>Height:</strong> {product.height}</li>}
                    {product.weight && <li><strong>Weight:</strong> {product.weight}</li>}
                    {product.thali && <li><strong>Thali:</strong> {product.thali}</li>}
                    {parsedSpecifications && Object.entries(parsedSpecifications).map(([key, value]) => (
                        <li key={key}><strong>{key}:</strong> {value}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'additional' && (
                <div>
                  <h4 className="pd-section-title">Additional Information</h4>
                  <table className="pd-spec-table">
                    <tbody>
                      {product.brand && (
                          <tr>
                            <th>Brand:</th>
                            <td>{product.brand}</td>
                          </tr>
                      )}
                      {product.material_type && (
                          <tr>
                            <th>Material Type:</th>
                            <td>{product.material_type}</td>
                          </tr>
                      )}
                       {product.all_materials && (
                          <tr>
                            <th>All Materials:</th>
                            <td>{product.all_materials}</td>
                          </tr>
                      )}
                      {product.country_of_origin && (
                          <tr>
                            <th>Country of Origin:</th>
                            <td>{product.country_of_origin}</td>
                          </tr>
                      )}
                      {(product.width || product.length || product.height) && (
                          <tr>
                            <th>Dimensions (L x W x H):</th>
                            <td>
                                {[product.length, product.width, product.height].filter(Boolean).join(' x ')}
                            </td>
                          </tr>
                      )}
                       {product.weight && (
                          <tr>
                            <th>Weight:</th>
                            <td>{product.weight}</td>
                          </tr>
                      )}
                       {product.thali && (
                          <tr>
                            <th>Thali:</th>
                            <td>{product.thali}</td>
                          </tr>
                      )}
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
      {/* Inquiry Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Inquire about {product?.product_name}</h5>
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

export default ProductDetails;
