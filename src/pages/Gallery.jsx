import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Lightbox plugins
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import galleryItems from "../data/galleryItems.json";

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  // Map gallery items to PhotoAlbum format
  const photos = galleryItems.map((item) => {
    const isVideo = item.type === "video";
    const thumbSrc = !isVideo ? item.src.replace("/gallery/", "/gallery/thumbs/") : item.src;
    const fullSrc = item.src;

    return {
      src: thumbSrc, // PhotoAlbum uses this for grid
      fullSrc: fullSrc, // Lightbox uses this for full view
      // For videos in the filmstrip, use a fallback image or a dedicated video thumb if available
      thumbnail: isVideo ? "/gallery/thumbs/image-1.jpg" : thumbSrc, 
      width: 1, // Grid aspect ratio
      height: 1,
      realWidth: 1080, // Real dimensions for lightbox
      realHeight: 720,
      title: item.title,
      description: item.caption,
      type: item.type || "image",
      key: item.id,
      sources: isVideo ? [{ src: item.src, type: "video/mp4" }] : undefined,
    };
  });

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
              <p className="mt-3">
                Experience the beauty of agriculture through our lens. From field preparation to the final harvest.
              </p>
            </div>

            <div className="gallery-wrapper" style={{ padding: "40px 0" }}>
              <PhotoAlbum
                layout="rows" // Rows with fixed height + square width = uniform
                photos={photos}
                targetRowHeight={300}
                spacing={20}
                padding={0}
                onClick={({ index }) => setIndex(index)}
                renderPhoto={({ photo, wrapperStyle }) => {
                  return (
                    <div 
                      style={{ ...wrapperStyle, cursor: "pointer", borderRadius: "16px", overflow: "hidden" }}
                      className="gallery-item-hover"
                    >
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        {photo.type === "video" ? (
                          <video 
                            src={photo.src} 
                            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                            muted
                            playsInline
                          />
                        ) : (
                          <img 
                            src={photo.src} // Now uses the thumbnail (thumbSrc)
                            alt={photo.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                          />
                        )}
                        
                        {photo.type === "video" && (
                          <div className="video-icon-overlay">
                            <i className="fa-solid fa-play"></i>
                          </div>
                        )}
                        
                        <div className="gallery-overlay">
                          <h4>{photo.title}</h4>
                          <p>{photo.type === "video" ? "Video" : "Photo"}</p>
                        </div>
                      </div>
                    </div>
                  );
                }}
              />
            </div>
          </div>
        </section>
      </main>

      <Lightbox
        slides={photos.map((p) => ({
          ...p,
          src: p.fullSrc, // Lightbox uses full resolution
          width: p.realWidth, // Use 1080 instead of 1 to fix visibility
          height: p.realHeight,
        }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions, Thumbnails, Zoom, Video]}
        captions={{ showTextUnderlay: true }}
      />

      <Footer />

      <style>{`
        /* Force PhotoAlbum into flex layout for columns */
        .react-photo-album {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          justify-content: space-between !important;
        }
        .react-photo-album--column {
          flex: 1 !important;
          min-width: 0 !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 20px !important;
        }

        .gallery-item-hover {
          position: relative;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .gallery-item-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.12);
        }
        
        .gallery-item-hover .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 70%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 25px;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 2;
        }
        .gallery-item-hover:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-overlay h4 {
          color: #fff;
          margin: 0;
          font-size: 1.1rem;
          font-weight: 700;
          transform: translateY(15px);
          transition: transform 0.4s ease;
        }
        .gallery-overlay p {
          color: rgba(255,255,255,0.8);
          font-size: 0.75rem;
          margin: 6px 0 0;
          text-transform: uppercase;
          letter-spacing: 2px;
          transform: translateY(15px);
          transition: transform 0.4s ease 0.1s;
        }
        .gallery-item-hover:hover .gallery-overlay h4,
        .gallery-item-hover:hover .gallery-overlay p {
          transform: translateY(0);
        }

        .video-icon-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.15);
          color: #fff;
          font-size: 2.5rem;
          transition: background 0.3s ease;
          z-index: 1;
        }
        .gallery-item-hover:hover .video-icon-overlay {
          background: rgba(0,0,0,0.3);
        }

        .react-photo-album--photo {
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
          border-radius: inherit;
        }
        .gallery-item-hover:hover .react-photo-album--photo {
          transform: scale(1.08);
        }
        
        @media (max-width: 768px) {
          .react-photo-album {
            gap: 15px !important;
          }
          .gallery-overlay h4 { font-size: 1rem; }
        }
      `}</style>
    </>
  );
}
