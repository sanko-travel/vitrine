import useScrollReveal from '../hooks/useScrollReveal'

const testimonials = [
  {
    photo: '/images/paysages/paysage_001.jpg',
    handle: '@leo.aventures',
    text: '"Avec Sanko, j\'ai emmené 40 abonnés en Mongolie. Ils ont tout géré, moi j\'ai juste créé. Une expérience incroyable."',
    color: 'border-coral',
  },
  {
    photo: '/images/paysages/paysage_035.jpeg',
    handle: '@camille.world',
    text: '"Le meilleur investissement pour ma communauté. Impact positif, revenus réels. Je recommande à tous les créateurs."',
    color: 'border-yellow',
  },
  {
    photo: '/images/paysages/paysage_005.jpg',
    handle: '@hugo.explore',
    text: '"Sans prise de tête du début à la fin. J\'en suis à mon 3ème trip avec eux et je ne compte pas m\'arrêter."',
    color: 'border-yellow',
  },
]

export default function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-teal mb-4">
            Ce qu'ils en disent
          </h2>
          <p className="font-body text-gray-600 text-lg">
            Des créateurs qui ont fait confiance à Sanko.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-8 flex flex-col gap-5"
            >
              {/* Decorative quote */}
              <span className="font-heading text-5xl text-coral/30 leading-none select-none">"</span>

              {/* Stars */}
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
                    src={t.photo}
                    alt={t.handle}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading font-semibold text-teal text-sm">{t.handle}</p>
                  <p className="font-body text-gray-500 text-xs">Créateur de contenu</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
