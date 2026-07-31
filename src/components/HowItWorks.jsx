import useScrollReveal from '../hooks/useScrollReveal'

const steps = [
  {
    color: 'text-coral',
    bgColor: 'bg-coral/10',
    title: 'Tu choisis',
    description: 'Découvre nos prochains voyages et choisis la destination qui te fait vibrer, avec le créateur que tu suis.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    color: 'text-teal',
    bgColor: 'bg-teal/10',
    title: 'Tu rejoins le groupe',
    description: 'Inscris-toi et rejoins un groupe de voyageurs qui partagent les mêmes passions. On s\'occupe de toute la logistique.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    color: 'text-yellow',
    bgColor: 'bg-yellow/20',
    title: 'Tu vis l\'aventure',
    description: 'Profite d\'une expérience unique, entre découvertes, rencontres et souvenirs inoubliables. Tu arrives seul, tu repars avec une bande.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const ref = useScrollReveal()

  return (
    <section className="bg-beige py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-teal mb-4">
            On gère, tu profites.
          </h2>
          <p className="font-body text-gray-600 text-lg max-w-xl mx-auto">
            Trois étapes simples pour vivre une aventure inoubliable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ring-1 ring-teal/5"
            >
              <div className={`${step.bgColor} ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                {step.icon}
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-heading font-bold text-5xl text-teal/10">{i + 1}</span>
                <h3 className={`font-heading font-bold text-xl ${step.color}`}>{step.title}</h3>
              </div>
              <p className="font-body text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
