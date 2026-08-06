import useScrollReveal from "../hooks/useScrollReveal";

const pressArticles = [
  {
    media: "TourMag",
    date: "23 juin 2026",
    quote:
      "L'avenir du tourisme se joue au plus près des habitants. 100\u00a0% de nos dépenses logistiques sur place vont directement dans la poche des communautés locales.",
    url: "https://www.tourmag.com/Melany-Fabre-Sankofa-le-pari-du-voyage-immersif-porte-par-les-createurs-de-contenu_a132329.html",
    accent: "coral",
  },
  {
    media: "Le Quotidien du Tourisme",
    date: "20 octobre 2025",
    quote:
      "Faire du voyage communautaire à impact le levier le plus puissant de transformation de l'industrie touristique.",
    url: "https://www.quotidiendutourisme.com/e-tourisme/suite-start-up-iftm-top-resa-2025-le-tourisme-et-la-creator-economy-969002.php",
    accent: "teal",
  },
  {
    media: "TOM.travel",
    date: "26 mars 2025",
    quote:
      "Sankofa Travel Studio rejoint Provence Tourisme Innovation avec l'ambition de démocratiser les séjours à impact à l'aide des influenceurs.",
    url: "https://www.tom.travel/2025/03/26/sankofa-collabore-avec-des-influenceurs-pour-organiser-des-sejours-a-impact/",
    accent: "yellow",
  },
  {
    media: "Gomet'",
    date: "14 mars 2025",
    quote:
      "Une solution qui permet aux créateurs de contenus d'organiser des voyages pour leur communauté.",
    url: "https://gomet.net/provence-travel-innovation-devoile-sa-promotion-2025/",
    accent: "coral",
  },
  {
    media: "L'Écho Touristique",
    date: "2 février 2026",
    quote:
      "Notre ambition est de faire réviser les imaginaires, de susciter des rencontres avec les populations locales et de créer des voyages à impact.",
    url: "https://www.lechotouristique.com/article/tourisme-regeneratif-comment-echapper-aux-contradictions-du-toujours-plus",
    accent: "teal",
  },
  {
    media: "L'Escalator",
    date: "2025",
    quote:
      "La première agence en France à accompagner les créateurs dans la conception, la vente et l'organisation de voyages immersifs avec leur communauté, dans un cadre 100\u00a0% légal et avec un impact local positif.",
    url: "https://lescalator.com/startups/sankofa-travel-studio/",
    accent: "yellow",
  },
  {
    media: "Podcast prYsme",
    date: "15 février 2026",
    quote:
      "Voyager pour retrouver l'humain\u00a0: quand les rencontres transforment nos vies.",
    url: "https://open.spotify.com/episode/4emPoxWQ8ZgwSXO7QsCUNg",
    accent: "coral",
    linkLabel: "Écouter l'épisode",
  },
];

const accentColors = {
  coral: "border-coral",
  teal: "border-teal",
  yellow: "border-yellow",
};

export default function PressMentions() {
  const ref = useScrollReveal();

  return (
    <section className="bg-white py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <h2 className="reveal font-heading font-bold text-4xl md:text-5xl text-teal tracking-tight text-center mb-16">
          Ils parlent de nous
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pressArticles.map((article) => (
            <div
              key={article.media}
              className={`reveal bg-white rounded-2xl shadow-md ring-1 ring-teal/5 p-8 flex flex-col border-t-4 ${accentColors[article.accent]} hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-heading font-bold text-teal text-lg">
                  {article.media}
                </span>
                <span className="font-body text-sm text-gray-400">
                  {article.date}
                </span>
              </div>

              <span className="font-heading text-4xl text-coral/30 leading-none select-none block -mb-2">
                "
              </span>
              <blockquote className="font-body text-gray-700 leading-relaxed italic flex-1 mb-6">
                {article.quote}
              </blockquote>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-semibold text-sm text-coral hover:text-coral/80 transition-colors"
              >
                {article.linkLabel || "Lire l'article"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
