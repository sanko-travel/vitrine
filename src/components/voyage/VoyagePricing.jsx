import useScrollReveal from '../../hooks/useScrollReveal'
import StickerLabel from '../StickerLabel'

export default function VoyagePricing({ data }) {
  const ref = useScrollReveal()

  return (
    <section id="reservation" className="bg-white py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-teal mb-14 text-center tracking-tight">
          Réserve <span className="inline-block" style={{ transform: 'rotate(-2deg)' }}><StickerLabel text="ta place" color="coral" style={{ fontSize: 'inherit', padding: '0.05em 0.35em' }} /></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Price card */}
          <div className="reveal scale-up">
            <div className="bg-white rounded-2xl shadow-md p-8 ring-1 ring-teal/5 h-full flex flex-col">
              <div className="mb-6">
                <span className="font-heading font-bold text-5xl text-teal">
                  {data.pricing.price}
                </span>
                <span className="font-heading text-xl text-teal ml-1">
                  {data.pricing.currency}/pers
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {data.inclusions.slice(0, 5).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-gray-700 text-sm">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={data.pricing.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-coral text-white font-body font-semibold py-4 rounded-full text-center hover:bg-coral/90 transition-colors text-lg"
              >
                S'inscrire
              </a>

              <p className="font-body text-gray-500 text-xs text-center mt-4">
                Acompte de {data.pricing.deposit} à l'inscription
              </p>
            </div>
          </div>

          {/* Payment terms */}
          <div className="reveal space-y-8">
            {/* Modalités de paiement */}
            <div>
              <h3 className="font-heading font-bold text-xl text-teal mb-4">
                Modalités de paiement
              </h3>
              <ul className="space-y-3">
                {data.pricing.paymentTerms.map((term, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0" />
                    <span className="font-body text-gray-700 text-sm leading-relaxed">{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Annulation */}
            <div>
              <h3 className="font-heading font-bold text-xl text-teal mb-4">
                Annulation & remboursement
              </h3>
              <div className="space-y-2">
                {data.pricing.cancellation.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 font-body text-sm">
                    <span className="font-semibold text-teal whitespace-nowrap sm:min-w-[140px]">
                      {item.delay}
                    </span>
                    <span className="text-gray-700">{item.retention}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-gray-500 text-xs mt-4 italic leading-relaxed">
                {data.pricing.cancellationNote}
              </p>
            </div>

            {/* Assurance */}
            <div className="bg-mint rounded-xl p-5">
              <h4 className="font-heading font-bold text-sm text-teal mb-2">
                Assurance voyage
              </h4>
              <p className="font-body text-gray-700 text-sm leading-relaxed">
                {data.insurance.text}
              </p>
              <p className="font-body text-gray-600 text-xs mt-2">
                {data.insurance.partner} {data.insurance.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
