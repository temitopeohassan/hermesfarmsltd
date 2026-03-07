import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

export default function WhereToBuy() {
  return (
    <>
      <Header />
      <PageBanner title="Where To Buy" />

      <main className="main-content">
        <div className="container" style={{ padding: "80px 0 100px" }}>
          
          <h2>Where To Buy Hermes Farms Produce</h2>

          <p>
            Hermes Farms produce is available through selected markets,
            grocery stores, and partner distributors. We work with trusted
            retailers to ensure our fresh farm products reach customers
            across our distribution areas.
          </p>

          <h4 className="mt-4">Available At:</h4>

          <ul className="buy-list">
            <li>Lekki Farmers Market – Lagos</li>
            <li>Green Harvest Grocery – Victoria Island</li>
            <li>Fresh Basket Supermarket – Ikeja</li>
            <li>Selected farm produce distributors</li>
            <li>Direct farm orders (contact us for bulk supply)</li>
          </ul>

          <p className="mt-4">
            For wholesale purchases or to become a retail partner,
            please <a href="/contact">contact us</a>.
          </p>

        </div>
      </main>

      <Footer />
    </>
  );
}