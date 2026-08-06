import useScrollReveal from "../hooks/useScrollReveal";
import StickerLabel from "./StickerLabel";

const tiers = [
  {
    id: "secondary",
    label: "PARTENAIRE SECONDAIRE",
    title: "Une présence naturelle et ponctuelle.",
    description:
      "Votre marque s'intègre à une étape du voyage - préparation, activité, quotidien du séjour. Utile, contextualisé, authentique.",
    useCases: "eSIM · cosmétique voyage · bagagerie · accessoires · nutrition",
    objectives: "Visibilité · Considération",
    variant: "light",
  },
  {
    id: "primary",
    label: "PARTENAIRE PRINCIPAL",
    title: "Une présence structurante sur tout le voyage.",
    description:
      "Votre marque accompagne le créateur et sa communauté sur l'ensemble du séjour. Un rôle visible, une intégration cohérente avec l'ADN du voyage.",
    useCases:
      "Fintech voyage · mobilité · équipement lifestyle · marque outdoor",
    objectives: "Visibilité · Engagement · Conversion",
    variant: "dark",
  },
  {
    id: "exclusive",
    label: "PARTENAIRE EXCLUSIF",
    title: "Vous portez le voyage.",
    description:
      "La marque finance intégralement le voyage et en est l'unique partenaire. Le récit entier vous appartient - de la communication pré-départ au contenu post-retour.",
    useCases: "Banque · télécom · acteur premium",
    objectives: "Notoriété exclusive · Contenu long format · Brand love",
    variant: "amber",
  },
];

const variantStyles = {
  light: {
    card: "bg-white ring-1 ring-teal/10",
    label: "text-teal bg-teal/10",
    title: "text-teal",
    desc: "text-gray-600",
    tag: "bg-gray-light text-gray-700",
    objectives: "text-teal",
    cta: "bg-teal text-white hover:bg-teal/90",
  },
  dark: {
    card: "bg-teal",
    label: "text-white bg-white/15",
    title: "text-white",
    desc: "text-white/85",
    tag: "bg-white/15 text-white/90",
    objectives: "text-white/90",
    cta: "bg-white text-teal hover:bg-white/90",
  },
  amber: {
    card: "bg-yellow",
    label: "text-white bg-white/20",
    title: "text-white",
    desc: "text-white/90",
    tag: "bg-white/20 text-white/90",
    objectives: "text-white/90",
    cta: "bg-white text-yellow hover:bg-white/90",
  },
};

export default function PartnershipTiers() {
  const ref = useScrollReveal();

  return (
    <section className="bg-beige py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <StickerLabel
            text="3 niveaux"
            color="teal"
            className="mx-auto mb-4"
          />
          <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-teal">
            Choisissez votre niveau de présence.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const s = variantStyles[tier.variant];
            return (
              <div
                key={tier.id}
                className={`reveal scale-up ${s.card} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                <span
                  className={`inline-block font-accent font-semibold text-xs px-3 py-1 rounded-full mb-4 self-start ${s.label}`}
                >
                  {tier.label}
                </span>
                <h3
                  className={`font-heading font-bold text-xl mb-3 ${s.title}`}
                >
                  {tier.title}
                </h3>
                <p
                  className={`font-body text-sm leading-relaxed mb-5 ${s.desc}`}
                >
                  {tier.description}
                </p>
                <p
                  className={`font-body text-xs rounded-lg px-3 py-2 mb-4 ${s.tag}`}
                >
                  {tier.useCases}
                </p>
                <p
                  className={`font-heading font-semibold text-sm mb-6 ${s.objectives}`}
                >
                  {tier.objectives}
                </p>
                <a
                  href="#formulaire-marques"
                  className={`mt-auto block text-center font-body font-semibold px-6 py-3 rounded-full transition-colors ${s.cta}`}
                >
                  En savoir plus
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
