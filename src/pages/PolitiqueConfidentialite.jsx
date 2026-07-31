import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const sections = [
  {
    title: "Responsable du traitement",
    content: (
      <>
        <p>
          Le responsable du traitement des données personnelles collectées sur
          le site withsanko.com est :
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Sanko Travel Studio SAS</li>
          <li>63 avenue de Saxe, 69003 Lyon, France</li>
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
    title: "Données collectées",
    content: (
      <>
        <p>
          Nous collectons les données suivantes selon le formulaire utilisé :
        </p>
        <p className="font-semibold text-teal mt-4 mb-2">
          Formulaire ambassadeurs / créateurs de contenu :
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone</li>
          <li>Nom de la chaîne / compte</li>
          <li>Plateforme principale (Instagram, TikTok, YouTube, etc.)</li>
          <li>Nombre d'abonnés</li>
          <li>Message libre</li>
        </ul>
        <p className="font-semibold text-teal mt-4 mb-2">
          Formulaire voyageurs / communauté :
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Prénom</li>
          <li>Adresse email</li>
          <li>Créateur de contenu suivi</li>
          <li>Destination souhaitée</li>
        </ul>
        <p className="font-semibold text-teal mt-4 mb-2">
          Formulaire de contact :
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Objet et message</li>
        </ul>
      </>
    ),
  },
  {
    title: "Objectifs du traitement",
    content: (
      <ul className="list-disc pl-6 space-y-1">
        <li>Répondre à vos demandes de contact et d'information</li>
        <li>
          Évaluer les candidatures des créateurs de contenu souhaitant organiser
          un voyage
        </li>
        <li>Constituer une liste d'intérêt pour les voyageurs potentiels</li>
        <li>
          Envoyer des communications relatives aux voyages organisés par Sanko
          (avec votre consentement)
        </li>
        <li>Améliorer nos services et notre site web</li>
      </ul>
    ),
  },
  {
    title: "Bases légales du traitement",
    content: (
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Consentement</strong> : lorsque vous remplissez un formulaire
          sur notre site, vous consentez au traitement de vos données pour les
          finalités décrites
        </li>
        <li>
          <strong>Intérêt légitime</strong> : pour améliorer nos services et
          assurer le bon fonctionnement du site
        </li>
        <li>
          <strong>Exécution contractuelle</strong> : pour la gestion des
          réservations et l'organisation des voyages
        </li>
        <li>
          <strong>Obligation légale</strong> : pour répondre à nos obligations
          comptables et fiscales
        </li>
      </ul>
    ),
  },
  {
    title: "Partage des données",
    content: (
      <>
        <p>
          Vos données personnelles ne sont jamais vendues à des tiers. Elles
          peuvent être partagées avec :
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>
            <strong>Resend</strong> (service d'envoi d'emails transactionnels) -
            pour le traitement des formulaires
          </li>
          <li>
            <strong>Cloudflare</strong> (hébergement et sécurité) - pour la
            protection anti-spam (Turnstile)
          </li>
          <li>
            <strong>Partenaires locaux</strong> (hébergeurs, guides) -
            uniquement les données nécessaires à l'organisation de votre voyage,
            et seulement après réservation confirmée
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Durée de conservation",
    content: (
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Données de contact et d'intérêt</strong> : 3 ans à compter de
          la dernière interaction
        </li>
        <li>
          <strong>Données de réservation</strong> : 5 ans après la fin du voyage
          (obligations légales)
        </li>
        <li>
          <strong>Données de facturation</strong> : 10 ans (obligations
          comptables)
        </li>
      </ul>
    ),
  },
  {
    title: "Vos droits",
    content: (
      <>
        <p>
          Conformément au RGPD, vous disposez des droits suivants sur vos
          données personnelles :
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>
            <strong>Droit d'accès</strong> : obtenir la confirmation que vos
            données sont traitées et en recevoir une copie
          </li>
          <li>
            <strong>Droit de rectification</strong> : corriger des données
            inexactes ou incomplètes
          </li>
          <li>
            <strong>Droit à l'effacement</strong> : demander la suppression de
            vos données
          </li>
          <li>
            <strong>Droit à la limitation</strong> : restreindre le traitement
            de vos données
          </li>
          <li>
            <strong>Droit à la portabilité</strong> : recevoir vos données dans
            un format structuré et lisible
          </li>
          <li>
            <strong>Droit d'opposition</strong> : vous opposer au traitement de
            vos données
          </li>
          <li>
            <strong>Droit de retirer votre consentement</strong> : à tout
            moment, sans affecter la licéité du traitement antérieur
          </li>
        </ul>
        <p className="mt-4">
          Pour exercer ces droits, contactez-nous à{" "}
          <a
            href="mailto:contact@withsanko.com"
            className="text-teal underline hover:text-teal/80 transition-colors"
          >
            contact@withsanko.com
          </a>
          . Nous répondrons dans un délai maximum de 30 jours.
        </p>
        <p className="mt-3">
          Vous pouvez également introduire une réclamation auprès de la CNIL :{" "}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal underline hover:text-teal/80 transition-colors"
          >
            www.cnil.fr
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Cookies",
    content: (
      <>
        <p>
          Notre site utilise uniquement des cookies essentiels au fonctionnement
          :
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>
            <strong>Cloudflare Turnstile</strong> : cookie de sécurité anti-spam
            pour la protection des formulaires. Ce cookie est strictement
            nécessaire et ne requiert pas de consentement.
          </li>
          <li>
            <strong>Google Fonts</strong> : chargement des polices de
            caractères. Aucun cookie de suivi n'est déposé, mais une requête est
            envoyée aux serveurs de Google.
          </li>
          <li>
            <strong>Préférence cookies</strong> : un cookie local (
            <code className="text-teal bg-teal/5 px-1 rounded">
              cookie-consent
            </code>
            ) enregistre votre choix d'acceptation ou de refus.
          </li>
        </ul>
        <p className="mt-3">
          Nous n'utilisons aucun cookie publicitaire, de tracking ou d'analyse
          comportementale. Vous pouvez modifier vos préférences à tout moment en
          supprimant les cookies de votre navigateur.
        </p>
      </>
    ),
  },
  {
    title: "Sécurité des données",
    content: (
      <p>
        Nous mettons en place des mesures techniques et organisationnelles
        appropriées pour protéger vos données personnelles contre la perte,
        l'utilisation abusive, l'accès non autorisé, la divulgation ou la
        destruction. Notre site utilise le protocole HTTPS pour sécuriser les
        échanges de données, et les formulaires sont protégés par Cloudflare
        Turnstile contre les soumissions automatisées.
      </p>
    ),
  },
  {
    title: "Transfert de données en dehors de l'UE",
    content: (
      <p>
        Certains de nos prestataires techniques (Cloudflare, Resend) peuvent
        traiter des données en dehors de l'Union Européenne. Dans ce cas, nous
        nous assurons que des garanties appropriées sont en place, notamment les
        clauses contractuelles types approuvées par la Commission Européenne,
        afin de protéger vos données conformément au RGPD.
      </p>
    ),
  },
  {
    title: "Modification de la politique",
    content: (
      <p>
        Nous nous réservons le droit de modifier cette politique de
        confidentialité à tout moment. En cas de modification substantielle,
        nous mettrons à jour la date de dernière mise à jour en haut de cette
        page. Nous vous encourageons à consulter régulièrement cette page pour
        rester informé.
      </p>
    ),
  },
  {
    title: "Contact",
    content: (
      <>
        <p>
          Pour toute question relative à cette politique de confidentialité ou
          au traitement de vos données :
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>
            Email :{" "}
            <a
              href="mailto:contact@withsanko.com"
              className="text-teal underline hover:text-teal/80 transition-colors"
            >
              contact@withsanko.com
            </a>
          </li>
          <li>
            Adresse : Sanko Travel Studio SAS, 63 avenue de Saxe, 69003 Lyon,
            France
          </li>
        </ul>
        <p className="mt-6">
          Voir aussi nos{" "}
          <Link
            to="/mentions-legales"
            className="text-teal underline hover:text-teal/80 transition-colors font-semibold"
          >
            Mentions légales
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default function PolitiqueConfidentialite() {
  const ref = useScrollReveal();

  return (
    <main>
      {/* Hero */}
      <section className="bg-teal pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-3">
            Politique de confidentialité
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
