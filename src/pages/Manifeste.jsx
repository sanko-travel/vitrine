import { Link } from 'react-router-dom'

const values = [
  {
    icon: '🤝',
    title: 'Communauté',
    description: 'Chaque voyage est une expérience collective. Nous croyons au pouvoir du groupe pour vivre des moments inoubliables et tisser des liens durables.',
    bg: 'bg-orange',
    text: 'text-white',
  },
  {
    icon: '🌍',
    title: 'Impact',
    description: 'Nous sélectionnons des partenaires locaux engagés. Voyager avec Sanko, c\'est contribuer positivement aux communautés que vous visitez.',
    bg: 'bg-green-light',
    text: 'text-blue-dark',
  },
  {
    icon: '💸',
    title: 'Revenus',
    description: 'Votre audience est votre force. Nous vous aidons à la monétiser de façon authentique, en alignant vos valeurs avec votre activité.',
    bg: 'bg-yellow',
    text: 'text-blue-dark',
  },
]

export default function Manifeste() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/paysages/paysage_010.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-dark/70" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="font-body text-orange font-semibold tracking-widest text-sm uppercase mb-4">
            Notre manifeste
          </p>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-6xl leading-tight">
            Allier nos forces pour un monde meilleur
          </h1>
        </div>
      </section>

      {/* ── Pourquoi Sanko ── */}
      <section className="bg-beige py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-blue-dark mb-8">
            Pourquoi Sanko ?
          </h2>
          <div className="font-body text-blue-dark/80 text-lg leading-relaxed space-y-6">
            <p>
              Sanko est un mot Akan qui signifie <em>"retourner en arrière pour mieux avancer"</em>.
              Cette philosophie guide chacun de nos voyages : nous croyons que s'ancrer dans ses racines,
              sa communauté, ses valeurs, est la meilleure façon de construire l'avenir.
            </p>
            <p>
              Nous avons créé Sanko parce que nous avons vu trop de créateurs de contenu épuisés,
              seuls face à la logistique de voyages qu'ils voulaient organiser pour leur communauté.
              Trop de rêves abandonnés faute d'accompagnement.
            </p>
            <p>
              Notre mission : permettre à chaque créateur de vivre pleinement son aventure,
              de créer du contenu authentique, et de générer des revenus — tout en offrant à sa
              communauté une expérience de voyage exceptionnelle.
            </p>
          </div>
        </div>
      </section>

      {/* ── Nos valeurs ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-4xl text-blue-dark mb-4">
              Nos valeurs
            </h2>
            <p className="font-body text-blue-dark/60 text-lg">
              Ce qui guide chacune de nos décisions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className={`${v.bg} ${v.text} rounded-2xl p-8`}>
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-heading font-bold text-2xl mb-3">{v.title}</h3>
                <p className="font-body text-sm leading-relaxed opacity-90">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notre vision ── */}
      <section className="bg-green-dark py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-8">
            Notre vision
          </h2>
          <div className="font-body text-white/85 text-xl leading-relaxed space-y-6 italic">
            <p>
              "Nous imaginons un monde où les frontières ne sont pas des obstacles,
              mais des invitations. Un monde où chaque voyage laisse les lieux
              et les gens meilleurs qu'avant notre passage."
            </p>
            <p>
              "Un monde où les créateurs de contenu sont des ambassadeurs de la diversité culturelle,
              des ponts entre les communautés, des acteurs d'un tourisme plus juste et plus beau."
            </p>
          </div>
          <div className="mt-6 text-orange font-heading font-semibold text-lg">
            — L'équipe Sanko
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-beige py-20 px-6 text-center">
        <h2 className="font-heading font-bold text-3xl text-blue-dark mb-6">
          Prêt à rejoindre l'aventure ?
        </h2>
        <Link
          to="/#form"
          className="inline-block bg-orange text-white font-body font-semibold px-10 py-4 rounded-lg hover:bg-orange/90 transition-colors text-lg"
        >
          Rejoindre l'aventure
        </Link>
      </section>
    </main>
  )
}
