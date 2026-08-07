import useScrollReveal from "../hooks/useScrollReveal";
import StickerLabel from "./StickerLabel";

const tiers = [
  {
    id: "secondary",
    label: "PARTENAIRE SECONDAIRE",
    title: "Une présence naturelle et ponctuelle.",
    description:
      "Votre marque apparaît à un moment précis du voyage. La prépa, une activité, le quotidien sur place. Un clin d'œil naturel, pas un panneau pub.",
    useCases: "eSIM · cosmétique voyage · bagagerie · accessoires · nutrition",
    variant: "light",
  },
  {
    id: "primary",
    label: "PARTENAIRE PRINCIPAL",
    title: "Votre marque accompagne tout le séjour.",
    description:
      "Vous êtes là du début à la fin. Visible, utile, intégré au récit du créateur. Pas en arrière-plan, dans l'histoire.",
    useCases:
      "Fintech voyage · mobilité · équipement lifestyle · marque outdoor",
    variant: "light",
  },
  {
    id: "exclusive",
    label: "PARTENAIRE EXCLUSIF",
    title: "Vous portez le voyage.",
    description:
      "Vous financez le voyage, vous êtes le seul partenaire. Toute l'histoire est la vôtre, de l'annonce du départ jusqu'au dernier vlog de retour.",
    useCases: "Banque · télécom · acteur premium · assurance · automobile",
    variant: "light",
  },
];

const variantStyles = {
  light: {
    card: "bg-white ring-1 ring-teal/10",
    label: "text-teal bg-teal/10",
    title: "text-teal",
    desc: "text-gray-600",
    tag: "bg-gray-light text-gray-700",

    cta: "bg-teal text-white hover:bg-teal/90",
  },
  dark: {
    card: "bg-teal",
    label: "text-white bg-white/15",
    title: "text-white",
    desc: "text-white/85",
    tag: "bg-white/15 text-white/90",

    cta: "bg-white text-teal hover:bg-white/90",
  },
  amber: {
    card: "bg-yellow",
    label: "text-white bg-white/20",
    title: "text-white",
    desc: "text-white/90",
    tag: "bg-white/20 text-white/90",

    cta: "bg-white text-yellow hover:bg-white/90",
  },
};

export default function PartnershipTiers() {
  const ref = useScrollReveal();

  return (
    <section className="bg-teal py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <StickerLabel
            text="3 niveaux"
            color="yellow"
            className="mx-auto mb-4"
          />
          <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-white">
            Trois façons de s'intégrer.
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
                <h3
                  className={`font-heading font-bold text-xl mb-3 ${s.title}`}
                >
                  {tier.title}
                </h3>
                <p
                  className={`font-body text-sm leading-relaxed mb-5 flex-1 ${s.desc}`}
                >
                  {tier.description}
                </p>
                <p
                  className={`font-body text-xs rounded-lg px-3 py-2 mb-6 min-h-[2.5rem] ${s.tag}`}
                >
                  {tier.useCases}
                </p>
                <a
                  href="#formulaire-marques"
                  className={`block text-center font-body font-semibold px-6 py-3 rounded-full transition-colors ${s.cta}`}
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
