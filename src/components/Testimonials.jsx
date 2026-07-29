const testimonials = [
  {
    photo: '/images/paysages/paysage_001.jpg',
    handle: '@leo.aventures',
    text: '"Avec Sanko, j\'ai emmené 40 abonnés en Mongolie. Ils ont tout géré, moi j\'ai juste créé. Une expérience incroyable."',
    color: 'border-orange',
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
    color: 'border-green-light',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-blue-dark py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-beige mb-4">
            Ce qu'ils en disent
          </h2>
          <p className="font-body text-beige/60 text-lg">
            Des créateurs qui ont fait confiance à Sanko.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
            >
              <p className="font-body text-beige/90 leading-relaxed italic text-base flex-1">
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
                  <p className="font-heading font-semibold text-white text-sm">{t.handle}</p>
                  <p className="font-body text-beige/50 text-xs">Créateur de contenu</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
