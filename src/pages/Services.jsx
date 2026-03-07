import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Header />
      <PageBanner title="Services" />

      <main className="main-content">
        <section className="service-single">
          <div className="container" style={{ padding: "80px 0 100px" }}>
            <div className="row">

              {/* Main Content */}
              <div className="col-lg-8">
                <div className="service-image mb-4">
                  <img
                    src="/images/services/service-1.jpg"
                    alt="Agriculture Services"
                    className="img-fluid"
                  />
                </div>

                <h2>Agriculture & Farm Management</h2>

                <p>
                  Hermes Farms Ltd provides modern agricultural services focused
                  on sustainable farming, crop management, and efficient food
                  production. We combine traditional farming knowledge with
                  modern technology to maximize yield and maintain soil health.
                </p>

                <p>
                  Our team works with farmers, organizations, and agricultural
                  partners to implement effective farming systems that improve
                  productivity while protecting the environment.
                </p>

                <h4 className="mt-4">What We Offer</h4>

                <ul className="service-list">
                  <li>Crop cultivation and farm management</li>
                  <li>Soil health and nutrient management</li>
                  <li>Modern irrigation systems</li>
                  <li>Sustainable farming practices</li>
                  <li>Agricultural consulting</li>
                </ul>

                <h4 className="mt-4">Our Approach</h4>

                <p>
                  At Hermes Farms, we focus on efficient agricultural systems
                  that increase productivity while maintaining sustainability.
                  Our approach includes research-backed farming methods,
                  innovative tools, and a strong commitment to quality produce.
                </p>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <aside className="service-sidebar">

                  <div className="service-widget mb-4">
                    <h4>Our Services</h4>
                    <ul className="service-menu">
                      <li><a href="#">Crop Production</a></li>
                      <li><a href="#">Farm Management</a></li>
                      <li><a href="#">Organic Farming</a></li>
                      <li><a href="#">Agricultural Consulting</a></li>
                      <li><a href="#">Irrigation Solutions</a></li>
                    </ul>
                  </div>

                  <div className="service-widget contact-widget p-4 bg-light">
                    <h4>Need Help?</h4>
                    <p>
                      Contact Hermes Farms to learn more about our agricultural
                      services and how we can support your farming needs.
                    </p>
                    <a href="/contact" className="btn btn-primary">
                      Contact Us
                    </a>
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