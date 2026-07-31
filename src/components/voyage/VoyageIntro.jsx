import useScrollReveal from '../../hooks/useScrollReveal'

export default function VoyageIntro({ data }) {
  const ref = useScrollReveal()

  return (
    <section className="bg-beige py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Intro text */}
          <div>
            <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-teal mb-8">
              {data.intro.heading}
            </h2>
            <div className="space-y-5">
              {data.intro.paragraphs.map((p, i) => (
                <p key={i} className="reveal font-body text-gray-700 text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Creator card */}
          <div className="reveal">
            <div className="bg-white rounded-2xl shadow-md p-6 ring-1 ring-teal/5">
              <img
                src={data.creator.image}
                alt={data.creator.name}
                className="w-full aspect-square object-cover rounded-xl mb-5"
                loading="lazy"
              />
              <h3 className="font-heading font-bold text-xl text-teal mb-1">
                {data.creator.name}
              </h3>
              <p className="font-body text-coral font-semibold text-sm mb-4">
                {data.creator.handle}
              </p>
              <div className="space-y-3">
                {data.creator.bio.map((p, i) => (
                  <p key={i} className="font-body text-gray-600 text-sm leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
