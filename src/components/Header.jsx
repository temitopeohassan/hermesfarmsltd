import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll(); // run once on mount in case page is already scrolled
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="main-header">
      <div className={`header-sticky ${isScrolled ? "active" : ""}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="/images/logo.png" alt="Hermes Farms Ltd" />
            </Link>

            {/* Mobile menu toggle - same style as Soilux template */}
            <div className="navbar-toggle">
              <button
                type="button"
                className={`slicknav_btn ${menuOpen ? "slicknav_open" : ""}`}
                aria-label="Toggle menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="slicknav_icon">
                  <span className="slicknav_icon-bar" />
                  <span className="slicknav_icon-bar" />
                  <span className="slicknav_icon-bar" />
                </span>
              </button>
            </div>

            {/* Desktop: nav-menu-wrapper centers links. Mobile: toggled by menuOpen */}
            <div
              className={`main-menu responsive-menu ${menuOpen ? "menu-open" : ""}`}
            >
              <div className="nav-menu-wrapper">
              <ul onClick={() => setMenuOpen(false)}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/board">Our People</Link>
                  </li>
                  <li>
                    <Link to="/produce">Produce</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>                  
                </ul>
              </div>

              <div className="header-btn" onClick={() => setMenuOpen(false)}>
                <Link to="/contact" className="btn-default btn-highlighted">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
