import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="main-footer bg-section dark-section">
      <div className="container">
        <div className="footer-contact-info-box">
          <div className="footer-logo">
            <Link to="/" className="site-brand">
              <img src="/images/footer_logo.png" alt="Hermes Farms Ltd" /></Link>
          </div>
          <div className="footer-contact-info">
            <div className="footer-contact-info-content">
              <p>
              At Hermes Farms Ltd, we are committed to delivering fresh,
                    organic, and high-quality farm produce straight from our
                    farms to your table. We believe healthy living starts with
                    clean, naturally raised food, and that is exactly what we
                    provide.
              </p>
            </div>
            <div className="footer-social-links">
              <ul>
                <li>
                  <a href="https://instagram.com/hermesfarmsltd" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="footer-links-box">
              <div className="footer-links">
                <h3>Site Menu</h3>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/board">Our People</Link></li>
                  <li><Link to="/produce">Produce</Link></li>
                </ul>
              </div>
              <div className="footer-links">
                <h3>More</h3>
                <ul>
                  <li><Link to="/where-to-buy">Where To Buy</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
              <div className="footer-contact-list">
                <h3>Contact Information</h3>
                <ul>
                  <li>
                    <i className="fa-solid fa-location-dot" />
                    <span>Olutunji Close, Araromi, Itoki Rd, 100271, Ogun State</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone" />
                    <span>+234 703 461 4623</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope" />
                    <span>info@hermesfarmsltd.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright-text">
          <div className="row">
            <div className="col-12 text-center">
              <p>© {new Date().getFullYear()} Hermes Farms Ltd. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
