import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Header />
      <PageBanner title="Services" />

      <main className="main-content">
        <section className="page-service-single">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="page-single-image">
                  <div className="media-placeholder media-placeholder--service" />
                </div>

                <div className="service-entry">
                  <h2>Agriculture & Farm Management</h2>
                  <p>
                    Hermes Farms delivers practical agricultural services for
                    producers, retailers, and agribusiness partners looking to
                    improve output, quality, and supply consistency.
                  </p>
                  <p>
                    We combine field experience with modern planning to support
                    sustainable and commercially viable farm operations.
                  </p>
                  <h3>What We Offer</h3>
                  <ul>
                    <li>Crop cultivation and farm management</li>
                    <li>Soil health and nutrient planning</li>
                    <li>Irrigation planning and deployment support</li>
                    <li>Post-harvest handling and quality control</li>
                    <li>Agricultural consulting for growth-stage farms</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4">
                <aside className="page-single-sidebar">
                  <div className="page-category-list">
                    <h3>Our Services</h3>
                    <ul>
                      <li><a href="#0" onClick={(event) => event.preventDefault()}>Crop Production</a></li>
                      <li><a href="#0" onClick={(event) => event.preventDefault()}>Farm Management</a></li>
                      <li><a href="#0" onClick={(event) => event.preventDefault()}>Organic Farming</a></li>
                      <li><a href="#0" onClick={(event) => event.preventDefault()}>Agricultural Consulting</a></li>
                      <li><a href="#0" onClick={(event) => event.preventDefault()}>Irrigation Solutions</a></li>
                    </ul>
                  </div>

                  <div className="sidebar-cta-box">
                    <div className="sidebar-cta-body">
                      <div className="sidebar-cta-content">
                        <h3>Need help planning your farm operations?</h3>
                        <p>
                          Contact Hermes Farms to discuss partnership, supply,
                          and technical support options.
                        </p>
                      </div>
                      <Link to="/contact" className="btn-default">Contact Us</Link>
                    </div>
                  </div>

                  <div className="soilux-contact-card">
                    <h4>Quick Contact</h4>
                    <p>
                      +234 703 461 4623
                    </p>
                    <p>info@hermesfarmsltd.com</p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}