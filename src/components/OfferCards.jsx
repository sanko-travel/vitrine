import useScrollReveal from "../hooks/useScrollReveal";
import StickerLabel from "./StickerLabel";

const offers = [
  {
    label: "OFFRE 1",
    accent: "coral",
    title: "Tu veux créer un voyage avec ta communauté.",
    description:
      "Tu as l'idée, l'univers, les abonnés. Sanko s'occupe du reste - de la co-construction du programme jusqu'à la gestion des imprévus sur place.",
    itemsLabel: "Ce qu'on gère :",
    items: [
      "Sondage de ta communauté",
      "Co-construction du voyage adapté à ton ADN",
      "Production complète (hébergements, prestataires locaux, programme)",
      "Page d'inscription + paiements sécurisés",
      "Contrats participants",
      "Cadre légal complet",
      "Back-office pendant le voyage",
      "Bilan post-voyage",
    ],
    keepLabel: "Ce que tu gardes :",
    keepText: "Ton univers. Ton contenu. Ta relation avec ta communauté.",
    cta: "Je veux créer mon voyage",
  },
  {
    label: "OFFRE 2",
    accent: "teal",
    title:
      "Tu organises déjà des voyages avec ta commu - mais tu veux être en règle.",
    description:
      "Tu sais faire. Tu as l'expérience. Ce qui manque, c'est le cadre légal. On le porte pour toi - sans que tu perdes le contrôle de quoi que ce soit.",
    itemsLabel: "Ce qu'on apporte :",
    items: [
      "Immatriculation Atout France portée par Sanko",
      "Garantie financière 350\u202F000\u202F€",
      "RC Pro tourisme plafond 1,5\u202FM€",
      "Contrats participants conformes",
      "Commission : 10% sur le CA du voyage",
    ],
    keepLabel: null,
    keepText:
      "Tes abonnés méritent d'être protégés. Quand tu organises avec Sanko, leur argent est garanti. Si quoi que ce soit tourne mal, ils sont couverts. C'est ça, prendre soin de ta commu.",
    cta: "Je veux régulariser mon activité",
  },
];

export default function OfferCards() {
  const ref = useScrollReveal();

  return (
    <section className="bg-white py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <StickerLabel
            text="Deux façons de travailler"
            color="coral"
            className="mx-auto mb-4"
          />
          <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-teal">
            Choisis le niveau d'accompagnement qui te correspond.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.label}
              className="reveal scale-up bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col ring-1 ring-teal/5"
            >
              <span
                className={`inline-block font-accent font-semibold text-xs px-3 py-1 rounded-full mb-4 self-start ${
                  offer.accent === "coral"
                    ? "bg-coral/10 text-coral"
                    : "bg-teal/10 text-teal"
                }`}
              >
                {offer.label}
              </span>
              <h3 className="font-heading font-bold text-xl text-teal mb-3">
                {offer.title}
              </h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">
                {offer.description}
              </p>
              <p className="font-heading font-semibold text-teal text-sm mb-3">
                {offer.itemsLabel}
              </p>
              <ul className="space-y-2 mb-6">
                {offer.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        offer.accent === "coral" ? "text-coral" : "text-teal"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <span className="font-body text-gray-700 text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                {offer.keepLabel && (
                  <p className="font-heading font-semibold text-teal text-sm mb-2">
                    {offer.keepLabel}
                  </p>
                )}
                <p className="font-body text-gray-600 text-sm italic leading-relaxed mb-6">
                  {offer.keepText}
                </p>
                <a
                  href="#formulaire"
                  className={`block text-center font-body font-semibold px-6 py-3 rounded-full transition-colors ${
                    offer.accent === "coral"
                      ? "bg-coral text-white hover:bg-coral/90"
                      : "bg-yellow text-white hover:bg-yellow/90"
                  }`}
                >
                  {offer.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
