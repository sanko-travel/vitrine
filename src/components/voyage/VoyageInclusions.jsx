import useScrollReveal from '../../hooks/useScrollReveal'

export default function VoyageInclusions({ data }) {
  const ref = useScrollReveal()

  return (
    <section className="bg-white py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-teal mb-14 text-center">
          Ce qui est inclus
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Inclus */}
          <div className="reveal">
            <h3 className="font-heading font-bold text-xl text-teal mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Inclus
            </h3>
            <ul className="space-y-3">
              {data.inclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-body text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Non inclus */}
          <div className="reveal">
            <h3 className="font-heading font-bold text-xl text-gray-700 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Non inclus
            </h3>
            <ul className="space-y-3">
              {data.exclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="font-body text-gray-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
