import { useEffect, useRef } from "react";

const pressArticles = [
  {
    media: "TourMag",
    logo: "/images/presse/tourmag.png",
    quote:
      "Sanko réinvente le voyage de groupe en le construisant autour de la relation créateur-communauté, avec un cadre légal que peu d'acteurs du secteur peuvent revendiquer.",
    url: "https://www.tourmag.com/Melany-Fabre-Sankofa-le-pari-du-voyage-immersif-porte-par-les-createurs-de-contenu_a132329.html",
    linkLabel: "Lire l'article",
  },
  {
    media: "Podcast prYsme",
    logo: "/images/presse/prysme.png",
    roundLogo: true,
    quote:
      "Voyager pour retrouver l'humain : quand les rencontres transforment nos vies.",
    url: "https://open.spotify.com/episode/4emPoxWQ8ZgwSXO7QsCUNg",
    linkLabel: "Écouter l'épisode",
  },
  {
    media: "L'Écho Touristique",
    logo: "/images/presse/echo-touristique.png",
    quote:
      "Notre ambition est de faire réviser les imaginaires, de susciter des rencontres avec les populations locales et de créer des voyages à impact.",
    url: "https://www.lechotouristique.com/article/tourisme-regeneratif-comment-echapper-aux-contradictions-du-toujours-plus",
    linkLabel: "Lire l'article",
  },
  {
    media: "Le Quotidien du Tourisme",
    logo: "/images/presse/quotidien-tourisme.png",
    invertLogo: true,
    quote:
      "Faire du voyage communautaire à impact le levier le plus puissant de transformation de l'industrie touristique.",
    url: "https://www.quotidiendutourisme.com/e-tourisme/suite-start-up-iftm-top-resa-2025-le-tourisme-et-la-creator-economy-969002.php",
    linkLabel: "Lire l'article",
  },
  {
    media: "TOM.travel",
    logo: "/images/presse/tom-travel.png",
    quote:
      "Sankofa Travel Studio rejoint Provence Tourisme Innovation avec l'ambition de démocratiser les séjours à impact à l'aide des influenceurs.",
    url: "https://www.tom.travel/2025/03/26/sankofa-collabore-avec-des-influenceurs-pour-organiser-des-sejours-a-impact/",
    linkLabel: "Lire l'article",
  },
  {
    media: "Gomet'",
    logo: "/images/presse/gomet.png",
    quote:
      "Une solution qui permet aux créateurs de contenus d'organiser des voyages pour leur communauté.",
    url: "https://gomet.net/provence-travel-innovation-devoile-sa-promotion-2025/",
    linkLabel: "Lire l'article",
  },
  {
    media: "L'Escalator",
    logo: "/images/presse/escalator.svg",
    quote:
      "La première agence en France à accompagner les créateurs dans la conception, la vente et l'organisation de voyages immersifs avec leur communauté, dans un cadre 100 % légal et avec un impact local positif.",
    url: "https://lescalator.com/startups/sankofa-travel-studio/",
    linkLabel: "Lire l'article",
  },
];

export default function PressMentions() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="presse" className="bg-white py-24 px-6">
      <div ref={sectionRef} className="reveal max-w-4xl mx-auto">
        {/* Label */}
        <p className="text-xs font-semibold tracking-[0.08em] text-gray-400 uppercase mb-10 font-body text-center">
          Ils parlent de nous
        </p>

        {/* Quote cards */}
        <div className="flex flex-col gap-4">
          {pressArticles.map((article) => (
            <div
              key={article.media}
              className="bg-beige rounded-2xl p-6 md:px-10 md:py-7 flex flex-col md:flex-row items-center gap-5 md:gap-8"
            >
              {/* Logo container - fixed width for consistency */}
              <div className="w-28 md:w-36 shrink-0 flex items-center justify-center">
                <img
                  src={article.logo}
                  alt={article.media}
                  className={`max-h-8 md:max-h-10 w-auto max-w-full object-contain${
                    article.invertLogo ? " invert" : ""
                  }${article.roundLogo ? " rounded-md" : ""}`}
                  loading="lazy"
                />
              </div>

              {/* Quote + link */}
              <p className="text-gray-600 text-[15px] leading-relaxed text-left m-0 font-body">
                «&nbsp;{article.quote}&nbsp;»{" "}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-teal hover:text-teal/80 transition-colors whitespace-nowrap"
                >
                  {article.linkLabel}&nbsp;→
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
