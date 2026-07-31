import useScrollReveal from '../hooks/useScrollReveal'
import StickerLabel from './StickerLabel'

const cards = [
  {
    title: "Vivre l'expérience",
    description:
      'Pas de tourisme passif. Chaque voyage est pensé pour que tu vives, pas que tu regardes.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: "La rencontre avant l'expérience",
    description:
      'Le voyage commence avant le départ. Tu rejoins un groupe qui te ressemble, autour d\'un créateur que tu suis.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    title: 'Repartir transformé',
    description:
      "Ce que tu ramènes ne tient pas dans une valise. Des liens, une vision, une histoire.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
      </svg>
    ),
  },
]

export default function IntroBlock() {
  const ref = useScrollReveal()

  return (
    <section id="intro" className="bg-beige py-24 md:py-32 px-6 md:px-16">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="reveal mb-4">
          <StickerLabel text="Impact" color="teal" />
        </div>
        <h2 className="reveal font-heading font-bold text-teal text-3xl md:text-4xl lg:text-5xl leading-tight mb-16 max-w-3xl">
          On ne vend pas des voyages. On crée des expériences humaines.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="reveal bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ring-1 ring-teal/5"
            >
              <div className="bg-teal w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6">
                {card.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-teal mb-3">
                {card.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
