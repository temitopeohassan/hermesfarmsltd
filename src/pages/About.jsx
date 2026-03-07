import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <PageBanner title="About Us" />

      <main className="main-content">
        <section className="our-approach">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="media-placeholder media-placeholder--about-page">
                  <div className="media-placeholder__badge">Built for healthy soil and healthy communities</div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="section-title">
                  <h3>Who We Are</h3>
                  <h2>Purpose-driven agriculture for people and planet</h2>
                  <p>
                    Hermes Farms Ltd produces fresh farm goods through
                    sustainable practices that preserve the land and strengthen
                    local supply chains.
                  </p>
                </div>

                <div className="soilux-list">
                  <div><i className="fa-solid fa-check" /> Organic and responsible production</div>
                  <div><i className="fa-solid fa-check" /> Modern crop and farm management</div>
                  <div><i className="fa-solid fa-check" /> Reliable farm-to-market partnerships</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="soilux-metric-card">
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="soilux-metric-card">
                  <h3>500+</h3>
                  <p>Acres Cultivated</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="soilux-metric-card">
                  <h3>200+</h3>
                  <p>Happy Buyers</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="soilux-metric-card">
                  <h3>50+</h3>
                  <p>Farm Workers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose-us section-soft-bg">
          <div className="container">
            <div className="section-title text-center">
              <h2>Why Choose Hermes Farms</h2>
            </div>

            <div className="row text-center">
              <div className="col-lg-4">
                <div className="soilux-feature-card">
                  <i className="fa-solid fa-seedling" />
                  <h4>Quality Produce</h4>
                  <p>Fresh, high-quality products cultivated with strict standards.</p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="soilux-feature-card">
                  <i className="fa-solid fa-leaf" />
                  <h4>Sustainable Practices</h4>
                  <p>Methods designed to protect soil health and reduce waste.</p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="soilux-feature-card">
                  <i className="fa-solid fa-handshake" />
                  <h4>Trusted Farming</h4>
                  <p>Dependable delivery and long-term relationships with partners.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}