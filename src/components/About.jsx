import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="media-placeholder media-placeholder--about">
              <div className="media-placeholder__badge">Soil. Care. Harvest.</div>
            </div>
          </div>

          <div className="col-xl-7 col-lg-6">
            <div className="section-title">
              <h3>About Our Farm</h3>
              <h2>
                From soil to harvest, we believe in clean and conscious farming
              </h2>
              <p>
                From soil preparation to final harvest, we use sustainable,
                chemical-free methods.
              </p>
            </div>

            <Link to="/about" className="btn-default">
              More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
