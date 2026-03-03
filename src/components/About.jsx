import React from "react";

export default function About() {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5">
            <img
              src="/images/about-us-image-1.jpg"
              alt="About"
              className="img-fluid"
            />
          </div>

          <div className="col-xl-7">
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

            <a href="/about" className="btn-default">
              More About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
