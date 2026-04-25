import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const carouselImages = [
  {
    src: '/carousel-1.jpg',
    alt: 'Healthy Farms, Healthy Lives',
    title: 'Healthy Farms, Healthy Lives',
    description: 'Discover trusted farm produce grown with care, consistency, and sustainable methods.',
  },
  {
    src: '/carousel-2.jpg',
    alt: 'Field to Table Freshness',
    title: 'Field to Table Freshness',
    description: 'Hermes Farms partners with homes and stores to deliver nutritious food directly from our fields.',
  },
  {
    src: '/carousel-3.jpg',
    alt: 'Sustainable Agriculture',
    title: 'Sustainable Agriculture',
    description: 'We combine modern farming practices with traditional care to ensure the highest quality produce.',
  },
  {
    src: '/carousel-4.jpg',
    alt: 'Trusted Farm Partners',
    title: 'Your Trusted Agricultural Partner',
    description: 'Join our community of satisfied homes, stores, and distributors across the region.',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const currentImage = carouselImages[currentIndex];

  const slideVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="hero-carousel" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Image Container */}
      <div className="hero-carousel__image-container" style={{ position: 'absolute', inset: 0 }}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="hero-carousel__slide"
            style={{ position: 'absolute', inset: 0 }}
          >
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "linear" }}
              src={currentImage.src}
              alt={currentImage.alt}
              className="hero-carousel__image"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="hero-carousel__overlay" style={{ position: 'absolute', inset: 0 }}></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content overlayed directly over the carousel */}
      <div
        className="hero-carousel__content"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          zIndex: 10,
          pointerEvents: 'none',
          paddingTop: '450px',
          color: '#FFFFFF'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="container hero-carousel__inner"
            style={{
              pointerEvents: 'auto',
              color: '#FFFFFF'
            }}
          >
            <h1 className="hero-carousel__title" style={{ color: '#FFFFFF' }}>
              {currentImage.title}
            </h1>
            <p className="hero-carousel__description" style={{ color: '#FFFFFF' }}>
              {currentImage.description}
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link to="/contact" className="btn-default btn-highlighted px-5 py-3 fs-5">
                Contact Our Team
              </Link>
              <Link to="/services" className="btn-default btn-border px-5 py-3 fs-5">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
