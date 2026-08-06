import useScrollReveal from '../hooks/useScrollReveal'
import StickerLabel from './StickerLabel'

export default function ValueProposition() {
  const ref = useScrollReveal()

  return (
    <section id="concept" className="bg-white py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <div className="reveal flex flex-wrap justify-center gap-3 mb-6">
          <StickerLabel text="Impact" color="teal" />
          <StickerLabel text="Voyage" color="coral" />
          <StickerLabel text="Communauté" color="yellow" />
        </div>
        <h2 className="reveal font-heading font-bold text-teal text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-6">
          On ne vend pas des voyages. On crée des expériences humaines.
        </h2>
        <p className="reveal font-body text-gray-600 text-lg md:text-xl">
          Se déconnecter pour se connecter IRL.
        </p>
      </div>
    </section>
  )
}
