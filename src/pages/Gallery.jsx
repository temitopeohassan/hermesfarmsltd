import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import galleryItems from "../data/galleryItems.json";

const FALLBACK_IMAGE = "/vite.svg";

export default function Gallery() {
  const items = useMemo(() => galleryItems, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const activeItem = activeIndex === null ? null : items[activeIndex];
  const hasMultipleItems = items.length > 1;

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight" && hasMultipleItems) {
        setActiveIndex((previous) => (previous + 1) % items.length);
      }
      if (event.key === "ArrowLeft" && hasMultipleItems) {
        setActiveIndex((previous) => (previous - 1 + items.length) % items.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, hasMultipleItems, items.length]);

  const onImageError = (event) => {
    if (event.currentTarget.src.endsWith(FALLBACK_IMAGE)) return;
    event.currentTarget.src = FALLBACK_IMAGE;
    event.currentTarget.classList.add("gallery-image-fallback");
  };

  const showPrevious = () => {
    setActiveIndex((previous) => (previous - 1 + items.length) % items.length);
  };

  const showNext = () => {
    setActiveIndex((previous) => (previous + 1) % items.length);
  };

  return (
    <>
      <Header />
      <PageBanner title="Gallery" />
      <main className="main-content">
        <section className="page-gallery">
          <div className="container">
            <div className="section-title text-center">
              <h3>Farm Moments</h3>
              <h2>Snapshots from our daily operations and field activities</h2>
            </div>
            <div className="row page-gallery-box gallery-app-grid">
              {items.map((item, index) => (
                <div className="col-lg-4 col-md-6" key={item.id}>
                  <article className="photo-gallery gallery-card">
                    <button
                      type="button"
                      className="gallery-card__button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Open ${item.title}`}
                    >
                      <div className="gallery-card__media">
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          onError={onImageError}
                        />
                        <span className="gallery-card__index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="gallery-card__caption">
                        <h3>{item.title}</h3>
                        <p>{item.caption}</p>
                      </div>
                    </button>
                  </article>
                </div>
              ))}
            </div>

            {activeItem && (
              <div
                className="gallery-lightbox"
                role="dialog"
                aria-modal="true"
                aria-label={activeItem.title}
                onClick={() => setActiveIndex(null)}
              >
                <div
                  className="gallery-lightbox__content"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    className="gallery-lightbox__close"
                    onClick={() => setActiveIndex(null)}
                    aria-label="Close gallery item"
                  >
                    ×
                  </button>

                  <div className="gallery-lightbox__media">
                    <img src={activeItem.src} alt={activeItem.alt} onError={onImageError} />
                  </div>

                  <div className="gallery-lightbox__caption">
                    <h3>{activeItem.title}</h3>
                    <p>{activeItem.caption}</p>
                  </div>

                  {hasMultipleItems && (
                    <div className="gallery-lightbox__controls">
                      <button type="button" onClick={showPrevious}>
                        Previous
                      </button>
                      <button type="button" onClick={showNext}>
                        Next
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
