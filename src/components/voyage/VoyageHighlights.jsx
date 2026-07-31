import useScrollReveal from '../../hooks/useScrollReveal'

export default function VoyageHighlights({ data }) {
  const ref = useScrollReveal()

  return (
    <section className="bg-white py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-teal mb-16 text-center">
          Les temps forts
        </h2>

        <div className="flex flex-col gap-20">
          {data.highlights.map((item, i) => (
            <div
              key={i}
              className={`reveal flex flex-col ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-10 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <span className="font-accent font-semibold text-coral text-sm uppercase tracking-wider">
                  {item.subtitle}
                </span>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-teal mt-2 mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-gray-700 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
