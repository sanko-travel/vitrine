const steps = [
  {
    icon: '📍',
    color: 'text-orange',
    bgColor: 'bg-orange/10',
    title: 'Tu partages',
    description: 'Tu invites ta communauté à ton aventure. Partage le voyage avec tes abonnés et crée l\'engouement autour de toi.',
  },
  {
    icon: '✈️',
    color: 'text-green-dark',
    bgColor: 'bg-green-dark/10',
    title: 'On organise',
    description: 'Logistique, hébergement, activités : tout est géré par notre équipe d\'experts. Tu n\'as rien à faire, vraiment.',
  },
  {
    icon: '💰',
    color: 'text-yellow',
    bgColor: 'bg-yellow/20',
    title: 'Tu génères',
    description: 'Revenus et contenu premium sans effort. Tu profites de l\'expérience pendant que ta communauté grandit.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-beige py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-blue-dark mb-4">
            On gère, tu profites.
          </h2>
          <p className="font-body text-blue-dark/70 text-lg max-w-xl mx-auto">
            Trois étapes simples pour transformer ta passion en aventure partagée.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`${step.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                {step.icon}
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-heading font-bold text-5xl text-blue-dark/10">{i + 1}</span>
                <h3 className={`font-heading font-bold text-xl ${step.color}`}>{step.title}</h3>
              </div>
              <p className="font-body text-blue-dark/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
