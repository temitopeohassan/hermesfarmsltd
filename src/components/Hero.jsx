import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero bg-section dark-section hero-custom">
      <div className="hero-box">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-7 col-lg-8">
              <div className="hero-content">
                <div className="section-title">
                  <h3>Healthy Farms, Healthy Lives</h3>
                  <h1>
                    Discover trusted farm produce grown with care, consistency,
                    and sustainable methods
                  </h1>
                  <p>
                    Hermes Farms partners with homes, stores, and distributors to
                    deliver nutritious food from field to table.
                  </p>
                </div>

                <div className="hero-btn">
                  <Link to="/contact" className="btn-default btn-highlighted">
                    Contact Our Team
                  </Link>
                  <Link to="/services" className="btn-default btn-border">
                    View Our Services
                  </Link>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
