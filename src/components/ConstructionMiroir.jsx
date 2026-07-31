import useScrollReveal from '../hooks/useScrollReveal'

const rows = [
  {
    question: 'Tu veux voyager autrement ?',
    answer: "On te donne un créateur dont tu suis déjà l'univers.",
  },
  {
    question: 'Tu veux du sens ?',
    answer: 'On te donne une communauté qui te ressemble.',
  },
  {
    question: 'Tu veux la sérénité ?',
    answer: 'On gère le juridique, la logistique, les paiements. Toi, tu arrives.',
  },
]

export default function ConstructionMiroir() {
  const ref = useScrollReveal()

  return (
    <section className="bg-beige py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2 className="reveal font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-teal mb-16 text-center">
          Ce que tu cherches, on l'a structuré.
        </h2>

        <div className="flex flex-col gap-0">
          {rows.map((row, i) => (
            <div
              key={i}
              className={`reveal grid md:grid-cols-2 gap-6 md:gap-8 py-10 ${
                i < rows.length - 1 ? 'border-b border-teal/10' : ''
              }`}
            >
              <h3 className="font-heading font-bold text-2xl text-teal">
                {row.question}
              </h3>
              <p className="font-body text-gray-700 text-lg border-l-4 border-coral pl-6">
                {row.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
