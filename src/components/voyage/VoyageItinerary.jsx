import { useEffect, useRef, useCallback } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import StickerLabel from '../StickerLabel'

const dayColors = ['teal', 'coral', 'yellow']

export default function VoyageItinerary({ data, activeDay, onDayChange }) {
  const ref = useScrollReveal()
  const itemRefs = useRef([])

  const openDay = activeDay
  const setOpenDay = useCallback(
    (dayNum) => {
      onDayChange(dayNum)
    },
    [onDayChange]
  )

  useEffect(() => {
    if (activeDay === null) return
    const idx = data.itinerary.findIndex((item) => item.day === activeDay)
    if (idx === -1) return
    const el = itemRefs.current[idx]
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    }
  }, [activeDay, data.itinerary])

  return (
    <section id="programme" className="bg-white py-24 px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-teal mb-4 text-center tracking-tight">
          Ton aventure, jour après jour
        </h2>
        <p className="reveal font-body text-gray-600 text-lg text-center mb-14">
          {data.facts.duration} d'immersion
        </p>

        <div className="reveal from-left flex flex-col gap-3">
          {data.itinerary.map((item, i) => {
            const isOpen = openDay === item.day
            return (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                className="border border-teal/15 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenDay(isOpen ? null : item.day)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-teal/5 transition-colors"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <StickerLabel
                      text={`J${item.day}`}
                      color={dayColors[i % dayColors.length]}
                      size="xs"
                    />
                    <span className="font-body font-semibold text-teal text-sm md:text-base">
                      {item.title}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-teal flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
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
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className={`px-6 pb-5 ${isOpen ? 'ml-4' : ''}`}>
                    <p className="font-body text-gray-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    {item.accommodation && (
                      <p className="font-body text-gray-500 text-xs mt-3 italic">
                        {item.accommodation}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <p className="font-body text-gray-500 text-xs text-center mt-6 italic">
          L'ordre des activités ainsi que la durée des transferts sont donnés à titre indicatif.
        </p>
      </div>
    </section>
  )
}
