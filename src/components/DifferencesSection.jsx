import useScrollReveal from '../hooks/useScrollReveal'

const gains = [
  'Un créateur qui te ressemble comme guide',
  'Un groupe trié sur le volet',
  'Des activités pensées pour créer du lien',
  '0 charge mentale',
  'Un voyage assuré et encadré légalement',
]

const eliminates = [
  'Les groupes random de 50 inconnus',
  'Les itinéraires copier-coller',
  'Les galères logistiques',
  "L'incertitude juridique",
  'Le faux "voyage authentique"',
]

export default function DifferencesSection() {
  const ref = useScrollReveal()

  return (
    <section className="bg-teal py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2 className="reveal font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-14 text-center">
          La différence, en clair.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ce que tu gagnes */}
          <div className="reveal from-below bg-white rounded-2xl p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="font-heading font-bold text-2xl text-teal">
                Ce que tu gagnes
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {gains.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="font-body text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ce qu'on élimine */}
          <div className="reveal from-below bg-white rounded-2xl p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-7 h-7 text-coral" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="font-heading font-bold text-2xl text-coral">
                Ce qu'on élimine
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {eliminates.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  <span className="font-body text-gray-700 line-through">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
