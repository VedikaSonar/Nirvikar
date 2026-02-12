import React from 'react';
import './Software.css';
import { 
    FaUserMd, 
    FaCalendarCheck, 
    FaFileInvoiceDollar, 
    FaBoxOpen, 
    FaHistory, 
    FaClipboardCheck, 
    FaShieldAlt, 
    FaPills, 
    FaSms, 
    FaMobileAlt, 
    FaCheckCircle,
    FaFlask,
    FaChartLine
} from 'react-icons/fa';

const Software = () => {
    const features = [
        { icon: <FaUserMd />, text: "OPD Management" },
        { icon: <FaFlask />, text: "Panchakarma Management" },
        { icon: <FaCalendarCheck />, text: "Appointment Booking" },
        { icon: <FaFileInvoiceDollar />, text: "Account/Billing" },
        { icon: <FaChartLine />, text: "Expense Management" },
        { icon: <FaBoxOpen />, text: "Inventory" },
        { icon: <FaHistory />, text: "Health Record / History / Patient Files" },
        { icon: <FaClipboardCheck />, text: "Customizable Consent and Forms" },
        { icon: <FaCheckCircle />, text: "NABH / Quality Indicators" },
        { icon: <FaShieldAlt />, text: "Cashless / Insurance Billing" },
        { icon: <FaPills />, text: "Pharmacy Management" },
        { icon: <FaSms />, text: "SMS Integration" },
        { icon: <FaMobileAlt />, text: "Multidevice Support (Mobile, Tablet, Laptop, Computer)" }
    ];

    return (
        <div className="software-page">
            {/* Hero Section */}
            <div className="software-hero">
                <div className="container">
                    <h1>The Future of Ayurveda Practice Management</h1>
                    <p>Nirvikar Ayurved Hospital & Cloud Health Present: Specialized Software for Ayurveda Doctors to streamline practice and improve patient care.</p>
                </div>
            </div>

            {/* Demo Section */}
            <div className="demo-section">
                <div className="container">
                    <h2 className="text-center mb-5" style={{ color: '#153e2e', fontWeight: '700' }}>Software Demos</h2>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-5">
                            <div className="demo-card">
                                <div className="video-container">
                                    <iframe 
                                        src="https://www.youtube.com/embed/JitlsEkAuqs" 
                                        title="OPD Demo" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="demo-body">
                                    <h3>OPD Management Demo</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="demo-card">
                                <div className="video-container">
                                    <iframe 
                                        src="https://www.youtube.com/embed/8DGD319Bu-s" 
                                        title="IPD Demo" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="demo-body">
                                    <h3>IPD Management Demo</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <div className="container">
                    <h2 className="text-center mb-5" style={{ color: '#153e2e', fontWeight: '700' }}>Comprehensive Software Features</h2>
                    <div className="row g-3">
                        {features.map((feature, index) => (
                            <div key={index} className="col-md-6 col-lg-4">
                                <div className="feature-item">
                                    <div className="feature-icon">{feature.icon}</div>
                                    <div className="feature-text">{feature.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="pricing-section">
                <div className="container">
                    <div className="pricing-card">
                        <h2>Charges & Plans</h2>
                        <div className="pricing-details">
                            <p className="pricing-item fw-bold">Clinic OPD / Hospital / IPD Management Software</p>
                            <p className="pricing-item">Charges Depend On Requirement</p>
                            <hr />
                            <p className="pricing-item"><FaSms style={{color: '#4e6d31'}} /> SMS Pack Charges Extra</p>
                            <p className="pricing-item"><FaCheckCircle style={{color: '#4e6d31'}} /> 2GB Online Storage FREE</p>
                        </div>
                        <div className="contact-info mt-4">
                            <p className="mb-2 fw-bold">CALL FOR MORE DETAILS</p>
                            <p className="mb-1" style={{fontSize: '1.2rem', color: '#153e2e', fontWeight: '700'}}>8380002004 / 8380002005</p>
                            <p className="mb-3" style={{fontSize: '1.1rem', color: '#153e2e'}}>Nirvikar Ayurved Hospital: 9881572395</p>
                            <a href="tel:8380002004" className="contact-button">Inquire Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Software;
