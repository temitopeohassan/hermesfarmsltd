import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

const consultancyServices = [
  "Farm setup and operational planning",
  "Poultry, livestock, and aquaculture management",
  "Feed formulation and cost optimization",
  "Disease prevention and biosecurity strategies",
  "Farm record keeping and performance analysis",
  "Sustainable and organic farming practices",
];

const trainingAreas = [
  "Poultry, catfish, rabbit, and goat farming",
  "Farm management best practices",
  "Food handling, processing, and hygiene",
  "Agribusiness development and scaling",
];

const cateringEvents = [
  "Private parties and celebrations",
  "Corporate events",
  "Weddings and outdoor gatherings",
];

const cateringSpecialties = [
  "Smoked and grilled chicken",
  "Smoked catfish",
  "Grilled goat meat and assorted meats",
  "Custom menus on request",
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

export default function Services() {
  return (
    <>
      <Header />
      <PageBanner title="Services" />

      <main className="main-content">
        <motion.section
          className="page-service-single"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <motion.div className="page-single-image" variants={fadeUp}>
                  <div className="media-placeholder media-placeholder--service" />
                </motion.div>

                <motion.div className="service-entry" variants={fadeUp}>
                  <h2>Supporting Agriculture. Empowering Skills. Serving Flavor.</h2>
                  <p>
                    At Hermes Farms Ltd, we go beyond farm produce. We offer
                    specialized services designed to support farmers,
                    agribusinesses, and event hosts with expert guidance,
                    hands-on training, and premium catering experiences.
                  </p>
                  <p>
                    Our services are built on practical experience, quality
                    standards, and a passion for excellence.
                  </p>

                  <h3 id="farm-management-consultancy">
                    Farm Management Consultancy
                  </h3>
                  <p>
                    Our Farm Management Consultancy service provides expert
                    support to individuals, startups, and established farms
                    seeking to improve productivity and profitability. We offer
                    practical, results-driven solutions tailored to your farm's
                    unique needs.
                  </p>
                  <p>Our consultancy services include:</p>
                  <ul>
                    {consultancyServices.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>
                    Whether you are starting a new farm or optimizing an
                    existing one, our team provides clear guidance every step of
                    the way.
                  </p>

                  <h3 id="training-capacity-building">
                    Training & Capacity Building
                  </h3>
                  <p>
                    We provide hands-on training programs designed to equip
                    individuals, groups, and organizations with practical
                    agricultural and food-processing skills. Our training
                    sessions combine theory with real-life farm experience.
                  </p>
                  <p>Training areas include:</p>
                  <ul>
                    {trainingAreas.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>
                    Our training programs are suitable for beginners, aspiring
                    farmers, cooperatives, and agribusiness professionals.
                  </p>

                  <h3 id="event-catering">
                    Event Catering - Smoking & Grilling
                  </h3>
                  <p>
                    Hermes Farms Ltd offers premium party catering services,
                    specializing in smoking and grilling fresh, high-quality
                    produce sourced directly from our farms. We deliver
                    unforgettable flavors for all types of events.
                  </p>
                  <p>Perfect for:</p>
                  <ul>
                    {cateringEvents.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>Our catering specialties include:</p>
                  <ul>
                    {cateringSpecialties.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>
                    We handle everything with professionalism, hygiene, and
                    attention to detail so you can enjoy your event without
                    stress.
                  </p>
                </motion.div>
              </div>

              <div className="col-lg-4">
                <motion.aside
                  className="page-single-sidebar"
                  variants={staggerContainer}
                >
                  <motion.div
                    className="page-category-list"
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <h3>Our Services</h3>
                    <ul>
                      <li><a href="#farm-management-consultancy">Farm Management Consultancy</a></li>
                      <li><a href="#training-capacity-building">Training &amp; Capacity Building</a></li>
                      <li><a href="#event-catering">Event Catering</a></li>
                    </ul>
                  </motion.div>

                  <motion.div
                    className="sidebar-cta-box"
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="sidebar-cta-body">
                      <div className="sidebar-cta-content">
                        <h3>Need support for your farm, training, or event?</h3>
                        <p>
                          Contact Hermes Farms to discuss consultancy, training,
                          catering, and partnership opportunities.
                        </p>
                      </div>
                      <Link to="/contact" className="btn-default">Contact Us</Link>
                    </div>
                  </motion.div>

                  <motion.div
                    className="soilux-contact-card"
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <h4>Quick Contact</h4>
                    <p>+234 703 461 4623</p>
                    <p>info@hermesfarmsltd.com</p>
                  </motion.div>
                </motion.aside>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}