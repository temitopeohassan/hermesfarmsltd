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

        {/* About Section */}
        <section className="about-section">
          <div className="container" style={{ padding: "80px 0" }}>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  src="/images/about-us-image-2.jpg"
                  alt="Hermes Farms"
                  className="img-fluid"
                />
              </div>

              <div className="col-lg-6">
                <div className="section-title">
                  <h2>About Hermes Farms Ltd</h2>
                </div>

                <p>
                  Hermes Farms Ltd is committed to sustainable agriculture and
                  high-quality farm production. Our mission is to provide
                  healthy agricultural products while promoting environmentally
                  responsible farming practices.
                </p>

                <p>
                  With a focus on innovation and sustainability, we cultivate
                  crops and manage agricultural operations that contribute to
                  food security and community development.
                </p>

                <ul className="about-list">
                  <li>Organic & sustainable farming</li>
                  <li>Modern agricultural techniques</li>
                  <li>Community-focused agriculture</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats / Achievements */}
        <section className="counter-section bg-light">
          <div className="container" style={{ padding: "60px 0" }}>
            <div className="row text-center">

              <div className="col-md-3">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>

              <div className="col-md-3">
                <h3>500+</h3>
                <p>Acres Cultivated</p>
              </div>

              <div className="col-md-3">
                <h3>200+</h3>
                <p>Happy Clients</p>
              </div>

              <div className="col-md-3">
                <h3>50+</h3>
                <p>Farm Workers</p>
              </div>

            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us">
          <div className="container" style={{ padding: "80px 0" }}>
            <div className="section-title text-center">
              <h2>Why Choose Hermes Farms</h2>
            </div>

            <div className="row text-center">

              <div className="col-md-4">
                <h4>Quality Produce</h4>
                <p>
                  We focus on producing fresh, high-quality agricultural
                  products using modern farming practices.
                </p>
              </div>

              <div className="col-md-4">
                <h4>Sustainable Practices</h4>
                <p>
                  Our farming methods prioritize sustainability and
                  environmental responsibility.
                </p>
              </div>

              <div className="col-md-4">
                <h4>Trusted Farming</h4>
                <p>
                  We are committed to building long-term relationships with
                  customers and partners.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}