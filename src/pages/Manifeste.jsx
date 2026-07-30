import { Link } from 'react-router-dom'
import StickerLabel from '../components/StickerLabel'

const values = [
  {
    title: 'Communauté',
    description: 'Chaque voyage est une expérience collective. Nous croyons au pouvoir du groupe pour vivre des moments inoubliables et tisser des liens durables.',
    bg: 'bg-white',
    text: 'text-teal',
    borderTop: 'border-t-4 border-coral',
    icon: (
      <svg className="w-8 h-8 text-coral" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: 'Impact',
    description: 'Nous sélectionnons des partenaires locaux engagés. Voyager avec Sanko, c\'est contribuer positivement aux communautés que vous visitez.',
    bg: 'bg-white',
    text: 'text-teal',
    borderTop: 'border-t-4 border-teal',
    icon: (
      <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Revenus',
    description: 'Votre audience est votre force. Nous vous aidons à la monétiser de façon authentique, en alignant vos valeurs avec votre activité.',
    bg: 'bg-white',
    text: 'text-teal',
    borderTop: 'border-t-4 border-yellow',
    icon: (
      <svg className="w-8 h-8 text-yellow" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
]

export default function Manifeste() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/paysages/paysage_010.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-teal/50 to-teal/30" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <StickerLabel text="Notre histoire" color="coral" className="mx-auto mb-6" />
          <p className="font-body text-coral font-semibold tracking-widest text-sm uppercase mb-4">
            Notre manifeste
          </p>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-6xl leading-tight">
            Allier nos forces pour un monde meilleur
          </h1>
        </div>
      </section>

      {/* Pourquoi Sanko */}
      <section className="bg-beige py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-teal mb-8">
            Pourquoi Sanko ?
          </h2>
          <div className="font-body text-gray-700 text-lg leading-relaxed space-y-6">
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

      {/* Nos valeurs */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-4xl text-teal mb-4">
              Nos valeurs
            </h2>
            <p className="font-body text-gray-600 text-lg">
              Ce qui guide chacune de nos décisions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className={`${v.bg} ${v.text} ${v.borderTop} rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}>
                <div className="mb-4">{v.icon}</div>
                <h3 className="font-heading font-bold text-2xl mb-3">{v.title}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre vision */}
      <section className="bg-teal py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl text-white mb-8">
            Notre vision
          </h2>
          <div className="font-body text-white/90 text-xl leading-relaxed space-y-6 italic">
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
          <div className="mt-6 text-coral font-heading font-semibold text-lg">
            — L'équipe Sanko
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-beige py-20 px-6 text-center">
        <h2 className="font-heading font-bold text-3xl text-teal mb-6">
          Prêt à rejoindre l'aventure ?
        </h2>
        <Link
          to="/#form"
          className="inline-block bg-coral text-white font-body font-semibold px-10 py-4 rounded-full hover:bg-coral/90 transition-colors text-lg"
        >
          Rejoindre l'aventure
        </Link>
      </section>
    </main>
  )
}
