import StickerLabel from '../StickerLabel'

export default function VoyageHero({ data }) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${data.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-teal/50 to-teal/30" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Sticker labels */}
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
          <StickerLabel text="Voyage" color="coral" />
          <StickerLabel text="Immersion" color="teal" />
          <StickerLabel text="Japon" color="yellow" />
        </div>

        {/* Title */}
        <h1 className="font-heading font-extrabold text-white text-5xl md:text-7xl leading-tight mb-4">
          {data.destination}
        </h1>
        <p className="font-body text-white/90 text-xl md:text-2xl mb-10">
          {data.subtitle}
        </p>

        {/* Fact pills */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-10">
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
          className="inline-block bg-coral text-white font-body font-semibold px-10 py-4 rounded-full hover:bg-coral/90 transition-colors text-lg"
        >
          Réserver ma place
        </a>
      </div>
    </section>
  )
}
