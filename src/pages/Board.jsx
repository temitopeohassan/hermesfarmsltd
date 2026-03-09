import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

const people = [
  {
    id: 1,
    name: "John Doe",
    role: "Chairman",
    bio: "John provides strategic leadership for Hermes Farms and brings over 20 years of experience in agriculture and agribusiness development."
  },
  {
    id: 2,
    name: "John Doe",
    role: "Managing Director",
    bio: "John oversees farm operations and business strategy, ensuring sustainable agricultural practices and operational excellence."
  },
  {
    id: 3,
    name: "John Doe",
    role: "Operations Manager",
    bio: "John manages day-to-day farm operations, coordinating production, logistics, and workforce efficiency."
  },
  {
    id: 4,
    name: "John Doe",
    role: "Agronomy Lead",
    bio: "John leads crop science initiatives and ensures best practices in soil management, crop yield optimization, and sustainability."
  },
  {
    id: 5,
    name: "John Doe",
    role: "Finance Director",
    bio: "John oversees financial planning, investment strategy, and long-term growth initiatives for Hermes Farms."
  },
  {
    id: 6,
    name: "John Doe",
    role: "Community Relations",
    bio: "John manages partnerships with local communities, farmers, and stakeholders to support sustainable agricultural development."
  }
];

export default function Board() {
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
            </div>
            <div className="row">
              {people.map((person) => (
                <div key={person.id} className="col-lg-4 col-md-6">
                  <div className="team-item team-item--placeholder">
                    <div className="team-item-image">
                      <img
                        src="/images/profile.png"
                        alt={person.name}
                        className="member-avatar-image"
                      />
                    </div>
                    <div className="team-item-body">
                      <div className="team-item-content">
                        <h2>{person.name}</h2>
                        <p>{person.role}</p>
                        <small>{person.bio}</small>
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