import useScrollReveal from '../hooks/useScrollReveal'
import StickerLabel from './StickerLabel'

const guarantees = [
  {
    title: 'Voyage en toute légalité',
    description: (
      <>
        Sanko est immatriculée auprès d'<a href="https://registre-operateurs-de-voyages.atout-france.fr/immatriculation/fichePublique?idPersonne=17701" target="_blank" rel="noopener noreferrer" className="text-teal underline hover:text-teal/80 transition-colors font-semibold">Atout France</a>, avec garantie financière Groupama et RC Pro voyage. Tu pars en toute sécurité juridique.
      </>
    ),
    borderColor: 'border-teal',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: 'Des experts, des vrais',
    description:
      'Notre équipe connaît chaque destination sur le bout des doigts. Partenaires locaux vérifiés, activités testées, hébergements sélectionnés.',
    borderColor: 'border-coral',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    title: 'Tout est clair, tout le temps',
    description:
      'Prix transparent, pas de frais cachés. Tu sais exactement ce qui est inclus avant de réserver. Zéro mauvaise surprise.',
    borderColor: 'border-yellow',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "L'impact avant tout",
    description:
      'Chaque voyage est conçu avec des partenaires locaux pour un impact positif sur les communautés visitées. Voyager mieux, ensemble.',
    borderColor: 'border-teal',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864a4.45 4.45 0 0 1 .852 4.174c-.142.424.088.89.5 1.063a4.5 4.5 0 0 1 2.494 4.53c-.044.484.322.89.808.89h.75M12 18.75v1.5m0 0h-3m3 0h3m-6-4.5a6.75 6.75 0 0 1-6.75-6.75c0-.89.18-1.74.5-2.51a.75.75 0 0 1 1.088-.33c.498.323 1.08.5 1.687.5 1.753 0 3.175-1.397 3.225-3.143a.75.75 0 0 1 .75-.732h.006c3.728 0 6.744 3.03 6.744 6.766A6.75 6.75 0 0 1 12 18.75Z" />
      </svg>
    ),
  },
]

export default function Guarantees() {
  const ref = useScrollReveal()

  return (
    <section className="bg-white py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="reveal mb-4">
            <StickerLabel text="Confiance" color="teal" />
          </div>
          <h2 className="reveal font-heading font-bold text-4xl md:text-5xl text-teal mb-4">
            Nos garanties
          </h2>
          <p className="reveal font-body text-gray-600 text-lg max-w-xl mx-auto">
            On ne fait pas de promesses en l'air. Voici ce sur quoi on s'engage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {guarantees.map((g, i) => (
            <div
              key={i}
              className={`reveal scale-up bg-white border-t-4 ${g.borderColor} rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ring-1 ring-teal/5`}
            >
              <div className="text-teal mb-4">
                {g.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-teal mb-3">
                {g.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed">
                {g.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
