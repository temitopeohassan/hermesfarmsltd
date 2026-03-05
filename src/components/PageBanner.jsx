import React from "react";

export default function PageBanner({ title }) {
  return (
    <div
      className="page-header"
      style={{ backgroundImage: "url(/images/page-header-bg.jpg)" }}
    >
      <div className="container">
        <div className="page-header-box">
          {title && <h1>{title}</h1>}
        </div>
      </div>
    </div>
  );
}
