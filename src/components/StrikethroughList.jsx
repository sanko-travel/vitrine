import useScrollReveal from "../hooks/useScrollReveal";

const NEVER_LIST = [
  "Chercher des hébergements",
  "Négocier avec les prestataires",
  "Gérer les paiements",
  "Rédiger les contrats",
  "S'occuper des questions d'assurance",
  "Gérer les imprévus sur place",
  "Faire la compta du voyage",
];

export default function StrikethroughList() {
  const ref = useScrollReveal();

  return (
    <section className="bg-teal py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-white text-center mb-14">
          Ce que tu ne feras jamais avec Sanko
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {NEVER_LIST.map((item, i) => {
            const isLast = i === NEVER_LIST.length - 1;
            const isOdd = NEVER_LIST.length % 2 !== 0;
            return (
            <div
              key={i}
              className={`reveal from-left flex items-center gap-4 bg-white/10 rounded-xl px-6 py-4${isLast && isOdd ? " sm:col-span-2 sm:w-[calc(50%-0.5rem)] sm:mx-auto" : ""}`}
            >
              <svg
                className="w-5 h-5 text-coral flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              <span className="font-body text-white/90 line-through decoration-white/40">
                {item}
              </span>
            </div>
            );
          })}
        </div>
        <p className="reveal text-center font-heading font-bold text-xl text-yellow">
          Toi, tu fais ce que tu fais le mieux.
        </p>
      </div>
    </section>
  );
}
