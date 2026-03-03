import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Footer />
    </>
  );
}
