import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const sections = [
  {
    title: "Éditeur du site",
    content: (
      <>
        <p>
          Le site <strong>withsanko.com</strong> est édité par :
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Sanko Travel Studio SAS</li>
          <li>Siège social : 63 avenue de Saxe, 69003 Lyon, France</li>
          <li>SIRET : 932 923 610 00018</li>
          <li>RCS Lyon</li>
          <li>Capital social : 1 000 €</li>
          <li>Directeur de la publication : Samuel Music-Music</li>
          <li>
            Email :{" "}
            <a
              href="mailto:contact@withsanko.com"
              className="text-teal underline hover:text-teal/80 transition-colors"
            >
              contact@withsanko.com
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Immatriculation et garantie financière",
    content: (
      <>
        <p>
          Sanko Travel Studio SAS est immatriculée au registre des Opérateurs de
          Voyages et de Séjours auprès d'Atout France sous le numéro{" "}
          <strong>IM069240009</strong>.
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>
            Garantie financière : GROUPAMA ASSURANCE-CRÉDIT & CAUTION, 8-10 rue
            d'Astorg, 75008 Paris
          </li>
          <li>
            Assurance Responsabilité Civile Professionnelle : HISCOX SA, 19 rue
            Louis le Grand, 75002 Paris - contrat n° HA RCP0587224
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Hébergement du site",
    content: (
      <p>
        Le site est hébergé par Cloudflare, Inc. - 101 Townsend Street, San
        Francisco, CA 94107, États-Unis. Site web :{" "}
        <a
          href="https://www.cloudflare.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal underline hover:text-teal/80 transition-colors"
        >
          cloudflare.com
        </a>
      </p>
    ),
  },
  {
    title: "Propriété intellectuelle",
    content: (
      <>
        <p>
          L'ensemble du contenu du site withsanko.com (textes, images, vidéos,
          logos, éléments graphiques, icônes, mise en page) est la propriété
          exclusive de Sanko Travel Studio SAS ou de ses partenaires, et est
          protégé par les lois françaises et internationales relatives à la
          propriété intellectuelle.
        </p>
        <p className="mt-3">
          Toute reproduction, représentation, modification, publication,
          adaptation ou exploitation de tout ou partie du contenu du site, quel
          que soit le moyen ou le procédé utilisé, est interdite sans
          l'autorisation écrite préalable de Sanko Travel Studio SAS.
        </p>
        <p className="mt-3">
          Le nom "Sanko", le logo et le symbole de l'oiseau Sankofa sont des
          éléments de marque protégés.
        </p>
      </>
    ),
  },
  {
    title: "Crédits et sources des images",
    content: (
      <p>
        Les photographies et vidéos utilisées sur le site proviennent de banques
        d'images libres de droits (Unsplash, Pexels) ou sont la propriété de
        Sanko Travel Studio SAS. Les crédits individuels sont disponibles sur
        demande à{" "}
        <a
          href="mailto:contact@withsanko.com"
          className="text-teal underline hover:text-teal/80 transition-colors"
        >
          contact@withsanko.com
        </a>
        .
      </p>
    ),
  },
  {
    title: "Responsabilité",
    content: (
      <>
        <p>
          Sanko Travel Studio SAS s'efforce de fournir sur le site des
          informations aussi précises que possible. Toutefois, elle ne pourra
          être tenue responsable des omissions, des inexactitudes ou des
          carences dans la mise à jour, qu'elles soient de son fait ou du fait
          de tiers partenaires.
        </p>
        <p className="mt-3">
          Les liens hypertextes mis en place dans le cadre du site en direction
          d'autres ressources sur Internet ne sauraient engager la
          responsabilité de Sanko Travel Studio SAS.
        </p>
      </>
    ),
  },
  {
    title: "Données personnelles",
    content: (
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD)
        et à la loi Informatique et Libertés, vous disposez de droits sur vos
        données personnelles. Pour en savoir plus sur la collecte et le
        traitement de vos données, consultez notre{" "}
        <Link
          to="/politique-de-confidentialite"
          className="text-teal underline hover:text-teal/80 transition-colors font-semibold"
        >
          Politique de confidentialité
        </Link>
        .
      </p>
    ),
  },
];

export default function MentionsLegales() {
  const ref = useScrollReveal();

  return (
    <main>
      {/* Hero */}
      <section className="bg-teal pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-3">
            Mentions légales
          </h1>
          <p className="font-body text-white/80 text-sm">
            Dernière mise à jour : 31 juillet 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-beige py-20 px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          {sections.map((section, i) => (
            <div
              key={i}
              className={`reveal font-body text-gray-700 text-base leading-relaxed ${
                i < sections.length - 1
                  ? "border-b border-gray-200 pb-8 mb-8"
                  : ""
              }`}
            >
              <h2 className="font-heading font-bold text-2xl text-teal mb-4">
                {section.title}
              </h2>
              {section.content}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
