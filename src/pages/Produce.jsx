import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

export default function Produce() {
  return (
    <>
      <Header />
      <PageBanner title="Produce" />
      <main className="main-content">
        <div className="container" style={{ padding: "80px 0 100px" }}>
          <h1>Produce</h1>
          <p>Our produce — content coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
