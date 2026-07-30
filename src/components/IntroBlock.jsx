import useScrollReveal from '../hooks/useScrollReveal'
import StickerLabel from './StickerLabel'

export default function IntroBlock() {
  const ref = useScrollReveal()

  return (
    <section id="intro" className="bg-beige py-24 md:py-32 px-6 md:px-16">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2 className="reveal font-heading font-extrabold text-teal text-3xl md:text-5xl leading-relaxed md:leading-relaxed mb-6">
          Une grande{' '}
          <span className="bg-coral text-white px-2 rounded-md">aventure</span>{' '}
          commence par un{' '}
          <span className="bg-teal text-white px-2 rounded-md">voyage</span>
        </h2>
        <p className="reveal font-body text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl mb-6">
          Sanko conçoit des voyages de groupe d'exception pour les
          créateurs de contenu et les communautés.
        </p>
        <div className="reveal">
          <StickerLabel text="Aventure" color="coral" />
        </div>
      </div>
    </section>
  )
}
