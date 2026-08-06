import { useState } from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const faqs = [
  {
    question: "C'est quoi exactement Sanko ?",
    answer:
      "Sanko est une marque communautaire de voyage qui permet aux créateurs de contenu d'organiser des voyages de groupe avec leurs communautés. On s'occupe de toute la logistique - toi, tu vis l'expérience.",
  },
  {
    question: "Comment je réserve une place ?",
    answer:
      "Rendez-vous sur la page du voyage qui t'intéresse, remplis le formulaire d'inscription et on te recontacte pour finaliser ta réservation. Simple, rapide, humain.",
  },
  {
    question: "Est-ce que c'est sérieux ?",
    answer:
      "Absolument. Sanko est immatriculée auprès d'Atout France, assurée par Groupama en RC Pro voyage, et encadrée légalement. Ton argent et ton voyage sont protégés.",
  },
  {
    question: "Et si le voyage est annulé ?",
    answer:
      "En cas d'annulation de notre part, tu es intégralement remboursé. Nos conditions générales de vente détaillent toutes les garanties. Zéro risque pour toi.",
  },
  {
    question: "Je suis créateur·ice - comment ça marche ?",
    answer:
      "Tu nous présentes ton idée de voyage, on construit ensemble un programme sur-mesure pour ta communauté. On gère la logistique, tu gères le lien avec ta communauté. Rendez-vous sur la page Créateur pour en savoir plus.",
  },
  {
    question: "Je suis une marque - comment activer ?",
    answer: (
      <>
        Associe ton image à des expériences de voyage uniques et touche une
        audience engagée de voyageurs et de communautés de créateurs.{" "}
        <Link to="/marques" className="text-coral underline hover:text-coral/80">
          Rendez-vous sur la page Marques
        </Link>{" "}
        pour découvrir nos offres de partenariat.
      </>
    ),
  },
];

export default function HomeFAQ() {
  const ref = useScrollReveal();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="faq" className="bg-teal py-24 px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        <h2 className="reveal font-heading font-bold text-4xl md:text-5xl text-white tracking-tight text-center mb-14">
          Questions fréquentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="reveal bg-white rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-heading font-semibold text-teal text-lg pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-coral flex-shrink-0 transition-transform duration-300 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === i ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="font-body text-gray-600 leading-relaxed px-6 pb-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-heading font-semibold text-white hover:text-white/80 transition-colors"
          >
            Une autre question ? Contactez-nous
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
    </section>
  );
}
