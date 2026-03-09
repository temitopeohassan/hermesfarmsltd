import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

const products = [
  {
    name: "Chicken",
    description: "Fresh, tender, and naturally raised poultry.",
  },
  {
    name: "Catfish",
    description: "Farm-raised, healthy, and rich in flavor.",
  },
  {
    name: "Rabbit",
    description: "Lean, nutritious, and hygienically processed.",
  },
  {
    name: "Goat Meat",
    description: "Premium quality, fresh, and well-prepared.",
  },
  {
    name: "Vegetables",
    description: "Freshly harvested, chemical-free produce.",
  },
  {
    name: "Pepper",
    description: "Vibrant, flavorful, and naturally grown.",
  },
];

const commitments = [
  "Organic and sustainable farming",
  "Hygienic processing and packaging",
  "Reliable and timely delivery",
  "Consistent quality assurance",
  "Customer satisfaction and trust",
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

export default function About() {
  return (
    <>
      <Header />
      <PageBanner title="About Us" />

      <main className="main-content">
        <motion.section
          className="our-approach"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <motion.div
                  className="media-placeholder media-placeholder--about-page"
                  variants={fadeUp}
                >
                  <img
                    src="/images/about-us-image-1.jpg"
                    alt="Hermes Farms team working on cultivated vegetable rows"
                    className="media-placeholder__image"
                  />
                </motion.div>
              </div>

              <div className="col-lg-6">
                <motion.div className="section-title" variants={fadeUp}>
                  <h3>Hermes Farms Ltd</h3>
                  <h2>Fresh, organic, and high-quality farm produce you can trust</h2>
                  <p>
                    At Hermes Farms Ltd, we are committed to delivering fresh,
                    organic, and high-quality farm produce straight from our
                    farms to your table. We believe healthy living starts with
                    clean, naturally raised food, and that is exactly what we
                    provide.
                  </p>
                  <p>
                    Founded with a passion for sustainable agriculture and
                    excellence in food production, Hermes Farms Ltd has grown
                    into a trusted source of premium farm produce. We combine
                    modern farming practices with traditional care to ensure
                    every product meets the highest standards of freshness,
                    nutrition, and taste.
                  </p>
                </motion.div>

                <motion.div className="soilux-list" variants={staggerContainer}>
                  <motion.div variants={fadeUp}>
                    <i className="fa-solid fa-check" /> Organic and sustainable
                    farm production
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <i className="fa-solid fa-check" /> Modern methods guided
                    by traditional care
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <i className="fa-solid fa-check" /> Freshness, nutrition,
                    and taste in every product
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="why-choose-us"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="container">
            <motion.div className="section-title text-center" variants={fadeUp}>
              <h3>What We Offer</h3>
              <h2>Organically raised and carefully processed farm products</h2>
              <p>
                Every product is cultivated and handled with care to maintain
                its natural quality and nutritional value.
              </p>
            </motion.div>

            <motion.div className="row" variants={staggerContainer}>
              {products.map((product) => (
                <motion.div
                  key={product.name}
                  className="col-lg-4 col-md-6"
                  variants={fadeUp}
                >
                  <motion.div
                    className="soilux-feature-card"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <i className="fa-solid fa-leaf" />
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
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
              <h3>Our Commitment</h3>
              <h2>Safe, wholesome food from farm to delivery</h2>
              <p>
                We understand the importance of feeding your family with safe
                and wholesome food. That is why we maintain strict quality
                control measures from farm to delivery.
              </p>
            </motion.div>

            <motion.div className="row text-center" variants={staggerContainer}>
              {commitments.map((item) => (
                <motion.div key={item} className="col-lg-4 col-md-6" variants={fadeUp}>
                  <motion.div
                    className="soilux-feature-card"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <i className="fa-solid fa-check" />
                    <h4>{item}</h4>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="why-choose-us"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="container">
            <motion.div className="row" variants={staggerContainer}>
              <motion.div className="col-lg-6" variants={fadeUp}>
                <motion.div
                  className="soilux-metric-card"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <h3>Our Vision</h3>
                  <p>
                    To become a leading provider of organic farm produce, known
                    for quality, integrity, and excellence in agricultural
                    production.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div className="col-lg-6" variants={fadeUp}>
                <motion.div
                  className="soilux-metric-card"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <h3>Our Mission</h3>
                  <p>
                    To promote healthy living by supplying fresh, affordable,
                    and organically grown farm products while supporting
                    sustainable farming practices.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="section-title text-center"
              style={{ marginTop: "40px" }}
              variants={fadeUp}
            >
              <p>At Hermes Farms Ltd, freshness is not just a promise, it is our standard.</p>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}