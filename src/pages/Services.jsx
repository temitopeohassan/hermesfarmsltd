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
        <div className="container" style={{ padding: "80px 0 100px" }}>
          <h1>Services</h1>
          <p>Our services — content coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
