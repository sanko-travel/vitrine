import useScrollReveal from '../hooks/useScrollReveal'

const partners = [
  { name: 'BPI France', logo: '/images/partners/bpifrance.png' },
  { name: 'La French Tech', logo: '/images/partners/la-french-tech.png', height: 'h-14' },
  { name: 'Les Déterminés', logo: '/images/partners/les-determines.png' },
  { name: 'TeedUp', logo: '/images/partners/teedup.png' },
  { name: 'ESCAET', logo: '/images/partners/escaet.png' },
  { name: 'Provence Travel Innovation', logo: '/images/partners/provence-tourisme.png' },
  { name: 'Marseille Innovation', logo: '/images/partners/marseille-innovation.png', invert: true },
  { name: "L'Escalator", logo: '/images/partners/lescalator.svg' },
  { name: 'BNP Paribas', logo: '/images/partners/bnp-paribas.svg' },
]

export default function PartnersBanner() {
  const ref = useScrollReveal()

  return (
    <section className="bg-beige py-16 px-6 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto mb-10 text-center">
        <h2 className="reveal font-heading font-bold text-3xl text-teal">
          Ils nous font confiance
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-track gap-16 items-center">
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex-shrink-0 flex items-center px-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className={`${partner.height || 'h-10'} w-auto object-contain transition-all duration-300 grayscale hover:grayscale-0 opacity-60 hover:opacity-100`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
