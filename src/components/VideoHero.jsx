import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StickerLabel from "./StickerLabel";

const videos = [
  "/videos/campfire_group.mp4",
  "/videos/marshmallows_fire.mp4",
  "/videos/meadow.mp4",
  "/videos/village_coast.mp4",
  "/videos/group_campfire.mp4",
  "/videos/forest_waterfall.mp4",
];

const words = ["Voyages.", "D'Exception.", "En communauté."];

// ── Stickers positionnés autour du titre (style charte "London") ──
//
// Chaque sticker a des props desktop ET mobile.
// Pour repositionner : modifier top/left/right/bottom (px ou %).
// Pour tourner :        modifier rotate (en deg).
// Pour la taille :      modifier size ('xs','sm','md','lg','xl','2xl' ou px).
//
const heroStickers = [
  {
    text: "Impact",
    color: "teal",
    // Desktop
    size: "xl",
    top: "-16px",
    left: "-5%",
    rotate: "-15deg",
    // Mobile
    mobile: { size: "sm", top: "-22px", left: "-2%", rotate: "-10deg" },
  },
  {
    text: "Voyage",
    color: "yellow",
    size: "xl",
    bottom: "-10px",
    left: "25%",
    rotate: "3deg",
    mobile: { size: "sm", bottom: "-8px", left: "35%", rotate: "3deg" },
  },
  {
    text: "Communauté",
    color: "coral",
    size: "xl",
    top: "-30px",
    left: "50%",
    rotate: "8deg",
    mobile: { size: "sm", top: "-18px", left: "60%", rotate: "8deg" },
  },
];

export default function VideoHero() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  // Cycle words every 2s with fade
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  // Cycle videos every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Videos */}
      {videos.map((src, i) => (
        <video
          key={src}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: i === currentVideo ? 1 : 0 }}
        />
      ))}

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-teal/50 to-teal/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 select-none">
        <p className="font-body text-white/80 text-[10px] sm:text-sm tracking-widest uppercase mb-8 sm:mb-4 md:mb-6">
          Agence de voyage · Depuis 2022
        </p>

        {/* Animated word + stickers behind the title */}
        <div className="relative h-16 sm:h-24 md:h-40 flex items-start">
          {/* Stickers derrière le titre — modifier heroStickers[] en haut du fichier */}
          {heroStickers.map((s) => {
            const m = isMobile && s.mobile ? s.mobile : {};
            return (
              <StickerLabel
                key={s.text}
                text={s.text}
                color={s.color}
                size={m.size || s.size}
                style={{
                  position: "absolute",
                  zIndex: 0,
                  top: m.top ?? s.top,
                  bottom: m.bottom ?? s.bottom,
                  left: m.left ?? s.left,
                  right: m.right ?? s.right,
                  transform: `rotate(${m.rotate || s.rotate})`,
                }}
              />
            );
          })}

          <span
            className="font-heading font-extrabold text-white leading-none relative"
            style={{
              zIndex: 1,
              fontSize: "clamp(2.2rem, 8vw, 8rem)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            {words[wordIndex]}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-10">
          <a
            href="#qui-sommes-nous"
            className="text-white font-body font-semibold text-center px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base"
            style={{ backgroundColor: "#025961" }}
          >
            Découvrir Sanko
          </a>
          <Link
            to="/creer-mon-voyage"
            className="border-2 border-white text-white font-body font-semibold text-center px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-teal transition-colors text-sm sm:text-base"
          >
            Je suis créateur
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document
            .getElementById("intro")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce cursor-pointer hover:text-white/90 transition-colors"
        aria-label="Défiler vers le bas"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </section>
  );
}
