import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <PageBanner title="Contact Us" />

      <main className="main-content">
        <section className="page-contact-us">
          <div className="container">
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-6">
                <div className="contact-us-image-box">
                  <div className="contact-us-image media-placeholder media-placeholder--contact" />
                  <div className="contact-info-list">
                    <div className="contact-info-item">
                      <div className="icon-box">
                        <i className="fa-solid fa-phone" />
                      </div>
                      <div className="contact-info-item-content">
                        <h3>Phone</h3>
                        <p>+234 703 461 4623</p>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <div className="icon-box">
                        <i className="fa-solid fa-envelope" />
                      </div>
                      <div className="contact-info-item-content">
                        <h3>Email</h3>
                        <p>info@hermesfarmsltd.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="contact-us-form">
                  <div className="section-title">
                    <h3>Get In Touch</h3>
                    <h2>Send us a message</h2>
                    <p>
                      Have questions about our produce or services? Fill out the
                      form and our team will get back to you shortly.
                    </p>
                  </div>
                  <form className="contact-form">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Your Message"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn-default">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="google-map">
          <div className="container">
            <div className="google-map-iframe">
              <iframe
                title="Hermes Farms Location"
                src="https://maps.google.com/maps?q=Ogun%20State%20Nigeria&t=&z=10&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />
            </div>
            <div className="soilux-address-note">
              <h4>Visit us</h4>
              <p>
                Olutunji Close, Araromi, Itoki Rd, 100271, Ogun State, Nigeria
              </p>
            </div>
          </div>
        </section>

        <section className="contact-summary">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="contact-info-item contact-info-item--simple">
                  <h4>Address</h4>
                  <p>
                    Hermes Farms Ltd<br />
                    Ogun State, Nigeria
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-info-item contact-info-item--simple">
                  <h4>Email</h4>
                  <p>
                    info@hermesfarmsltd.com<br />
                    sales@hermesfarmsltd.com
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-info-item contact-info-item--simple">
                  <h4>Phone</h4>
                  <p>
                    +234 703 461 4623<br />
                    +234 816 000 0000
                  </p>
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