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

export default function VideoHero() {
  const [currentVideo, setCurrentVideo] = useState(0);

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
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <StickerLabel text="Voyage" color="teal" className="mx-auto mb-6" />
        <p className="font-body text-white/90 font-semibold tracking-widest text-sm uppercase mb-4">
          Agence de voyage · Depuis 2022
        </p>
        <h1 className="font-heading font-extrabold text-white text-4xl md:text-6xl leading-tight mb-6">
          Des voyages d'exception en communauté
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#qui-sommes-nous"
            className="bg-coral text-white font-body font-semibold text-center px-8 py-4 rounded-full hover:bg-coral/90 transition-colors text-base"
          >
            Découvrir Sanko
          </a>
          <Link
            to="/creer-mon-voyage"
            className="border-2 border-white text-white font-body font-semibold text-center px-8 py-4 rounded-full hover:bg-white hover:text-teal transition-colors text-base"
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
