import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import galleryItems from "../data/galleryItems.json";

const FALLBACK_IMAGE = "/vite.svg";
const GALLERY_ITEMS = galleryItems;

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const items = GALLERY_ITEMS;
  const hasMultipleItems = items.length > 1;
  const activeItem = activeIndex === null ? null : items[activeIndex];

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const openLightbox = (index) => {
    setActiveIndex(index);
  };

  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  const showPrevious = () => {
    setActiveIndex((previous) => (previous - 1 + items.length) % items.length);
  };

  const showNext = () => {
    setActiveIndex((previous) => (previous + 1) % items.length);
  };

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight" && hasMultipleItems) {
        showNext();
      }
      if (event.key === "ArrowLeft" && hasMultipleItems) {
        showPrevious();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, hasMultipleItems, items.length]);

  const onImageError = (event) => {
    if (event.currentTarget.src.endsWith(FALLBACK_IMAGE)) return;
    event.currentTarget.src = FALLBACK_IMAGE;
    event.currentTarget.classList.add("gallery-image-fallback");
  };

  const lightbox = activeItem
    ? createPortal(
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-lightbox-title"
          onClick={closeLightbox}
        >
          <div
            className="gallery-lightbox__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-lightbox__close"
              onClick={closeLightbox}
              aria-label="Close gallery item"
            >
              ×
            </button>

            <div className="gallery-lightbox__header">
              <p className="gallery-lightbox__eyebrow">Farm gallery</p>
              <p className="gallery-lightbox__status">
                {activeIndex + 1} / {items.length}
              </p>
            </div>

            <div className="gallery-lightbox__media-frame">
              {hasMultipleItems && (
                <button
                  type="button"
                  className="gallery-lightbox__nav gallery-lightbox__nav--prev"
                  onClick={showPrevious}
                  aria-label="Show previous gallery image"
                >
                  ‹
                </button>
              )}

              <div className="gallery-lightbox__media">
                <img src={activeItem.src} alt={activeItem.alt} onError={onImageError} />
              </div>

              {hasMultipleItems && (
                <button
                  type="button"
                  className="gallery-lightbox__nav gallery-lightbox__nav--next"
                  onClick={showNext}
                  aria-label="Show next gallery image"
                >
                  ›
                </button>
              )}
            </div>

            <div className="gallery-lightbox__caption">
              <h3 id="gallery-lightbox-title">{activeItem.title}</h3>
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

            {hasMultipleItems && (
              <div className="gallery-lightbox__thumbs" aria-label="Gallery thumbnails">
                {items.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`gallery-lightbox__thumb${
                      index === activeIndex ? " is-active" : ""
                    }`}
                    onClick={() => goToIndex(index)}
                    aria-label={`View ${item.title}`}
                    aria-pressed={index === activeIndex}
                  >
                    <img src={item.src} alt={item.alt} onError={onImageError} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>,
        document.body
      )
    : null;

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
                    <div className="gallery-card__media">
                      <button
                        type="button"
                        className="gallery-card__trigger"
                        onClick={() => openLightbox(index)}
                        aria-label={`Open ${item.title} in gallery modal`}
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          onError={onImageError}
                        />
                        <span className="gallery-card__index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="gallery-card__overlay">Open gallery</span>
                      </button>
                    </div>
                    <div className="gallery-card__caption">
                      <h3>{item.title}</h3>
                      <p>{item.caption}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {lightbox}
    </>
  );
}
