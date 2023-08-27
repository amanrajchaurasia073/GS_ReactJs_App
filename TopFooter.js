import React from 'react';
import './TopFooter.css';

const TopFooter = () => {
  return (
    <div className="top-footer">
      <div className="footer-section-free_delivery">
        <p>
          <i className="fas fa-truck"></i> Free Delivery
        </p>
      </div>
      
      <div className="footer-section-Return_policy">
        <p>Return Policy</p>
      </div>
      <div className="footer-section_login">
        <p>Login</p>
      </div>
      <div className="footer-section_fllow_us">
        <p>Follow US</p>
        <div className="social-media-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>  
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
