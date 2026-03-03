import React from "react";

export default function Hero() {
  return (
    <div className="hero bg-section dark-section">
      <div className="hero-box">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-6">
              <div className="hero-content">
                <div className="section-title">
                  <h3>Healthy Farms, Healthy Lives</h3>
                  <h1>
                    Discover the Power of Organic Farming, Grown with Love &
                    Reliability
                  </h1>
                  <p>
                    Experience the true essence of organic farming, where every
                    crop is grown with care.
                  </p>
                </div>

                <div className="hero-btn">
                  <a href="/contact" className="btn-default btn-highlighted">
                    Visit Our Farm
                  </a>
                  <a href="/services" className="btn-default btn-border">
                    View Our Services
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="hero-image">
                <img src="/images/hero-image.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
