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
        <div className="container" style={{ padding: "80px 0 100px" }}>
          <h1>Contact Us</h1>
          <p>Contact — content coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
