import { useRef, useEffect, useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import StickerLabel from '../StickerLabel'

const CARD_WIDTH = 320
const GAP = 24

export default function VoyageHighlights({ data }) {
  const sectionRef = useRef(null)
  const rowRef = useRef(null)
  const wrapperRef = useRef(null)
  const revealRef = useScrollReveal()
  const [totalWidth, setTotalWidth] = useState(0)

  const count = data.highlights.length

  useEffect(() => {
    setTotalWidth(count * CARD_WIDTH + (count - 1) * GAP)
  }, [count])

  const getMaxTranslate = () => {
    const wrapper = wrapperRef.current
    if (!wrapper) return 0
    const padLeft = parseFloat(getComputedStyle(wrapper).paddingLeft) || 0
    const lastCardCenter = padLeft + (count - 1) * (CARD_WIDTH + GAP) + CARD_WIDTH / 2
    return Math.max(0, lastCardCenter - wrapper.clientWidth / 2)
  }

  const scrollToCard = (index) => {
    const section = sectionRef.current
    const wrapper = wrapperRef.current
    if (!section || !wrapper) return

    const maxTranslate = getMaxTranslate()
    if (maxTranslate <= 0) return

    const padLeft = parseFloat(getComputedStyle(wrapper).paddingLeft) || 0
    const cardCenter = padLeft + index * (CARD_WIDTH + GAP) + CARD_WIDTH / 2
    const targetTranslate = Math.max(0, Math.min(maxTranslate, cardCenter - wrapper.clientWidth / 2))
    const p = targetTranslate / maxTranslate

    const scrollable = section.offsetHeight - window.innerHeight
    const targetScrollY = section.offsetTop + p * scrollable
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' })
  }

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
      const maxTranslate = getMaxTranslate()
      row.style.transform = `translateX(-${p * maxTranslate}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [totalWidth])

  return (
    <section ref={sectionRef} className="bg-teal relative" style={{ height: '200vh' }}>
      <div ref={revealRef} className="sticky top-0 h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full px-6 md:px-16 mb-10">
          <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-white text-center tracking-tight">
            Les temps forts
          </h2>
        </div>

        <div
          ref={wrapperRef}
          className="reveal max-w-6xl mx-auto w-full px-6 md:px-16 overflow-hidden"
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
            {data.highlights.map((item, i) => (
              <div
                key={i}
                onClick={() => scrollToCard(i)}
                className="relative rounded-2xl overflow-hidden shadow-lg flex-shrink-0 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                style={{ width: CARD_WIDTH, height: 420 }}
              >
                {/* Image plein cadre */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Titre en pastille — haut droite */}
                <span className={`absolute top-3 right-3 z-10 px-4 py-1.5 rounded-full font-accent font-bold text-sm ${['bg-coral text-white', 'bg-teal text-white', 'bg-yellow text-white', 'bg-coral text-white'][i % 4]}`}>
                  {item.title}
                </span>

                {/* Gradient blanc fixe en bas — toujours visible */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white/80 pointer-events-none" />

                {/* Bloc flèche + gradient + texte — remonte ensemble au hover */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-[calc(100%-3rem)] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  {/* Flèche hint — visible par défaut, disparaît au hover */}
                  <div className="flex justify-center pb-1 group-hover:opacity-0 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white drop-shadow-md animate-bounce" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  </div>
                  {/* Gradient long et progressif : transparent → blanc */}
                  <div className="h-32 bg-gradient-to-b from-transparent via-white/40 to-white" />
                  {/* Zone blanche avec le texte */}
                  <div className="bg-white px-5 pb-5">
                    <p className="font-body text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
