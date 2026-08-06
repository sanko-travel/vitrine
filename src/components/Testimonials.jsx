import useScrollReveal from '../hooks/useScrollReveal'

const testimonials = [
  {
    name: 'Mathilde P.',
    context: 'Maroc avec Lina',
    text: "\"Le voyage était tellement dans l'univers de Lina que j'avais l'impression d'y être invitée personnellement. On était 12, on en est reparties amies.\"",
    image: '/images/paysages/paysage_019.jpg',
    color: 'border-coral',
  },
  {
    name: 'Julien K.',
    context: 'Sénégal avec Théo',
    text: "\"Partir avec Théo, c'était partir avec quelqu'un qui avait déjà fait la route avant nous. Il connaissait chaque coin, chaque histoire. On n'était pas des touristes.\"",
    image: '/images/paysages/paysage_001.jpg',
    color: 'border-yellow',
  },
  {
    name: 'Sara O.',
    context: 'Portugal avec Camille',
    text: "\"On était 10, on se connaissait tous au troisième soir. C'est ça la magie de ces voyages : tu arrives seule, tu repars avec une bande.\"",
    image: '/images/paysages/paysage_005.jpg',
    color: 'border-teal',
  },
]

const trustBadges = [
  {
    label: 'Immatriculation Atout France',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    label: 'Garantie Groupama',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    label: 'RC Pro voyage',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    ),
  },
  {
    label: '2 000+ voyageurs satisfaits',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
]

export default function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section id="temoignages" className="bg-teal py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Ce qu'ils en disent
          </h2>
          <p className="font-body text-white/90 text-lg">
            Des voyageurs qui ont vécu l'expérience Sanko.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal from-left bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-8 flex flex-col gap-5"
            >
              <span className="font-heading text-5xl text-coral/30 leading-none select-none">"</span>

              <div className="flex gap-1 -mt-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="font-body text-gray-700 leading-relaxed italic text-base flex-1">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full overflow-hidden border-2 ${t.color} flex-shrink-0`}>
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading font-semibold text-teal text-sm">{t.name}</p>
                  <p className="font-body text-coral text-xs">{t.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TrustBand */}
        <div className="border-t border-white/10 mt-16 pt-10">
          <div className="flex flex-wrap justify-center gap-8">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-white/80">{badge.icon}</span>
                <span className="font-body text-white/80 text-sm font-semibold">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
