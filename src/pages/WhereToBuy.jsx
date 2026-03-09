import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

const outlets = [
  {
    name: "CTTaste Hermes Farms Store",
    location: "Order Online",
    type: "Online Marketplace",
    icon: "fa-solid fa-cart-shopping",
    url: "https://cttaste.com/Hermes-farms",
  },
];

export default function WhereToBuy() {
  return (
    <>
      <Header />
      <PageBanner title="Where To Buy" />

      <main className="main-content">
        <section className="where-to-buy-section">
          <div className="container">
            <div className="section-title text-center">
              <h3>Distribution</h3>
              <h2>Find Hermes Farms produce near you</h2>
              <p>
                Our produce is available through selected markets, grocery
                stores, trusted partner distributors, and online ordering
                platforms.
              </p>
            </div>

            <div className="row">
              {outlets.map((outlet) => (
                <div className="col-lg-3 col-md-6" key={outlet.name}>
                  <div className="where-to-buy-card">
                    <i className={outlet.icon} />
                    <h4>{outlet.name}</h4>
                    <p>{outlet.location}</p>
                    <span>{outlet.type}</span>
                    {outlet.url && (
                      <div style={{ marginTop: "18px" }}>
                        <a
                          href={outlet.url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-default"
                        >
                          Buy Online
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="where-to-buy-cta">
              <p>
                For wholesale purchases or to become a retail partner, we’d
                love to hear from you.
              </p>
              <a
                href="https://cttaste.com/Hermes-farms"
                target="_blank"
                rel="noreferrer"
                className="btn-default"
                style={{ marginRight: "12px" }}
              >
                Order on CTTaste
              </a>
              <Link to="/contact" className="btn-default">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}