import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";



const photos = [
  {
    id: 1,
    src: "/photos/foto1.jpg",
    alt: "Foto 1",
  },
  {
    id: 2,
    src: "/photos/foto2.jpg",
    alt: "Foto 2",
  },
  {
    id: 3,
    src: "/photos/foto3.jpg",
    alt: "Foto 3",
  },
  {
    id: 4,
    src: "/photos/foto4.jpg",
    alt: "Foto 4",
  },
];

export default function PhotoGallery() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const goTo = useCallback(
    (index, dir = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 400);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % photos.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + photos.length) % photos.length, "prev");
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>


      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap');

        .gallery-section {
          padding: 80px 20px;
          background: #faf8f5;
          text-align: center;
          font-family: 'Jost', sans-serif;
        }

        .gallery-label {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #b8a898;
          margin-bottom: 10px;
        }

        .gallery-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2rem, 5vw, 3rem);
          color: #4a3f35;
          margin: 0 0 12px 0;
          line-height: 1.1;
        }

        .gallery-title em {
          font-style: italic;
          color: #9c7c5e;
        }

        .gallery-divider {
          width: 40px;
          height: 1px;
          background: linear-gradient(to right, transparent, #c9a98a, transparent);
          margin: 0 auto 50px;
        }

        .carousel-wrapper {
          position: relative;
          max-width: 520px;
          margin: 0 auto;
        }

        .carousel-frame {
          position: relative;
          aspect-ratio: 4 / 5;
          border-radius: 2px;
          overflow: hidden;
          box-shadow:
            0 4px 6px rgba(0,0,0,0.04),
            0 20px 60px rgba(0,0,0,0.12);
        }

        .carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .carousel-img.slide-out-next {
          opacity: 0;
          transform: translateX(-30px);
        }

        .carousel-img.slide-out-prev {
          opacity: 0;
          transform: translateX(30px);
        }

        .carousel-img.slide-in {
          opacity: 1;
          transform: translateX(0);
        }

        /* Decorative corner accents */
        .carousel-frame::before,
        .carousel-frame::after {
          content: '';
          position: absolute;
          width: 30px;
          height: 30px;
          border-color: rgba(255,255,255,0.5);
          border-style: solid;
          z-index: 2;
        }
        .carousel-frame::before {
          top: 12px;
          left: 12px;
          border-width: 1px 0 0 1px;
        }
        .carousel-frame::after {
          bottom: 12px;
          right: 12px;
          border-width: 0 1px 1px 0;
        }

        /* Overlay gradient bottom */
        .carousel-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to top, rgba(0,0,0,0.18), transparent);
          pointer-events: none;
          z-index: 1;
        }

        /* Nav arrows */
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 42px;
          height: 42px;
          background: rgba(255,255,255,0.92);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          transition: background 0.2s, transform 0.2s;
          z-index: 3;
          color: #4a3f35;
        }

        .carousel-btn:hover {
          background: #fff;
          transform: translateY(-50%) scale(1.08);
        }

        .carousel-btn.prev { left: -20px; }
        .carousel-btn.next { right: -20px; }

        /* Dots */
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 22px;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #cdd8c7;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.3s, transform 0.3s;
        }

        .dot.active {
          background: #95A58D;
          transform: scale(1.3);
        }

        /* Counter */
        .carousel-counter {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          color: #95A58D;
          font-size: 0.9rem;
          margin-top: 14px;
          letter-spacing: 0.05em;
        }

        /* Placeholder if no image */
        .photo-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f0ebe4, #e8dfd5);
          color:#95A58D;
          gap: 12px;
        }

        .photo-placeholder svg {
          opacity: 0.4;
        }

        .photo-placeholder span {
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.7;
        }
      `}</style>




      <section id="fotos"  style={{ backgroundColor: "#F0F1EF" }} className="gallery-section">
<div
        className="container mx-auto px-4 py-5 relative z-10"
        style={{ maxWidth: "960px", margin: "0 auto" }}




        
      >


  {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h1
            className="text-4xl sm:text-5xl mb-2"
            style={{
              paddingTop: "20px",
              fontFamily: "Dancing Script",
              color: "#95A58D",
            }}
          >
           ......
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              margin: "2% 0 40px",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "180px",
                background: "rgba(149,165,141,0.45)",
              }}
            />
            <div
              style={{
                width: "7px",
                height: "7px",
                background: "rgba(149,165,141,0.6)",
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                height: "1px",
                width: "180px",
                background: "rgba(149,165,141,0.45)",
              }}
            />
          </div>
        </motion.div>











      </div>


  

        <div className="carousel-wrapper">
          <div className="carousel-frame">
            <img
              key={current}
              src={photos[current].src}
              alt={photos[current].alt}
              className={`carousel-img ${
                animating
                  ? direction === "next"
                    ? "slide-out-next"
                    : "slide-out-prev"
                  : "slide-in"
              }`}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            {/* Fallback placeholder shown if image fails */}
            <div className="photo-placeholder" style={{ display: "none", position: "absolute", inset: 0 }}>
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
              <span>Foto {current + 1}</span>
            </div>
            <div className="carousel-overlay" />
          </div>

          <button className="carousel-btn prev" onClick={prev} aria-label="Anterior">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button className="carousel-btn next" onClick={next} aria-label="Siguiente">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {photos.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              aria-label={`Foto ${i + 1}`}
            />
          ))}
        </div>

        <p className="carousel-counter">{current + 1} / {photos.length}</p>
      </section>
    </>
  );
}