import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Briefcase, Info } from "lucide-react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

const people = [
  {
    id: 1,
    name: "John Doe",
    role: "Chairman",
    bio: "John provides strategic leadership for Hermes Farms and brings over 20 years of experience in agriculture and agribusiness development.",
    fullBio: "John provides strategic leadership for Hermes Farms and brings over 20 years of experience in agriculture and agribusiness development. He has been instrumental in scaling our operations and establishing partnerships with global agricultural organizations. His vision focuses on sustainable innovation and community-driven growth."
  },
  {
    id: 2,
    name: "John Doe",
    role: "Managing Director",
    bio: "John oversees farm operations and business strategy, ensuring sustainable agricultural practices and operational excellence.",
    fullBio: "John oversees farm operations and business strategy, ensuring sustainable agricultural practices and operational excellence. With a background in agribusiness management, he bridges the gap between field production and market demands, driving the company's expansion into new regional markets."
  },
  {
    id: 3,
    name: "John Doe",
    role: "Operations Manager",
    bio: "John manages day-to-day farm operations, coordinating production, logistics, and workforce efficiency.",
    fullBio: "John manages day-to-day farm operations, coordinating production, logistics, and workforce efficiency. He is responsible for the implementation of modern irrigation systems and precision farming technologies across our diverse crop portfolio."
  },
  {
    id: 4,
    name: "John Doe",
    role: "Agronomy Lead",
    bio: "John leads crop science initiatives and ensures best practices in soil management, crop yield optimization, and sustainability.",
    fullBio: "John leads crop science initiatives and ensures best practices in soil management, crop yield optimization, and sustainability. His research-driven approach has resulted in a 15% increase in seasonal yields while reducing resource dependency."
  },
  {
    id: 5,
    name: "John Doe",
    role: "Finance Director",
    bio: "John oversees financial planning, investment strategy, and long-term growth initiatives for Hermes Farms.",
    fullBio: "John oversees financial planning, investment strategy, and long-term growth initiatives for Hermes Farms. He ensures that our financial foundation remains robust, enabling continuous reinvestment into farm technology and community infrastructure."
  },
  {
    id: 6,
    name: "John Doe",
    role: "Community Relations",
    bio: "John manages partnerships with local communities, farmers, and stakeholders to support sustainable agricultural development.",
    fullBio: "John manages partnerships with local communities, farmers, and stakeholders to support sustainable agricultural development. He is the primary architect of our 'Grow Together' initiative, which provides training and resources to over 200 small-scale farmers in the region."
  }
];

export default function Board() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const openModal = (person) => setSelectedPerson(person);
  const closeModal = () => setSelectedPerson(null);

  return (
    <>
      <Header />
      <PageBanner title="Our People" />

      <main className="main-content">
        <section className="page-team">
          <div className="container">
            <div className="section-title text-center">
              <h3>Leadership</h3>
              <h2>Meet the people guiding Hermes Farms</h2>
              <p className="mt-2 text-muted">Click on a member to learn more about their journey and impact.</p>
            </div>
            <div className="row g-4">
              {people.map((person) => (
                <div key={person.id} className="col-lg-4 col-md-6">
                  <motion.div 
                    whileHover={{ y: -10 }}
                    onClick={() => openModal(person)}
                    className="team-item team-item--placeholder"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="team-item-image">
                      <img
                        src="/images/profile.png"
                        alt={person.name}
                        className="member-avatar-image"
                      />
                      <div className="team-item-overlay">
                        <span>View Profile</span>
                      </div>
                    </div>
                    <div className="team-item-body">
                      <div className="team-item-content text-center">
                        <h2>{person.name}</h2>
                        <p className="text-primary fw-bold">{person.role}</p>
                        <small className="d-block mt-2 text-muted">{person.bio}</small>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedPerson && (
          <div className="modal-overlay" onClick={closeModal}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="person-modal"
            >
              <button className="modal-close-btn" onClick={closeModal}>
                <X size={24} />
              </button>

              <div className="modal-inner">
                <div className="modal-header-section">
                  <div className="modal-image-container">
                    <img src="/images/profile.png" alt={selectedPerson.name} />
                  </div>
                  <div className="modal-title-container">
                    <h3>{selectedPerson.name}</h3>
                    <p className="modal-role"><Briefcase size={16} className="me-2" /> {selectedPerson.role}</p>
                  </div>
                </div>

                <div className="modal-content-section">
                  <div className="modal-bio-card">
                    <h4><Info size={18} className="me-2" /> Professional Biography</h4>
                    <p>{selectedPerson.fullBio || selectedPerson.bio}</p>
                  </div>
                  
                  <div className="modal-contact-hint">
                    <p>Hermes Farms Leadership Team</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .person-modal {
          background: #fff;
          width: 100%;
          max-width: 600px;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: all 0.2s;
        }

        .modal-close-btn:hover {
          background: #fff;
          transform: rotate(90deg);
        }

        .modal-header-section {
          background: linear-gradient(135deg, #43732e 0%, #2f4128 100%);
          padding: 60px 40px 40px;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .modal-image-container {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 4px solid rgba(255,255,255,0.2);
          overflow: hidden;
          flex-shrink: 0;
        }

        .modal-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-title-container h3 {
          margin: 0;
          font-size: 2rem;
          font-weight: 700;
        }

        .modal-role {
          margin: 5px 0 0;
          opacity: 0.9;
          display: flex;
          align-items: center;
          font-size: 1.1rem;
        }

        .modal-content-section {
          padding: 40px;
          background: #f8f9fa;
        }

        .modal-bio-card {
          background: #fff;
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }

        .modal-bio-card h4 {
          font-size: 1.1rem;
          margin-bottom: 15px;
          color: #43732e;
          display: flex;
          align-items: center;
        }

        .modal-bio-card p {
          line-height: 1.7;
          color: #4a5568;
          margin: 0;
        }

        .modal-contact-hint {
          margin-top: 30px;
          text-align: center;
          font-size: 0.85rem;
          color: #a0aec0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .team-item-overlay {
          position: absolute;
          inset: 0;
          background: rgba(67, 115, 46, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .team-item:hover .team-item-overlay {
          opacity: 1;
        }

        .team-item-overlay span {
          color: #fff;
          font-weight: 600;
          padding: 8px 20px;
          border: 2px solid #fff;
          border-radius: 30px;
          backdrop-filter: blur(4px);
        }

        @media (max-width: 576px) {
          .modal-header-section {
            flex-direction: column;
            text-align: center;
            padding: 50px 20px 30px;
          }
          .modal-content-section {
            padding: 20px;
          }
          .modal-title-container h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}