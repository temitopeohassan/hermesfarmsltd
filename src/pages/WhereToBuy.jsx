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
          <h1>Where To Buy</h1>
          <p>Find Hermes Farms produce — content coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
