import React from "react";

export default function PageBanner({ title }) {
  return (
    <div className="page-header page-header--themed">
      <div className="container">
        <div className="page-header-box">
          {title && <h1>{title}</h1>}
        </div>
      </div>
    </div>
  );
}
