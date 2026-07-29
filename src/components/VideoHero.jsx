import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const videos = [
  '/videos/campfire_group.mp4',    // silhouettes communauté autour du feu
  '/videos/marshmallows_fire.mp4', // voyageurs autour d'un feu, moment authentique
  '/videos/meadow.mp4',            // nature, prairie
  '/videos/village_coast.mp4',     // petit village côtier, chez l'habitant
  '/videos/group_campfire.mp4',    // groupe en plein air
  '/videos/forest_waterfall.mp4',  // nature, forêt
]

const words = ['Voyages.', "D'exception.", 'En communauté.']

export default function VideoHero() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  // Cycle words every 2s with fade
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIndex(prev => (prev + 1) % words.length)
        setVisible(true)
      }, 400)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  // Cycle videos every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo(prev => (prev + 1) % videos.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

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

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-dark/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 select-none">
        <p className="font-body text-white/60 text-xs sm:text-sm tracking-widest uppercase mb-4 md:mb-6">
          Agence de voyage · Depuis 2022
        </p>

        {/* Animated word */}
        <div className="h-16 sm:h-24 md:h-40 flex items-start">
          <span
            className="font-heading font-extrabold text-white leading-none"
            style={{
              fontSize: 'clamp(2.2rem, 8vw, 8rem)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            {words[wordIndex]}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-10">
          <a
            href="#qui-sommes-nous"
            className="bg-orange text-white font-body font-semibold text-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-orange/90 transition-colors text-sm sm:text-base"
          >
            Découvrir Sanko
          </a>
          <Link
            to="/creer-mon-voyage"
            className="border-2 border-white text-white font-body font-semibold text-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-blue-dark transition-colors text-sm sm:text-base"
          >
            Créer mon propre voyage
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
