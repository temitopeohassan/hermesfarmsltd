import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

export default function Board() {
  return (
    <>
      <Header />
      <PageBanner title="Our People" />
      <main className="main-content">
        <div className="container" style={{ padding: "80px 0 100px" }}>
          <h1>Our People</h1>
          <p>Board and team — content coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
