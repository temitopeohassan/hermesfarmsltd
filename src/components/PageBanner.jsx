import React from "react";

export default function PageBanner({ title }) {
  return (
    <div className="page-banner">
      <div className="container">
        <div className="page-banner-inner">
          {title && <h1 className="page-banner-title">{title}</h1>}
        </div>
      </div>
    </div>
  );
}
