import { Link } from "react-router-dom";

const sections = [
  {
    intro: true,
    content: (
      <p>
        Chez Sankofa, nous attachons une grande importance à la protection de
        vos données personnelles et au respect de votre vie privée. La présente
        politique de confidentialité décrit les types de données que nous
        collectons, la façon dont elles sont utilisées, ainsi que vos droits
        concernant ces informations, conformément au Règlement Général sur la
        Protection des Données (RGPD) et à la loi française sur la protection
        des données.
      </p>
    ),
  },
  {
    title: "Responsable du traitement",
    content: (
      <>
        <p>
          Le responsable du traitement des données collectées sur ce site est :
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>Nom de l'entreprise : Sankofa Travel Studio</li>
          <li>Adresse : 114, rue de la République 13002 Marseille</li>
          <li>
            E-mail :{" "}
            <a
              href="mailto:contact@withsanko.com"
              className="text-teal underline hover:text-teal/80 transition-colors"
            >
              contact@withsanko.com
            </a>
          </li>
          <li>Représenté par : Mélany Fabre</li>
        </ul>
      </>
    ),
  },
  {
    title: "Données collectées",
    content: (
      <>
        <p>Nous collectons les données suivantes via nos formulaires :</p>
        <p className="font-semibold text-teal mt-4 mb-2">
          1. Pour les ambassadeurs :
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Nom et prénom</li>
          <li>Adresse e-mail</li>
          <li>Comptes de réseaux sociaux</li>
          <li>Secteurs d'intérêt</li>
        </ul>
        <p className="font-semibold text-teal mt-4 mb-2">
          2. Pour les voyageurs :
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Nom et prénom</li>
          <li>Adresse e-mail</li>
          <li>Préférences de voyage</li>
          <li>
            Informations supplémentaires à renseigner dans les formulaires
          </li>
        </ul>
        <p className="font-semibold text-teal mt-4 mb-2">
          3. Documents d'identité et de voyage (le cas échéant) :
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Copie de la pièce d'identité ou du passeport</li>
          <li>Autorisation ESTA ou visa</li>
          <li>
            Toute autre information nécessaire aux formalités de voyage (numéro
            de réservation, informations liées aux transporteurs, etc.)
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Objectifs du traitement",
    content: (
      <>
        <p>Les données collectées sont utilisées pour :</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>
            Gérer les inscriptions des créateurs et ambassadeurs potentiels.
          </li>
          <li>Proposer des voyages personnalisés aux utilisateurs.</li>
          <li>
            Effectuer les démarches administratives liées au voyage, notamment :
            les demandes de visa ou d'ESTA, les formalités douanières et
            d'immigration, l'enregistrement auprès de certains hébergements
            lorsque la réglementation locale l'exige, la souscription
            d'assurances voyage, l'assistance et le rapatriement en cas
            d'urgence, la vérification anti-fraude, ainsi que les démarches
            auprès de prestataires tiers (location de véhicule, activités)
            nécessitant une preuve d'identité.
          </li>
          <li>
            Communiquer des informations relatives à nos services, offres, et
            initiatives.
          </li>
          <li>
            Améliorer nos services grâce à une meilleure compréhension des
            besoins de nos utilisateurs.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Bases légales du traitement",
    content: (
      <>
        <p>Le traitement de vos données repose sur :</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>
            <strong>Votre consentement</strong>, obtenu lors du remplissage de
            nos formulaires.
          </li>
          <li>
            <strong>L'exécution d'un contrat</strong>, notamment pour les
            services de voyage.
          </li>
          <li>
            <strong>Notre intérêt légitime</strong>, notamment pour la gestion
            de la relation client et la prévention des fraudes.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Partage des données",
    content: (
      <>
        <p>
          Vos données personnelles ne sont partagées qu'avec les tiers suivants
          :
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>
            <strong>Nos partenaires locaux</strong> (ex. : agences de voyage)
            dans le cadre de la gestion de vos voyages.
          </li>
          <li>
            <strong>Prestataires de services techniques</strong> (ex. :
            hébergement de données, maintenance du site), notamment{" "}
            <strong>Cloudflare</strong> (hébergement et sécurité, protection
            anti-spam via Turnstile) et <strong>Resend</strong> (envoi d'emails
            transactionnels pour le traitement des formulaires).
          </li>
          <li>
            <strong>Autorités publiques</strong> lorsque la loi l'exige.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Documents d'identité et de voyage : traitement spécifique",
    content: (
      <>
        <p>
          Les copies de documents sensibles (passeport, ESTA, visa) que vous
          nous transmettez sont utilisées exclusivement dans le cadre de
          l'organisation de votre voyage (réservations, formalités
          administratives, transmission aux partenaires ou autorités compétentes
          lorsque cela est requis).
        </p>
        <p className="mt-3">Ces documents sont :</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>
            Stockés de manière sécurisée, avec un accès restreint aux seules
            personnes en charge de votre dossier ;
          </li>
          <li>
            Conservés uniquement pendant la durée nécessaire à la préparation et
            à la réalisation du voyage ;
          </li>
          <li>
            Supprimés définitivement dans un délai de 6 mois après la fin du
            voyage, sauf obligation légale ou contractuelle nous imposant de les
            conserver plus longtemps (par exemple en cas de litige).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Durée de conservation",
    content: (
      <>
        <p>
          Vos données personnelles sont conservées pendant une durée nécessaire
          pour atteindre les finalités prévues :
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>
            <strong>Données relatives aux créateurs et ambassadeurs</strong> : 2
            ans à compter du dernier contact.
          </li>
          <li>
            <strong>Données relatives aux voyageurs</strong> : 5 ans à compter
            de la fin du service.
          </li>
          <li>
            <strong>
              Copies de documents d'identité et de voyage (passeport, ESTA,
              visa)
            </strong>{" "}
            : 6 mois à compter de la fin du voyage.
          </li>
          <li>
            <strong>Données de facturation</strong> : 10 ans (obligations
            comptables).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Vos droits",
    content: (
      <>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>
            <strong>Droit d'accès</strong> : Obtenir une copie de vos données.
          </li>
          <li>
            <strong>Droit de rectification</strong> : Corriger des données
            inexactes ou incomplètes.
          </li>
          <li>
            <strong>Droit à l'effacement</strong> : Supprimer vos données (sous
            réserve de nos obligations légales).
          </li>
          <li>
            <strong>Droit à la portabilité</strong> : Recevoir vos données dans
            un format structuré.
          </li>
          <li>
            <strong>Droit à la limitation</strong> : Restreindre le traitement
            de vos données.
          </li>
          <li>
            <strong>Droit d'opposition</strong> : Vous opposer à certains
            traitements.
          </li>
          <li>
            <strong>Droit de retrait</strong> : Retirer votre consentement à
            tout moment.
          </li>
          <li>
            <strong>Droit de réclamation</strong> : Introduire une réclamation
            auprès de la Commission Nationale de l'Informatique et des Libertés
            (CNIL) si vous estimez que le traitement de vos données ne respecte
            pas la réglementation en vigueur (
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal underline hover:text-teal/80 transition-colors"
            >
              www.cnil.fr
            </a>
            ).
          </li>
        </ul>
        <p className="mt-4">
          Pour exercer vos droits, contactez-nous à l'adresse suivante :{" "}
          <a
            href="mailto:contact@withsanko.com"
            className="text-teal underline hover:text-teal/80 transition-colors"
          >
            contact@withsanko.com
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
      <>
        <p>
          Nous mettons en place des mesures techniques et organisationnelles
          appropriées pour protéger vos données contre toute perte, utilisation
          abusive ou accès non autorisé. Notre site utilise le protocole HTTPS
          pour sécuriser les échanges de données, et les formulaires sont
          protégés par Cloudflare Turnstile contre les soumissions automatisées.
        </p>
        <p className="mt-3">
          Les documents d'identité et de voyage sensibles font l'objet de
          mesures de protection renforcées : accès limité aux personnes
          habilitées, stockage sur des outils sécurisés, et suppression selon le
          calendrier défini ci-dessus.
        </p>
      </>
    ),
  },
  {
    title: "Portée géographique",
    content: (
      <p>
        Cette politique s'applique à l'ensemble de nos clients, quel que soit
        leur pays de résidence. Le Règlement Général sur la Protection des
        Données (RGPD) constitue notre cadre de référence pour le traitement de
        vos données personnelles ; des droits supplémentaires peuvent, le cas
        échéant, vous être accordés en application de votre législation locale.
      </p>
    ),
  },
  {
    title: "Transfert de données en dehors de l'UE",
    content: (
      <p>
        Certains prestataires peuvent être situés en dehors de l'Union
        européenne. Dans ce cas, nous nous assurons que vos données bénéficient
        d'un niveau de protection équivalent au RGPD, grâce à des clauses
        contractuelles types ou des certifications reconnues.
      </p>
    ),
  },
  {
    title: "Modification de la politique de confidentialité",
    content: (
      <p>
        Nous nous réservons le droit de modifier cette politique de
        confidentialité à tout moment. Toute modification sera publiée sur cette
        page avec une date de mise à jour.
      </p>
    ),
  },
  {
    title: "Contact",
    content: (
      <>
        <p>
          Pour toute question relative à cette politique de confidentialité,
          veuillez nous contacter à l'adresse :
        </p>
        <p className="mt-3">
          <a
            href="mailto:contact@withsanko.com"
            className="text-teal underline hover:text-teal/80 transition-colors"
          >
            contact@withsanko.com
          </a>
        </p>
        <p className="mt-6">
          Voir aussi nos{" "}
          <Link
            to="/mentions-legales"
            className="text-teal underline hover:text-teal/80 transition-colors font-semibold"
          >
            Mentions légales
          </Link>{" "}
          et nos{" "}
          <Link
            to="/conditions-generales-de-vente"
            className="text-teal underline hover:text-teal/80 transition-colors font-semibold"
          >
            Conditions générales de vente
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default function PolitiqueConfidentialite() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-teal pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-3">
            Politique de confidentialité
          </h1>
          <p className="font-body text-white/80 text-sm">
            Sankofa Travel Studio - Mise à jour le 6 août 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-beige py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {sections.map((section, i) => (
            <div
              key={i}
              className={`font-body text-gray-700 text-base leading-relaxed ${
                i < sections.length - 1
                  ? "border-b border-gray-200 pb-8 mb-8"
                  : ""
              }`}
            >
              {section.title && (
                <h2 className="font-heading font-bold text-2xl text-teal mb-4">
                  {section.title}
                </h2>
              )}
              {section.content}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
