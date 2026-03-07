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

        {/* Contact Info */}
        <section className="contact-info">
          <div className="container" style={{ padding: "80px 0 40px" }}>
            <div className="row text-center">

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="contact-info-item">
                  <h4>Address</h4>
                  <p>
                    Hermes Farms Ltd<br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="contact-info-item">
                  <h4>Email</h4>
                  <p>
                    info@hermesfarms.com<br />
                    sales@hermesfarms.com
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="contact-info-item">
                  <h4>Phone</h4>
                  <p>
                    +234 800 000 0000<br />
                    +234 800 000 0001
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <div className="container" style={{ paddingBottom: "80px" }}>
            <div className="row justify-content-center">
              <div className="col-lg-8">

                <div className="section-title text-center mb-4">
                  <h2>Send Us a Message</h2>
                  <p>
                    Have questions about our produce or services? Fill out the
                    form below and our team will get back to you.
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

                    <div className="col-md-12 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>

                    <div className="col-md-12 mb-3">
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                    </div>

                  </div>
                </form>

              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="map-section">
          <div className="container" style={{ paddingBottom: "100px" }}>
            <iframe
              title="Hermes Farms Location"
              src="https://maps.google.com/maps?q=lagos&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}