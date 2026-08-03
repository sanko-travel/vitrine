import { useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'

export default function VoyageItinerary({ data }) {
  const [openDay, setOpenDay] = useState(0)
  const ref = useScrollReveal()

  return (
    <section id="programme" className="bg-teal py-24 px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-white mb-4 text-center">
          Ton aventure, jour après jour
        </h2>
        <p className="reveal font-body text-white/80 text-lg text-center mb-14">
          {data.facts.duration} d'immersion
        </p>

        <div className="reveal flex flex-col gap-3">
          {data.itinerary.map((item, i) => {
            const isOpen = openDay === i
            return (
              <div
                key={i}
                className="border border-white/15 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenDay(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span className="font-heading font-bold text-coral text-sm flex-shrink-0">
                      J{item.day}
                    </span>
                    <span className="font-body font-semibold text-white text-sm md:text-base">
                      {item.title}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-coral flex-shrink-0 transition-transform duration-300 ${
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
                    <p className="font-body text-white/90 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    {item.accommodation && (
                      <p className="font-body text-white/60 text-xs mt-3 italic">
                        {item.accommodation}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <p className="font-body text-white/50 text-xs text-center mt-6 italic">
          L'ordre des activités ainsi que la durée des transferts sont donnés à titre indicatif.
        </p>
      </div>
    </section>
  )
}
