import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StickerLabel from './StickerLabel'

const trips = [
  { creator: 'Nolwenn', destination: 'Japon', region: 'Tokyo & Kyoto', theme: 'Culture & Découverte', image: '/images/paysages/paysage_005.jpg', slug: 'japon-nolwenn-creme' },
  { creator: 'Lina Chkair', destination: 'Maroc', region: 'Essaouira & Atlas', theme: 'Surf & Culture', image: '/images/paysages/paysage_019.jpg' },
  { creator: 'Théo Mbeki', destination: 'Sénégal', region: 'Dakar & Casamance', theme: 'Musique & Gastronomie', image: '/images/paysages/paysage_001.jpg' },
  { creator: 'Camille Aubert', destination: 'Portugal', region: 'Lisbonne & Algarve', theme: 'Architecture & Slow life', image: '/images/paysages/paysage_005.jpg' },
  { creator: 'Yasmine Laâli', destination: 'Jordanie', region: 'Petra & Wadi Rum', theme: 'Désert & Histoire', image: '/images/paysages/paysage_038.jpeg' },
  { creator: 'Noé Girard', destination: 'Islande', region: 'Reykjavik & Highlands', theme: 'Photo & Nature', image: '/images/paysages/paysage_026.jpg' },
  { creator: 'Aïcha Traoré', destination: 'Éthiopie', region: 'Lalibela & Omo', theme: 'Cultures & Religions', image: '/images/paysages/paysage_034.jpeg' },
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
    <section ref={sectionRef} className="bg-teal relative" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full px-6 md:px-16 mb-10">
          <div className="mb-4">
            <StickerLabel text="Voyage" color="yellow" />
          </div>
          <h2 className="font-heading font-bold text-white text-3xl md:text-4xl lg:text-5xl">
            Nos prochains voyages
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
            {trips.map((trip, i) => {
              const CardWrapper = trip.slug ? Link : 'div'
              const wrapperProps = trip.slug
                ? { to: `/voyage/${trip.slug}` }
                : {}
              return (
                <CardWrapper
                  key={i}
                  {...wrapperProps}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg flex-shrink-0 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 block ${trip.slug ? 'cursor-pointer' : ''}`}
                  style={{ width: CARD_WIDTH }}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden group">
                    <img
                      src={trip.image}
                      alt={trip.destination}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-teal/20 group-hover:bg-teal/40 transition-colors duration-300" />
                    {!trip.slug && (
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-teal font-accent font-semibold text-xs px-3 py-1.5 rounded-full">
                        Bientôt disponible
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl text-teal">
                      {trip.destination}
                    </h3>
                    <p className="font-body text-gray-600 text-sm mt-1">
                      {trip.region}
                    </p>
                    <p className="font-body text-coral font-semibold text-sm mt-2">
                      avec {trip.creator}
                    </p>
                    <span className="inline-block bg-teal/10 text-teal px-3 py-1 rounded-full font-accent text-xs mt-3">
                      {trip.theme}
                    </span>
                  </div>
                </CardWrapper>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
