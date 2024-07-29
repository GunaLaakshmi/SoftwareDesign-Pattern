import React from "react";
import './Footer.css'; // Ensure you create and import this CSS file

const Footer = () => {
  return (
    <footer className="footer mb-0 text-center">
      <div className="container">
        <div className="footer-top pb-5">
          <h5>TAKE 15% OFF YOUR FIRST ORDER!</h5>
          <div className="email-signup">
            <input type="email" placeholder="Your email address" />
            <button></button>
          </div>
          <p>
            BY ENTERING YOUR EMAIL ADDRESS YOU AGREE TO RECEIVE MARKETING EMAILS FROM US. UNSUBSCRIBE AT ANY TIME.
          </p>
        </div>
        <div className="footer-links row pb-5">
          <div className="footer-column col-md-3">
            <h6>ACCOUNT</h6>
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Check Order</a></li>
            </ul>
          </div>
          <div className="footer-column col-md-3">
            <h6>ABOUT US</h6>
            <ul>
              <li><a href="#">About Our Company</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-column col-md-3">
            <h6>CUSTOMER SERVICE</h6>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Popular FAQs</a></li>
              <li><a href="#">Find My Order</a></li>
            </ul>
          </div>
          <div className="footer-column col-md-3">
            <h6>LEGAL</h6>
            <ul>
              <li><a href="#">Terms and Conditions of Sale</a></li>
              <li><a href="#">Privacy Notice</a></li>
              <li><a href="#">Do Not Sell My Personal Information</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom d-flex flex-column align-items-center justify-content-center pb-5">
          <p>© 2024 Fashion Rental Clothing. All Rights Reserved.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-snapchat"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
