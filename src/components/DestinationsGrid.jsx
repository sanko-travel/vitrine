import { useRef, useEffect, useState } from 'react'

const VISIBLE_COLS = 6
const TOTAL_COLS = 15
const ROWS = 5
const GAP = 14

const gridItems = [
  // Section A (cols 1-8)
  { type: 'img', name: 'Jordanie',  img: '/images/paysages/paysage_038.jpeg', row: '1/2', col: '1/4' },
  { type: 'img', name: 'Finlande',  img: '/images/paysages/paysage_026.jpg',  row: '1/2', col: '4/6' },
  { type: 'color', color: 'bg-yellow',      row: '1/3', col: '6/7' },
  { type: 'img', name: 'Grèce',     img: '/images/paysages/grece.jpg',        row: '1/3', col: '7/9' },

  { type: 'color', color: 'bg-teal',   row: '2/3', col: '1/3' },
  { type: 'img', name: 'USA',       img: '/images/paysages/usa.jpg',          row: '2/4', col: '3/6' },

  { type: 'img', name: 'Écosse',    img: '/images/paysages/paysage_011.jpg',  row: '3/5', col: '1/3' },
  { type: 'color', color: 'bg-coral',      row: '3/4', col: '6/9' },

  { type: 'color', color: 'bg-teal',  row: '4/5', col: '3/4' },
  { type: 'color', color: 'bg-mint',        row: '4/5', col: '4/5' },
  { type: 'img', name: 'Japon',     img: '/images/paysages/japon.jpg',        row: '4/6', col: '5/7' },
  { type: 'img', name: 'Maroc',     img: '/images/paysages/paysage_019.jpg',  row: '4/6', col: '7/9' },

  { type: 'img', name: 'Inde',      img: '/images/paysages/inde.jpg',         row: '5/6', col: '1/3' },
  { type: 'img', name: 'Croatie',   img: '/images/paysages/paysage_024.jpg',  row: '5/6', col: '3/5' },

  // Section B (cols 9-15)
  { type: 'img', name: 'Népal',     img: '/images/paysages/paysage_034.jpeg', row: '1/3', col: '9/12' },
  { type: 'color', color: 'bg-salmon',      row: '1/3', col: '12/13' },
  { type: 'img', name: 'Sri Lanka', img: '/images/paysages/paysage_035.jpeg', row: '1/3', col: '13/16' },

  { type: 'img', name: 'France',    img: '/images/paysages/paysage_005.jpg',  row: '3/5', col: '9/11' },
  { type: 'img', name: 'Égypte',    img: '/images/paysages/paysage_029.jpeg', row: '3/4', col: '11/13' },
  { type: 'color', color: 'bg-blue-gray',   row: '3/5', col: '13/14' },
  { type: 'img', name: 'Italie',    img: '/images/paysages/paysage_040.jpeg', row: '3/5', col: '14/16' },

  { type: 'color', color: 'bg-green-light', row: '4/5', col: '11/12' },
  { type: 'color', color: 'bg-yellow-light', row: '4/5', col: '12/13' },

  { type: 'img', name: 'Écosse',    img: '/images/paysages/paysage_011.jpg',  row: '5/6', col: '9/11' },
  { type: 'color', color: 'bg-coral',      row: '5/6', col: '11/12' },
  { type: 'img', name: 'Jordanie',  img: '/images/paysages/paysage_038.jpeg', row: '5/6', col: '12/16' },
]

export default function DestinationsGrid() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)
  const wrapperRef = useRef(null)
  const [gridWidth, setGridWidth] = useState(0)

  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current) return
      const container = wrapperRef.current.clientWidth
      const colW = (container - (VISIBLE_COLS - 1) * GAP) / VISIBLE_COLS
      setGridWidth(TOTAL_COLS * colW + (TOTAL_COLS - 1) * GAP)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    const grid = gridRef.current
    const wrapper = wrapperRef.current
    if (!section || !grid || !wrapper) return

    const onScroll = () => {
      const { top, height } = section.getBoundingClientRect()
      const scrollable = height - window.innerHeight
      if (scrollable <= 0) return
      const p = Math.max(0, Math.min(1, -top / scrollable))
      const maxTranslate = grid.scrollWidth - wrapper.clientWidth
      grid.style.transform = `translateX(-${p * Math.max(0, maxTranslate)}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [gridWidth])

  return (
    <section ref={sectionRef} className="bg-beige relative" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full px-6 md:px-16 mb-8">
          <h2 className="font-heading font-extrabold text-teal text-3xl md:text-5xl leading-relaxed md:leading-relaxed">
            Déjà{' '}
            <span className="inline-block font-accent font-semibold text-base md:text-lg bg-teal text-white px-4 py-1.5 rounded-full rotate-1">
              14 pays
            </span>{' '}
            explorés
          </h2>
        </div>

        <div
          ref={wrapperRef}
          className="max-w-5xl mx-auto w-full px-6 md:px-16 overflow-hidden"
        >
          <div
            ref={gridRef}
            className="grid"
            style={{
              width: gridWidth || '100%',
              height: 'calc(100vh - 180px)',
              maxHeight: 650,
              gridTemplateRows: `repeat(${ROWS}, 1fr)`,
              gridTemplateColumns: `repeat(${TOTAL_COLS}, 1fr)`,
              gap: GAP,
              willChange: 'transform',
            }}
          >
            {gridItems.map((item, i) => (
              <div
                key={i}
                style={{ gridRow: item.row, gridColumn: item.col }}
                className="overflow-hidden rounded-2xl"
              >
                {item.type === 'color' ? (
                  <div className={`${item.color} w-full h-full ring-1 ring-teal/10`} />
                ) : (
                  <div className="relative w-full h-full overflow-hidden group">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-teal/30 group-hover:bg-teal/50 transition-colors duration-300" />
                    <span className="absolute bottom-3 left-4 bg-teal/60 backdrop-blur-sm px-3 py-1 rounded-full font-heading font-bold text-white text-sm md:text-base">
                      {item.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
