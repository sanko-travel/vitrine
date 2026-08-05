import { useState, useEffect } from 'react'
import StickerLabel from '../StickerLabel'

export default function VoyageHero({ data }) {
  const folder = data.heroVideoFolder
  const [videos, setVideos] = useState([])
  const hasVideos = videos.length > 0
  const [currentVideo, setCurrentVideo] = useState(0)

  // Probe for numbered videos (01.mp4, 02.mp4, ...) in the folder
  useEffect(() => {
    if (!folder) return
    let cancelled = false
    async function probe() {
      const found = []
      for (let i = 1; i <= 30; i++) {
        const path = `${folder}${String(i).padStart(2, '0')}.mp4`
        try {
          const res = await fetch(path, { method: 'HEAD' })
          if (res.ok) found.push(path)
          else break
        } catch {
          break
        }
      }
      if (!cancelled) setVideos(found)
    }
    probe()
    return () => { cancelled = true }
  }, [folder])

  useEffect(() => {
    if (!hasVideos) return
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [hasVideos, videos.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: cycling videos or static image */}
      {hasVideos ? (
        videos.map((src, i) => (
          <video
            key={src}
            src={src}
            poster={data.heroImage}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === currentVideo ? 1 : 0 }}
          />
        ))
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.heroImage})` }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-teal/50 to-teal/30" />

      <div className="hero-content relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Sticker labels */}
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
          <StickerLabel text="Voyage" color="coral" style={{ animationDelay: '1.2s', transform: 'rotate(-3deg)' }} />
          <StickerLabel text="Immersion" color="teal" style={{ animationDelay: '1.35s', transform: 'rotate(2deg)' }} />
          <StickerLabel text={data.destination} color="yellow" style={{ animationDelay: '1.5s', transform: 'rotate(-1.5deg)' }} />
        </div>

        {/* Title */}
        <h1 className="hero-fade-up hero-d1 font-heading font-extrabold text-white text-5xl md:text-7xl leading-tight tracking-tight mb-4">
          {data.destination}
        </h1>
        <p className="hero-fade-up hero-d2 font-body text-white/90 text-xl md:text-2xl mb-10">
          {data.subtitle}
        </p>

        {/* Fact pills */}
        <div className="hero-fade-up hero-d3 flex items-center justify-center gap-3 flex-wrap mb-10">
          <span className="bg-white/20 backdrop-blur-sm text-white font-body text-sm px-4 py-2 rounded-full">
            {data.facts.dates}
          </span>
          <span className="bg-white/20 backdrop-blur-sm text-white font-body text-sm px-4 py-2 rounded-full">
            {data.facts.duration}
          </span>
          <span className="bg-white/20 backdrop-blur-sm text-white font-body text-sm px-4 py-2 rounded-full">
            {data.facts.groupNote}
          </span>
        </div>

        {/* CTA */}
        <a
          href="#reservation"
          className="hero-fade-up hero-d3 inline-block bg-coral text-white font-body font-semibold px-10 py-4 rounded-full hover:bg-coral/90 transition-colors text-lg"
        >
          Réserver ma place
        </a>
      </div>
    </section>
  )
}
