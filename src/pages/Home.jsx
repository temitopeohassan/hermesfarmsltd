import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const produceHighlights = [
  {
    name: "Fresh Chicken",
    description: "Naturally raised poultry processed under hygienic conditions for homes, restaurants, and bulk buyers.",
    icon: "fa-solid fa-drumstick-bite",
  },
  {
    name: "Farm-Raised Catfish",
    description: "Clean-pond catfish with firm texture, rich flavor, and dependable fresh supply options.",
    icon: "fa-solid fa-fish",
  },
  {
    name: "Fresh Vegetables",
    description: "Organically grown vegetables harvested at peak freshness for everyday meals and market supply.",
    icon: "fa-solid fa-seedling",
  },
];

const serviceHighlights = [
  {
    title: "Farm Management Consultancy",
    description: "Practical support for farm setup, operations, productivity, and sustainable growth.",
    icon: "fa-solid fa-tractor",
  },
  {
    title: "Training & Capacity Building",
    description: "Hands-on agricultural and food-processing training for beginners, cooperatives, and professionals.",
    icon: "fa-solid fa-graduation-cap",
  },
  {
    title: "Event Catering",
    description: "Smoking and grilling services featuring fresh chicken, catfish, goat meat, and custom menus.",
    icon: "fa-solid fa-fire-burner",
  },
];

const boardPreview = [
  {
    name: "Chairman",
    text: "Strategic oversight and long-term direction for sustainable agricultural growth.",
  },
  {
    name: "Managing Director",
    text: "Leadership across operations, partnerships, and day-to-day delivery excellence.",
  },
  {
    name: "Operations Team",
    text: "Coordinated support for production, training, logistics, and customer satisfaction.",
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

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <main className="main-content">
        <motion.section
          className="about-us"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6">
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

              <div className="col-xl-7 col-lg-6">
                <motion.div className="section-title" variants={fadeUp}>
                  <h3>About Hermes Farms Ltd</h3>
                  <h2>Fresh, organic, and high-quality farm produce you can trust</h2>
                  <p>
                    Hermes Farms Ltd delivers fresh, naturally raised produce
                    backed by sustainable agriculture, hygienic handling, and a
                    strong commitment to healthy living.
                  </p>
                  <p>
                    We combine modern farming practices with traditional care so
                    every product reaches homes, businesses, and partners with
                    freshness, nutrition, and quality intact.
                  </p>
                </motion.div>

                <motion.div className="soilux-list" variants={staggerContainer}>
                  <motion.div variants={fadeUp}>
                    <i className="fa-solid fa-check" /> Organic and sustainable farming
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <i className="fa-solid fa-check" /> Hygienic processing and packaging
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <i className="fa-solid fa-check" /> Reliable supply from farm to table
                  </motion.div>
                </motion.div>

                <motion.div variants={fadeUp} style={{ marginTop: "30px" }}>
                  <Link to="/about" className="btn-default">
                    Read More
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="page-products"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="container">
            <motion.div className="section-title text-center" variants={fadeUp}>
              <h3>Our Produce</h3>
              <h2>Premium farm produce cultivated with care and quality</h2>
              <p>
                From fresh chicken and catfish to vegetables and pepper, our
                produce is raised and grown for freshness, flavor, and trusted
                nutrition.
              </p>
            </motion.div>

            <motion.div className="row" variants={staggerContainer}>
              {produceHighlights.map((item) => (
                <motion.div
                  key={item.name}
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
                        <i className={item.icon} />
                      </div>
                    </div>
                    <div className="product-item-body">
                      <div className="product-item-content">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="section-title text-center" variants={fadeUp}>
              <Link to="/produce" className="btn-default">
                Read More
              </Link>
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
              <h3>Our Services</h3>
              <h2>Supporting agriculture, empowering skills, and serving flavor</h2>
              <p>
                We provide consultancy, training, and event catering services
                built on practical experience, strong quality standards, and
                dependable delivery.
              </p>
            </motion.div>

            <motion.div className="row text-center" variants={staggerContainer}>
              {serviceHighlights.map((item) => (
                <motion.div
                  key={item.title}
                  className="col-lg-4 col-md-6"
                  variants={fadeUp}
                >
                  <motion.div
                    className="soilux-feature-card"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <i className={item.icon} />
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="section-title text-center" variants={fadeUp}>
              <Link to="/services" className="btn-default">
                Read More
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="page-team"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="container">
            <motion.div className="section-title text-center" variants={fadeUp}>
              <h3>Our People</h3>
              <h2>Meet the leadership behind Hermes Farms</h2>
              <p>
                Our team combines strategic direction, operational experience,
                and practical agricultural knowledge to keep Hermes Farms moving
                forward.
              </p>
            </motion.div>

            <motion.div className="row" variants={staggerContainer}>
              {boardPreview.map((item) => (
                <motion.div
                  key={item.name}
                  className="col-lg-4 col-md-6"
                  variants={fadeUp}
                >
                  <motion.div
                    className="team-item team-item--placeholder"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="team-item-image">
                      <img
                        src="/images/profile.png"
                        alt={item.name}
                        className="member-avatar-image"
                      />
                    </div>
                    <div className="team-item-body">
                      <div className="team-item-content">
                        <h2>{item.name}</h2>
                        <small>{item.text}</small>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="section-title text-center" variants={fadeUp}>
              <Link to="/board" className="btn-default">
                Read More
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
