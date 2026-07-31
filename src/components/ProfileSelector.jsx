import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'
import StickerLabel from './StickerLabel'

const profiles = [
  {
    title: 'Créateur',
    subtitle: 'Tu veux organiser un voyage avec ta communauté ?',
    description:
      'On s\'occupe d\'organiser le voyage de tes rêves, sur mesure. Toi, tu partages l\'aventure et tu crées des souvenirs inoubliables avec ta communauté.',
    cta: 'Je suis créateur',
    to: '/creer-mon-voyage',
    color: 'bg-coral',
    hoverColor: 'hover:bg-coral/90',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: 'Partenaire',
    subtitle: 'Tu veux collaborer avec Sanko ?',
    description:
      'Agences locales, hébergeurs, prestataires d\'activités : rejoins notre réseau de partenaires et développe ton activité grâce à nos voyages.',
    cta: 'Nous contacter',
    to: '/contact',
    color: 'bg-teal',
    hoverColor: 'hover:bg-teal/90',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    title: 'Marque',
    subtitle: 'Tu veux sponsoriser des voyages ?',
    description:
      'Associe ton image à des expériences uniques. Touche une audience engagée de voyageurs et de communautés de créateurs.',
    cta: 'Devenir sponsor',
    to: '/contact',
    color: 'bg-yellow',
    hoverColor: 'hover:bg-yellow/90',
    textColor: 'text-teal',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
]

export default function ProfileSelector() {
  const ref = useScrollReveal()

  return (
    <section className="bg-beige py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="reveal mb-4">
            <StickerLabel text="Pour tous" color="yellow" />
          </div>
          <h2 className="reveal font-heading font-bold text-4xl md:text-5xl text-teal mb-4">
            Et toi, tu es qui ?
          </h2>
          <p className="reveal font-body text-gray-600 text-lg max-w-xl mx-auto">
            Dis-nous ce qui t'amène, on s'occupe du reste.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.title}
              className="reveal bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-8 flex flex-col justify-between"
            >
              <div>
                <div className={`${profile.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6`}>
                  {profile.icon}
                </div>
                <h3 className="font-heading font-bold text-2xl text-teal mb-2">
                  {profile.title}
                </h3>
                <p className="font-heading font-medium text-teal/90 mb-3">
                  {profile.subtitle}
                </p>
                <p className="font-body text-gray-600 leading-relaxed mb-8">
                  {profile.description}
                </p>
              </div>
              <Link
                to={profile.to}
                className={`${profile.color} ${profile.hoverColor} ${profile.textColor || 'text-white'} font-heading font-bold text-center py-3 px-6 rounded-full transition-colors duration-200`}
              >
                {profile.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
