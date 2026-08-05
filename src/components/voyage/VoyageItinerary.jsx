import { useEffect, useRef, useCallback, useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import StickerLabel from '../StickerLabel'

const dayColors = ['teal', 'coral', 'yellow']

function DayItem({ item, index, isOpen, onClick, onMapClick, hasMap, itemRef }) {
  return (
    <div
      ref={itemRef}
      data-day={item.day}
      className="border border-teal/15 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => onClick(item.day)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-teal/5 transition-colors"
      >
        <div className="flex items-center gap-4 pr-4">
          <StickerLabel
            text={`J${item.day}`}
            color={dayColors[index % dayColors.length]}
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
            hasMap ? (
              <button
                onClick={() => onMapClick(item.day)}
                className="font-body text-gray-500 text-xs mt-3 italic inline-flex items-center gap-1.5 hover:text-coral transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {item.accommodation}
              </button>
            ) : (
              <p className="font-body text-gray-500 text-xs mt-3 italic">
                {item.accommodation}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default function VoyageItinerary({ data, activeDay, onDayChange, mapSlot }) {
  const ref = useScrollReveal()
  const itemRefs = useRef([])
  const mapRef = useRef(null)
  const [openDay, setOpenDay] = useState(null)

  // Sync from activeDay (when a marker is clicked on the map)
  useEffect(() => {
    if (activeDay !== null) {
      setOpenDay(activeDay)
      const idx = data.itinerary.findIndex((item) => item.day === activeDay)
      if (idx !== -1) {
        const el = itemRefs.current[idx]
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }, 100)
        }
      }
    }
  }, [activeDay, data.itinerary])

  const handleClick = useCallback(
    (dayNum) => {
      const newDay = openDay === dayNum ? null : dayNum
      setOpenDay(newDay)
      onDayChange(newDay)
    },
    [openDay, onDayChange]
  )

  const handleMapClick = useCallback(
    (dayNum) => {
      onDayChange(dayNum)
      if (mapRef.current) {
        mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    },
    [onDayChange]
  )

  return (
    <section id="programme" className="bg-white py-24 px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-teal mb-4 text-center tracking-tight">
          Ton aventure, jour après jour
        </h2>
        <p className="reveal font-body text-gray-600 text-lg text-center mb-14">
          <span className="inline-block" style={{ transform: 'rotate(-2deg)' }}><StickerLabel text={data.facts.duration} color="yellow" style={{ fontSize: 'inherit', padding: '0.05em 0.35em' }} /></span> d'immersion
        </p>

        {mapSlot && <div ref={mapRef} className="reveal mb-10">{mapSlot}</div>}

        <div className="reveal">
          <div className="flex flex-col gap-3">
            {data.itinerary.map((item, i) => (
              <DayItem
                key={i}
                item={item}
                index={i}
                isOpen={openDay === item.day}
                onClick={handleClick}
                onMapClick={handleMapClick}
                hasMap={!!mapSlot}
                itemRef={(el) => (itemRefs.current[i] = el)}
              />
            ))}
          </div>
        </div>

        <p className="font-body text-gray-500 text-xs text-center mt-6 italic">
          L'ordre des activités ainsi que la durée des transferts sont donnés à titre indicatif.
        </p>
      </div>
    </section>
  )
}
