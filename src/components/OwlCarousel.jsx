import React, { useEffect, useRef } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
import 'owl.carousel';

const OwlCarousel = ({ children, className, ...options }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const $el = $(carouselRef.current);
    // Initialize Owl Carousel
    $el.owlCarousel(options);

    return () => {
      // Cleanup
      $el.trigger('destroy.owl.carousel');
    };
  }, []); // Run once on mount

  return (
    <div ref={carouselRef} className={`owl-carousel ${className || ''}`}>
      {children}
    </div>
  );
};

export default OwlCarousel;