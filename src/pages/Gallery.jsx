import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

const galleryItems = [
  "Field Preparation",
  "Seedling Nursery",
  "Harvest Day",
  "Produce Sorting",
  "Distribution Packing",
  "Community Outreach",
];

export default function Gallery() {
  return (
    <>
      <Header />
      <PageBanner title="Gallery" />
      <main className="main-content">
        <section className="page-gallery">
          <div className="container">
            <div className="section-title text-center">
              <h3>Farm Moments</h3>
              <h2>Snapshots from our daily operations and field activities</h2>
            </div>
            <div className="row page-gallery-box">
              {galleryItems.map((item, index) => (
                <div className="col-lg-4 col-md-6" key={item}>
                  <div className="photo-gallery">
                    <div className="gallery-media-placeholder">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
