import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    image: "/images/products/product-1.jpg",
  },
  {
    id: 2,
    name: "Organic Carrots",
    category: "Vegetables",
    image: "/images/products/product-2.jpg",
  },
  {
    id: 3,
    name: "Green Lettuce",
    category: "Leafy Greens",
    image: "/images/products/product-3.jpg",
  },
  {
    id: 4,
    name: "Sweet Corn",
    category: "Grains",
    image: "/images/products/product-4.jpg",
  },
  {
    id: 5,
    name: "Fresh Potatoes",
    category: "Root Crops",
    image: "/images/products/product-5.jpg",
  },
  {
    id: 6,
    name: "Farm Eggs",
    category: "Poultry",
    image: "/images/products/product-6.jpg",
  },
];

export default function Produce() {
  return (
    <>
      <Header />
      <PageBanner title="Our Produce" />

      <main className="main-content">
        <section className="products-section">
          <div className="container" style={{ padding: "80px 0 100px" }}>
            <div className="row">

              {products.map((product) => (
                <div key={product.id} className="col-lg-4 col-md-6 mb-4">
                  <div className="product-item">
                    
                    <div className="product-image">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid"
                      />
                    </div>

                    <div className="product-content text-center mt-3">
                      <h4>{product.name}</h4>
                      <p>{product.category}</p>
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