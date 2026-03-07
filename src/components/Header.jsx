import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MOBILE_BREAKPOINT = 992;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="main-header">
      {/* Mobile drawer overlay – click to close */}
      {menuOpen && (
        <div
          className="nav-drawer-overlay"
          onClick={closeMenu}
          onKeyDown={(e) => e.key === "Enter" && closeMenu()}
          aria-hidden="true"
        />
      )}

      <div className={`header-sticky ${isScrolled ? "active" : ""}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <span className="site-brand">
                <img src="/hermes.svg" alt="Hermes Farms Ltd" className="site-brand__icon" />
                <span className="site-brand__name">Hermes Farms</span>
              </span>
            </Link>

            <div className="navbar-toggle">
              <button
                type="button"
                className={`slicknav_btn ${menuOpen ? "slicknav_open" : ""}`}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="main-nav-menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="slicknav_icon">
                  <span className="slicknav_icon-bar" />
                  <span className="slicknav_icon-bar" />
                  <span className="slicknav_icon-bar" />
                </span>
              </button>
            </div>

            <div
              id="main-nav-menu"
              className={`main-menu responsive-menu ${menuOpen ? "menu-open" : ""}`}
              role="navigation"
              aria-label="Main navigation"
            >
              <button
                type="button"
                className="nav-drawer-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <span aria-hidden="true">&times;</span>
              </button>

              <div className="nav-menu-wrapper">
                <ul onClick={closeMenu}>
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
                    <Link to="/where-to-buy">Where To Buy</Link>
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

              <div className="header-btn" onClick={closeMenu}>
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
