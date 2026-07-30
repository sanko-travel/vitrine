import useScrollReveal from '../hooks/useScrollReveal'

const steps = [
  {
    color: 'text-coral',
    bgColor: 'bg-coral/10',
    title: 'Tu partages',
    description: 'Tu invites ta communauté à ton aventure. Partage le voyage avec tes abonnés et crée l\'engouement autour de toi.',
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
    title: 'On organise',
    description: 'Logistique, hébergement, activités : tout est géré par notre équipe d\'experts. Tu n\'as rien à faire, vraiment.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
    ),
  },
  {
    color: 'text-yellow',
    bgColor: 'bg-yellow/20',
    title: 'Tu génères',
    description: 'Revenus et contenu premium sans effort. Tu profites de l\'expérience pendant que ta communauté grandit.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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
            Trois étapes simples pour transformer ta passion en aventure partagée.
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
