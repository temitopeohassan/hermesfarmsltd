import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <>
      <Header />
      <PageBanner title="Blog" />
      <main className="main-content">
        <div className="container" style={{ padding: "80px 0 100px" }}>
          <h1>Blog</h1>
          <p>Blog — content coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
