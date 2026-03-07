import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

const people = [
  {
    id: 1,
    name: "John Doe",
    role: "Chairman",
    image: "/images/team/team-1.jpg",
    bio: "John provides strategic leadership for Hermes Farms and brings over 20 years of experience in agriculture and agribusiness development."
  },
  {
    id: 2,
    name: "Mary Johnson",
    role: "Managing Director",
    image: "/images/team/team-2.jpg",
    bio: "Mary oversees farm operations and business strategy, ensuring sustainable agricultural practices and operational excellence."
  },
  {
    id: 3,
    name: "David Smith",
    role: "Operations Manager",
    image: "/images/team/team-3.jpg",
    bio: "David manages day-to-day farm operations, coordinating production, logistics, and workforce efficiency."
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Agronomy Lead",
    image: "/images/team/team-4.jpg",
    bio: "Sarah leads crop science initiatives and ensures best practices in soil management, crop yield optimization, and sustainability."
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "Finance Director",
    image: "/images/team/team-5.jpg",
    bio: "Michael oversees financial planning, investment strategy, and long-term growth initiatives for Hermes Farms."
  },
  {
    id: 6,
    name: "Linda Davis",
    role: "Community Relations",
    image: "/images/team/team-6.jpg",
    bio: "Linda manages partnerships with local communities, farmers, and stakeholders to support sustainable agricultural development."
  }
];

export default function Board() {
  return (
    <>
      <Header />
      <PageBanner title="Our People" />

      <main className="main-content">
        <section className="team-section">
          <div className="container" style={{ padding: "80px 0 100px" }}>
            <div className="row">

              {people.map((person) => (
                <div key={person.id} className="col-lg-4 col-md-6 mb-4">
                  <div className="testimonial-item text-center">

                    <div className="testimonial-image mb-3">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="img-fluid rounded-circle"
                        style={{ width: "120px", height: "120px", objectFit: "cover" }}
                      />
                    </div>

                    <div className="testimonial-content">
                      <p>{person.bio}</p>
                      <h4>{person.name}</h4>
                      <span>{person.role}</span>
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