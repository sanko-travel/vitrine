export default function VoyageCTA({ data }) {
  return (
    <section id="inscription" className="bg-teal py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* CTA */}
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
          Prêt·e pour {data.destination} ?
        </h2>
        <p className="font-body text-white/80 text-lg mb-10">
          Rejoins {data.creator.name} et un petit groupe de voyageurs pour {data.facts.duration} d'immersion inoubliable.
        </p>

        <a
          href={data.pricing.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-coral text-white font-body font-semibold px-10 py-4 rounded-full hover:bg-coral/90 transition-colors text-lg mb-16"
        >
          S'inscrire maintenant
        </a>

        {/* Qui sommes-nous */}
        <div className="border-t border-white/15 pt-12 mb-12">
          <h3 className="font-heading font-bold text-xl text-white mb-4">
            Qui sommes-nous ?
          </h3>
          <div className="space-y-3 max-w-2xl mx-auto">
            {data.aboutUs.text.map((p, i) => (
              <p key={i} className="font-body text-white/80 text-sm leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-4">
            <p className="font-body text-white/90 text-sm font-semibold mb-2">Notre mission :</p>
            <ul className="space-y-1">
              {data.aboutUs.mission.map((m, i) => (
                <li key={i} className="font-body text-white/80 text-sm">{m}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Infos légales */}
        <div className="border-t border-white/15 pt-8">
          <div className="space-y-2 text-left max-w-2xl mx-auto">
            <p className="font-body text-white/50 text-xs leading-relaxed">
              Sanko Travel Studio est immatriculé au registre des Opérateurs de Voyages et de Séjours
              auprès d'Atout France sous le numéro : <strong className="text-white/70">{data.legal.registrationNumber}</strong>
            </p>
            <p className="font-body text-white/50 text-xs leading-relaxed">
              TVA Intracommunautaire : {data.legal.tva}
            </p>
            <p className="font-body text-white/50 text-xs leading-relaxed">
              Garantie financière : {data.legal.financialGuarantee}
            </p>
            <p className="font-body text-white/50 text-xs leading-relaxed">
              Assurance RC Pro : {data.legal.insurance}
            </p>
            <p className="font-body text-white/60 text-xs mt-4 italic">
              {data.legal.note}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
