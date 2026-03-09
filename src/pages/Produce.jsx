import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Fresh Chicken",
    icon: "fa-solid fa-drumstick-bite",
    description:
      "Our chickens are naturally raised in a healthy, stress-free environment and fed with quality feed to ensure tender, flavorful meat. Carefully processed under hygienic conditions, our chicken is perfect for homes, restaurants, and bulk buyers seeking freshness and quality.",
    options:
      "Whole chicken, dressed chicken, and custom cuts upon request.",
  },
  {
    id: 2,
    name: "Farm-Raised Catfish",
    icon: "fa-solid fa-fish",
    description:
      "Our catfish are bred and raised in clean, well-maintained ponds to ensure optimal growth and taste. Rich in protein and omega nutrients, Hermes Farms catfish are fresh, firm, and delicious.",
    options: "Live catfish, smoked catfish, and processed catfish.",
  },
  {
    id: 3,
    name: "Premium Rabbit",
    icon: "fa-solid fa-paw",
    description:
      "Rabbit meat is lean, healthy, and packed with nutrients. Our rabbits are carefully raised to produce high-quality, low-fat meat suitable for a variety of healthy diets.",
    options: "Whole rabbit, processed and cleaned.",
  },
  {
    id: 4,
    name: "Quality Goat Meat",
    icon: "fa-solid fa-cow",
    description:
      "We supply fresh, tender goat meat sourced from healthy, well-fed livestock. Known for its rich flavor and nutritional benefits, our goat meat is hygienically prepared and suitable for both retail and wholesale customers.",
    options: "Fresh cuts and whole goat on request.",
  },
  {
    id: 5,
    name: "Fresh Vegetables",
    icon: "fa-solid fa-seedling",
    description:
      "Our vegetables are grown organically with minimal chemical use, ensuring maximum freshness and natural taste. Harvested at peak ripeness, they are rich in nutrients and full of flavor.",
    options:
      "Seasonal and everyday vegetables for homes, markets, and food vendors.",
  },
  {
    id: 6,
    name: "Fresh Pepper",
    icon: "fa-solid fa-pepper-hot",
    description:
      "Our peppers are vibrant, flavorful, and carefully cultivated to retain their natural spice and aroma. Whether for household cooking or commercial use, our peppers add the perfect kick to every meal.",
    options: "Fresh supply for household and commercial use.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Produce() {
  return (
    <>
      <Header />
      <PageBanner title="Our Produce" />

      <main className="main-content">
        <motion.section
          className="page-products"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="container">
            <motion.div className="section-title text-center" variants={fadeUp}>
              <h3>Fresh. Organic. Naturally Raised.</h3>
              <h2>Premium farm produce cultivated with care, integrity, and quality</h2>
              <p>
                At Hermes Farms Ltd, we take pride in offering premium farm
                produce raised and grown using sustainable practices to ensure
                freshness, quality, and rich nutritional value.
              </p>
              <p>From farm to table, we guarantee produce you can trust.</p>
            </motion.div>

            <motion.div className="row" variants={staggerContainer}>
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  className="col-lg-4 col-md-6"
                  variants={fadeUp}
                >
                  <motion.div
                    className="product-item soilux-feature-card"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="product-image">
                      <div className="product-item-media">
                        <i className={product.icon} />
                      </div>
                    </div>

                    <div className="product-item-body">
                      <div className="product-item-content">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <small>
                          <strong>Available options:</strong> {product.options}
                        </small>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="why-choose-us section-soft-bg"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="container">
            <motion.div className="section-title text-center" variants={fadeUp}>
              <h3>Quality You Can Taste</h3>
              <h2>Fresh, safe, and nutritious produce for every customer</h2>
              <p>
                At Hermes Farms Ltd, we maintain strict hygiene and quality
                standards throughout cultivation, harvesting, processing, and
                packaging.
              </p>
            </motion.div>

            <motion.div className="row" variants={staggerContainer}>
              <motion.div className="col-lg-6" variants={fadeUp}>
                <motion.div
                  className="soilux-metric-card"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <h3>Our Promise</h3>
                  <p>
                    Our goal is to provide farm produce that is not only fresh
                    but also safe and nutritious for individuals, families,
                    restaurants, and bulk buyers.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div className="col-lg-6" variants={fadeUp}>
                <motion.div
                  className="soilux-metric-card"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <h3>Trusted Supply</h3>
                  <p>
                    Whether you are buying for your home, restaurant, or
                    business, Hermes Farms Ltd is your trusted source for
                    premium farm produce. Fresh from our farm to your table.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}