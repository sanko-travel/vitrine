import { useEffect, useRef } from "react";
import StickerLabel from "./StickerLabel";

const pressArticles = [
  {
    media: "TourMag",
    date: "23 juin 2026",
    quote: (<>L'avenir du tourisme se joue <strong className="text-teal font-semibold not-italic">au plus près des habitants</strong>. 100&nbsp;% de nos dépenses logistiques sur place vont directement dans la poche des <strong className="text-teal font-semibold not-italic">communautés locales</strong>.</>),
    url: "https://www.tourmag.com/Melany-Fabre-Sankofa-le-pari-du-voyage-immersif-porte-par-les-createurs-de-contenu_a132329.html",
    color: "coral",
    rotation: "-3deg",
  },
  {
    media: "Podcast prYsme",
    date: "15 février 2026",
    quote: (<>Voyager pour <strong className="text-teal font-semibold not-italic">retrouver l'humain</strong>&nbsp;: quand les <strong className="text-teal font-semibold not-italic">rencontres transforment nos vies</strong>.</>),
    url: "https://open.spotify.com/episode/4emPoxWQ8ZgwSXO7QsCUNg",
    color: "teal",
    rotation: "2deg",
    linkLabel: "Écouter l'épisode",
  },
  {
    media: "L'Écho Touristique",
    date: "2 février 2026",
    quote: (<>Notre ambition est de faire <strong className="text-teal font-semibold not-italic">réviser les imaginaires</strong>, de susciter des <strong className="text-teal font-semibold not-italic">rencontres avec les populations locales</strong> et de créer des <strong className="text-teal font-semibold not-italic">voyages à impact</strong>.</>),
    url: "https://www.lechotouristique.com/article/tourisme-regeneratif-comment-echapper-aux-contradictions-du-toujours-plus",
    color: "yellow",
    rotation: "-2deg",
  },
  {
    media: "Le Quotidien du Tourisme",
    date: "20 octobre 2025",
    quote: (<>Faire du <strong className="text-teal font-semibold not-italic">voyage communautaire à impact</strong> le levier le plus puissant de <strong className="text-teal font-semibold not-italic">transformation de l'industrie touristique</strong>.</>),
    url: "https://www.quotidiendutourisme.com/e-tourisme/suite-start-up-iftm-top-resa-2025-le-tourisme-et-la-creator-economy-969002.php",
    color: "coral",
    rotation: "3deg",
  },
  {
    media: "TOM.travel",
    date: "26 mars 2025",
    quote: (<>Sankofa Travel Studio rejoint Provence Tourisme Innovation avec l'ambition de <strong className="text-teal font-semibold not-italic">démocratiser les séjours à impact</strong> à l'aide des <strong className="text-teal font-semibold not-italic">influenceurs</strong>.</>),
    url: "https://www.tom.travel/2025/03/26/sankofa-collabore-avec-des-influenceurs-pour-organiser-des-sejours-a-impact/",
    color: "teal",
    rotation: "-4deg",
  },
  {
    media: "Gomet'",
    date: "14 mars 2025",
    quote: (<>Une solution qui permet aux <strong className="text-teal font-semibold not-italic">créateurs de contenus</strong> d'organiser des <strong className="text-teal font-semibold not-italic">voyages pour leur communauté</strong>.</>),
    url: "https://gomet.net/provence-travel-innovation-devoile-sa-promotion-2025/",
    color: "yellow",
    rotation: "2deg",
  },
  {
    media: "L'Escalator",
    date: "2025",
    quote: (<>La <strong className="text-teal font-semibold not-italic">première agence en France</strong> à accompagner les créateurs dans la conception, la vente et l'organisation de <strong className="text-teal font-semibold not-italic">voyages immersifs</strong> avec leur communauté, dans un cadre 100&nbsp;% légal et avec un <strong className="text-teal font-semibold not-italic">impact local positif</strong>.</>),
    url: "https://lescalator.com/startups/sankofa-travel-studio/",
    color: "coral",
    rotation: "-3deg",
  },
];

function useRevealEach() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = container.querySelectorAll(".press-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function PressMentions() {
  const titleRef = useRef(null);
  const listRef = useRevealEach();

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="presse" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          ref={titleRef}
          className="reveal font-heading font-bold text-4xl md:text-5xl text-teal tracking-tight text-center mb-20"
        >
          Ils parlent de nous
        </h2>

        <div ref={listRef} className="flex flex-col">
          {pressArticles.map((article, i) => {
            const isRight = i % 2 === 1;
            return (
              <div
                key={article.media}
                className={`press-item reveal ${isRight ? "from-right" : "from-left"} py-10 ${i < pressArticles.length - 1 ? "border-b border-teal/10" : ""}`}
              >
                <div className={`md:w-3/5 ${isRight ? "md:ml-auto md:text-right" : ""}`}>
                  <div className={`mb-5 ${isRight ? "md:flex md:justify-end" : ""}`}>
                    <StickerLabel
                      text={article.media}
                      color={article.color}
                      size="sm"
                      style={{ transform: `rotate(${article.rotation})` }}
                    />
                  </div>

                  <blockquote className="font-body text-gray-700 text-lg md:text-xl leading-relaxed italic mb-5">
                    «&nbsp;{article.quote}&nbsp;»
                  </blockquote>

                  <div className={`flex items-center gap-3 font-body text-sm ${isRight ? "md:justify-end" : ""}`}>
                    <span className="text-gray-400">{article.date}</span>
                    <span className="text-teal/20">·</span>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-coral hover:text-coral/80 transition-colors"
                    >
                      {article.linkLabel || "Lire l'article"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-3.5 h-3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
