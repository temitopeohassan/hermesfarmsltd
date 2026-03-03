import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <>
      <Header />
      <PageBanner title="Gallery" />
      <main className="main-content">
        <div className="container" style={{ padding: "80px 0 100px" }}>
          <h1>Gallery</h1>
          <p>Gallery — content coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
