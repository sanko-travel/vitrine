import { useRef, useEffect, useState } from 'react'
import StickerLabel from './StickerLabel'

const STATUS_STYLES = {
  'à venir': 'bg-coral text-white',
  'en cours': 'bg-yellow text-white',
  'passé': 'bg-white/30 text-white',
}

const trips = [
  // --- Passé ---
  { creator: '@jojo_wanderlust_', destination: 'Jordanie', region: 'Pétra & Wadi Rum', theme: 'Histoire & Aventure', image: '/images/paysages/paysage_027.jpeg', status: 'passé', creatorImg: '/images/creators/jojo_wanderlust_.jpg' },
  { creator: '@perrine_llc', destination: 'Finlande', region: 'Laponie', theme: 'Nature & Aurores', image: '/images/paysages/paysage_009.jpg', status: 'passé', creatorImg: '/images/creators/perrine_llc.jpg' },
  { creator: '@lepetitmondedecaroline', destination: 'Maroc', region: 'Atlas & Médina', theme: 'Culture & Partage', image: '/images/paysages/paysage_013.jpg', status: 'passé', creatorImg: '/images/creators/lepetitmondedecaroline.jpg' },
  { creator: '@elo_its_me', destination: 'Inde', region: 'Rajasthan & Kerala', theme: 'Immersion culturelle', image: '/images/paysages/inde.jpg', status: 'passé', creatorImg: '/images/creators/elo_its_me.jpg' },
  // --- En cours ---
  { creator: '@yonasouffir', destination: 'USA', region: 'Côte Ouest', theme: 'Road Trip', image: '/images/paysages/usa.jpg', status: 'en cours', creatorImg: '/images/creators/yonasouffir.jpg' },
  // --- À venir ---
  { creator: '@tinadventure_', destination: 'Croatie', region: 'Côte dalmate', theme: 'Immersion en Dalmatie', image: '/images/paysages/paysage_019.jpg', status: 'à venir', creatorImg: '/images/creators/tinadventure_.jpg' },
  { creator: '@guslegus', destination: 'Sur la trace des Loups', region: 'France', theme: 'Nature & Exploration', image: '/images/paysages/paysage_034.jpeg', status: 'à venir', creatorImg: '/images/creators/guslegus.jpg' },
  { creator: '@laulevy', destination: 'France', region: 'Aventure locale', theme: 'Découverte & Partage', image: '/images/paysages/paysage_006.jpg', status: 'à venir', creatorImg: '/images/creators/laulevy.jpg' },
  { creator: '@deavy.b', destination: 'Grèce', region: 'Îles & Côtes', theme: 'Grèce idyllique', image: '/images/paysages/grece.jpg', status: 'à venir', creatorImg: '/images/creators/deavy_b.jpg' },
  { creator: '@aurore.bay', destination: 'Écosse', region: 'Édimbourg & Highlands', theme: 'Culture & Nature', image: '/images/paysages/paysage_005.jpg', status: 'à venir', creatorImg: '/images/creators/aurore_bay.jpg' },
  { creator: '@jojo_wanderlust_', destination: 'Égypte', region: 'Nil & Désert', theme: 'Histoire & Mystère', image: '/images/paysages/paysage_038.jpeg', status: 'à venir', creatorImg: '/images/creators/jojo_wanderlust_.jpg' },
  { creator: '@nolwenn_creme', destination: 'Japon', region: 'Tokyo & Kyoto', theme: 'Culture & Découverte', image: '/images/paysages/japon.jpg', status: 'à venir', creatorImg: '/images/creators/nolwenn_creme.jpg' },
  { creator: '@juliettecolletoff', destination: 'Népal', region: 'Himalaya & Vallées', theme: 'Immersion népalaise', image: '/images/paysages/paysage_026.jpg', status: 'à venir', creatorImg: '/images/creators/juliettecolletoff.jpg' },
  { creator: '@elo_its_me', destination: 'Inde', region: 'Nouvelle aventure', theme: 'Immersion culturelle', image: '/images/paysages/inde.jpg', status: 'à venir', creatorImg: '/images/creators/elo_its_me.jpg' },
  { creator: '@elo_its_me', destination: 'Sri Lanka', region: 'Côtes & Plantations', theme: 'Nature & Découverte', image: '/images/paysages/paysage_015.jpg', status: 'à venir', creatorImg: '/images/creators/elo_its_me.jpg' },
]

const CARD_WIDTH = 320
const GAP = 24

export default function DestinationsGrid() {
  const sectionRef = useRef(null)
  const rowRef = useRef(null)
  const wrapperRef = useRef(null)
  const [totalWidth, setTotalWidth] = useState(0)

  useEffect(() => {
    const update = () => {
      setTotalWidth(trips.length * CARD_WIDTH + (trips.length - 1) * GAP)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    const row = rowRef.current
    const wrapper = wrapperRef.current
    if (!section || !row || !wrapper) return

    const onScroll = () => {
      const { top, height } = section.getBoundingClientRect()
      const scrollable = height - window.innerHeight
      if (scrollable <= 0) return
      const p = Math.max(0, Math.min(1, -top / scrollable))
      const maxTranslate = totalWidth - wrapper.clientWidth
      row.style.transform = `translateX(-${p * Math.max(0, maxTranslate)}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [totalWidth])

  return (
    <section id="destinations" ref={sectionRef} className="bg-teal relative" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full px-6 md:px-16 mb-10">
          <div className="mb-4">
            <StickerLabel text="Voyage" color="yellow" />
          </div>
          <h2 className="font-heading font-bold text-white text-3xl md:text-4xl lg:text-5xl">
            Nos voyages
          </h2>
        </div>

        <div
          ref={wrapperRef}
          className="max-w-5xl mx-auto w-full px-6 md:px-16 overflow-hidden"
        >
          <div
            ref={rowRef}
            className="flex"
            style={{
              width: totalWidth || '100%',
              gap: GAP,
              willChange: 'transform',
            }}
          >
            {trips.map((trip, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg flex-shrink-0 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
                style={{ width: CARD_WIDTH }}
              >
                {/* Image destination avec nom incrusté */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.destination}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient sombre en haut pour le statut, fondu vers blanc en bas */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent via-40% to-white" />
                  {/* Pastille statut */}
                  <span className={`absolute top-3 right-3 px-3 py-1 rounded-full font-accent font-semibold text-xs uppercase tracking-wide ${STATUS_STYLES[trip.status]}`}>
                    {trip.status}
                  </span>
                  {/* Destination sur l'image */}
                  <div className="absolute bottom-6 left-4 right-4">
                    <h3 className="font-heading font-bold text-2xl text-teal leading-tight">
                      {trip.destination}
                    </h3>
                    <p className="font-body text-gray-600 text-sm mt-0.5">
                      {trip.region}
                    </p>
                  </div>
                </div>

                {/* Section créateur sur fond blanc */}
                <div className="px-4 pb-4 -mt-1 flex items-center gap-3">
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <span className="absolute inset-0 rounded-full bg-teal flex items-center justify-center text-white text-xs font-bold">
                      {trip.creator.replace('@', '').charAt(0).toUpperCase()}
                    </span>
                    <img
                      src={trip.creatorImg}
                      alt={trip.creator}
                      className="absolute inset-0 w-10 h-10 rounded-full object-cover ring-2 ring-teal/20"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  </div>
                  <p className="font-body text-coral font-semibold text-sm truncate min-w-0">
                    {trip.creator}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
