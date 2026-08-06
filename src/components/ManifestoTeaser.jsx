import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import StickerLabel from "./StickerLabel";

export default function ManifestoTeaser() {
  const ref = useScrollReveal();

  return (
    <section className="bg-white py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="reveal rounded-2xl overflow-hidden aspect-[4/3] order-2 md:order-1">
            <img
              src="/images/paysages/paysage_005.jpg"
              alt="Groupe de voyageurs Sanko"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Texte */}
          <div className="order-1 md:order-2">
            <div className="reveal mb-4">
              <StickerLabel text="Notre conviction" color="coral" />
            </div>
            <h2 className="reveal font-heading font-bold text-teal text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              Le tourisme de masse détruit les territoires. On a choisi un autre
              chemin.
            </h2>
            <p className="reveal font-body text-gray-600 text-lg leading-relaxed mb-8">
              Chez Sanko, chaque voyage est pensé pour respecter les communautés
              locales, créer du lien authentique et laisser une empreinte
              positive. On croit que voyager, c'est d'abord une rencontre - avec
              les autres, et avec soi-même.
            </p>
            <Link
              to="/notre-concept"
              className="reveal inline-flex items-center gap-2 font-heading font-semibold text-coral hover:text-coral/80 transition-colors"
            >
              Découvrir le concept
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
