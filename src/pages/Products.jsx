import React from 'react';
import { Link } from 'react-router-dom';
import panchakarmaTable from '../assets/panchakarma table.jpeg';
import electricSteamer from '../assets/Electric Steamer.png';
import shirodhara from '../assets/Shirodhara.png';
import steamCabinet from '../assets/Steam Cabinet.png';
import woodenPadabhyang from '../assets/Wooden Padabhyang.png';
import dhoopanYantra from '../assets/dhoopan yantra.png'; // Using as placeholder for 6th item if needed
import heroBg from '../assets/hero.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Panchakarma Table",
      desc: "See the finest craftsmanship designed for traditional Ayurvedic care.",
      price: "Rs. 64,000",
      img: panchakarmaTable
    },
    {
      id: 2,
      title: "Electric Steamer",
      desc: "See the finest craftsmanship designed for traditional Ayurvedic care.",
      price: "Rs. 84,000",
      img: electricSteamer
    },
    {
      id: 3,
      title: "Shirodhara Machine",
      desc: "See the finest craftsmanship designed for traditional Ayurvedic care.",
      price: "Rs. 94,000",
      img: shirodhara
    },
    {
      id: 4,
      title: "Galvanized Iron Cabinet",
      desc: "See the finest craftsmanship designed for traditional Ayurvedic care.",
      price: "Rs. 84,000",
      img: steamCabinet
    },
    {
      id: 5,
      title: "Wooden Padabhyang",
      desc: "See the finest craftsmanship designed for traditional Ayurvedic care.",
      price: "Rs. 84,000",
      img: woodenPadabhyang
    },
    {
      id: 6,
      title: "Heated Mattress (Mat)",
      desc: "See the finest craftsmanship designed for traditional Ayurvedic care.",
      price: "Rs. 64,000",
      img: dhoopanYantra // Placeholder
    }
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-overlay"></div>
       
      </section>

      <div className="container py-5">
        {/* Product Grid */}
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6">
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img src={product.img} alt={product.title} />
                </div>
                <div className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-desc">{product.desc}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <Link to={`/products/${product.id}`} className="book-now-btn">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
