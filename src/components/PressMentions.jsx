import useScrollReveal from '../hooks/useScrollReveal'

const mediaLogos = [
  { name: 'TourMag' },
  { name: 'Tom Travel' },
  { name: 'Banque Wormser' },
]

export default function PressMentions() {
  const ref = useScrollReveal()

  return (
    <section className="bg-white py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="reveal font-heading font-bold text-4xl md:text-5xl text-teal tracking-tight text-center mb-14">
          Ils parlent de nous
        </h2>

        {/* Citation principale */}
        <div className="reveal bg-white rounded-2xl p-8 md:p-12 shadow-md ring-1 ring-teal/5 text-center mb-12">
          <span className="font-heading text-5xl text-coral/30 leading-none select-none block mb-4">"</span>
          <blockquote className="font-body text-gray-700 text-lg md:text-xl leading-relaxed italic mb-6 max-w-3xl mx-auto">
            Sanko réinvente le voyage de groupe en le construisant autour de la relation créateur-communauté, avec un cadre légal que peu d'acteurs du secteur peuvent revendiquer.
          </blockquote>
          <p className="font-heading font-semibold text-teal">— TourMag</p>
        </div>

        {/* Logos médias */}
        <div className="reveal flex flex-wrap justify-center items-center gap-10">
          {mediaLogos.map((media) => (
            <span
              key={media.name}
              className="font-heading font-bold text-xl text-gray-400"
            >
              {media.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
