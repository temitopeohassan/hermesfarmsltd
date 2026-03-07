import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    icon: "fa-solid fa-apple-whole"
  },
  {
    id: 2,
    name: "Organic Carrots",
    category: "Vegetables",
    icon: "fa-solid fa-carrot"
  },
  {
    id: 3,
    name: "Green Lettuce",
    category: "Leafy Greens",
    icon: "fa-solid fa-leaf"
  },
  {
    id: 4,
    name: "Sweet Corn",
    category: "Grains",
    icon: "fa-solid fa-seedling"
  },
  {
    id: 5,
    name: "Fresh Potatoes",
    category: "Root Crops",
    icon: "fa-solid fa-basket-shopping"
  },
  {
    id: 6,
    name: "Farm Eggs",
    category: "Poultry",
    icon: "fa-solid fa-egg"
  },
];

export default function Produce() {
  return (
    <>
      <Header />
      <PageBanner title="Our Produce" />

      <main className="main-content">
        <section className="page-products">
          <div className="container">
            <div className="section-title text-center">
              <h3>Fresh Selection</h3>
              <h2>Seasonal farm produce for retail and wholesale supply</h2>
            </div>
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-lg-4 col-md-6">
                  <div className="product-item">
                    <div className="product-image">
                      <div className="product-item-media">
                        <i className={product.icon} />
                      </div>
                    </div>

                    <div className="product-item-body">
                      <div className="product-item-content">
                        <h2>{product.name}</h2>
                        <p>{product.category}</p>
                      </div>
                    </div>
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