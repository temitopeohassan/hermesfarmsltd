import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <PageBanner title="" />
      <main className="main-content">
        <div className="container" style={{ padding: "80px 0 100px" }}>
          <h1>About Us</h1>
          <p>About Hermes Farms Ltd — content coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
