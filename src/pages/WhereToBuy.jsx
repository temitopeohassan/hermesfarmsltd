import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

const outlets = [
  {
    name: "Lekki Farmers Market",
    location: "Lagos",
    type: "Retail Outlet",
  },
  {
    name: "Green Harvest Grocery",
    location: "Victoria Island",
    type: "Grocery Partner",
  },
  {
    name: "Fresh Basket Supermarket",
    location: "Ikeja",
    type: "Supermarket",
  },
  {
    name: "Direct Farm Supply",
    location: "Bulk Orders",
    type: "Wholesale",
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
                stores, and trusted partner distributors.
              </p>
            </div>

            <div className="row">
              {outlets.map((outlet) => (
                <div className="col-lg-3 col-md-6" key={outlet.name}>
                  <div className="where-to-buy-card">
                    <i className="fa-solid fa-store" />
                    <h4>{outlet.name}</h4>
                    <p>{outlet.location}</p>
                    <span>{outlet.type}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="where-to-buy-cta">
              <p>
                For wholesale purchases or to become a retail partner, we’d
                love to hear from you.
              </p>
              <Link to="/contact" className="btn-default">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}