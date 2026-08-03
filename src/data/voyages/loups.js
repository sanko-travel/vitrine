export default {
  slug: "france-loups-guslegus",
  destination: "Sur la trace des Loups",
  subtitle: "avec @guslegus",

  facts: {
    dates: "23 - 27 septembre 2026",
    duration: "5 jours",
    groupNote: "Places limitées",
    price: "1 200",
  },

  heroImage: "/images/voyages/loups/hero.jpg",

  intro: {
    heading: "Sur la trace des Loups",
    paragraphs: [
      "Du 23 au 27 septembre 2026, marchez sur le territoire d'un animal aussi fascinant qu'invisible dans le Parc National du Mercantour.",
      "Ce séjour n'a pas pour objectif de chercher le loup ni de l'observer à tout prix, mais de comprendre sa présence et d'apprendre à lire les signes qu'il laisse derrière lui.",
      "Entre crêtes panoramiques, forêts, lacs d'altitude et Vallée des Merveilles, nous avancerons au rythme de la montagne.",
      "Une aventure à la fois humaine et sauvage, entre exploration, contemplation et compréhension de cette région française.",
    ],
  },

  creator: {
    name: "Gus",
    handle: "@guslegus",
    image: "/images/voyages/loups/creator.jpg",
    bio: [
      "Passionné de randonnée, de trek et de voyage en pleine nature, Gus partage depuis plusieurs années ses aventures à travers les montagnes et les grands espaces sauvages.",
      "À travers ses contenus, il inspire une communauté de voyageurs et de randonneurs en quête d'évasion, de dépassement de soi et de reconnexion à la nature.",
      "Pour ce séjour dans le Mercantour, Gus t'invite à partager une aventure collective au cœur du territoire du loup. Entre sentiers de montagne, nuit en bivouac, découverte de la faune sauvage et immersion dans l'un des massifs les plus préservés de France.",
    ],
  },

  highlights: [
    {
      title: "Le loup du Mercantour",
      subtitle: "Comprendre sa présence",
      description:
        "Le loup est présent dans le Mercantour depuis les années 1990. Animal sauvage et extrêmement furtif, sa présence est bien réelle\u00a0: empreintes, indices de passage et équilibre naturel des écosystèmes témoignent de son rôle essentiel.",
      image: "/images/voyages/loups/highlight-1.jpg",
    },
    {
      title: "Vallée des Merveilles",
      subtitle: "Archéologie & nature",
      description:
        "Accompagnés d'un spécialiste, exploration de la Vallée des Merveilles après le passage du Col du Diable et des lacs d'altitude. Un espace naturel où la faune sauvage évolue librement, dans un équilibre fragile.",
      image: "/images/voyages/loups/highlight-2.jpg",
    },
    {
      title: "Bivouac & étoiles",
      subtitle: "Nuit en pleine nature",
      description:
        "Installation du bivouac au plus près de la nature. À la tombée de la nuit, le brame du cerf résonne. Soirée d'observation des étoiles avec du matériel professionnel.",
      image: "/images/voyages/loups/highlight-3.jpg",
    },
    {
      title: "Rencontres pastorales",
      subtitle: "Bergers & cohabitation",
      description:
        "Rencontre avec un berger ou une éleveuse pour aborder concrètement la cohabitation entre activités humaines et faune sauvage, notamment le loup. Une crête panoramique offrant une lecture spectaculaire des paysages du Mercantour.",
      image: "/images/voyages/loups/highlight-4.jpg",
    },
  ],

  itinerary: [
    {
      day: 1,
      title: "Début de l'aventure",
      description:
        "Arrivée à Nice puis montée progressive vers les montagnes par le Train des Merveilles. Le paysage change, la ville s'efface, et tu entres doucement dans l'univers du Mercantour. Première nuit en refuge, au cœur du massif, pour commencer à se relier à la montagne et à son atmosphère si particulière.",
      accommodation: "Nuit en refuge avec pension complète",
    },
    {
      day: 2,
      title: "Premiers signes de la vie sauvage",
      description:
        "Début de l'itinérance sur des sentiers accessibles entre forêts de mélèzes et panoramas ouverts sur le cœur du Parc National. En fin de journée, installation du bivouac au plus près de la nature. À la tombée de la nuit, le territoire s'anime et le brame du cerf résonne. Soirée d'observation des étoiles avec du matériel professionnel. Environ 10\u00a0km – 550\u00a0m D+.",
      accommodation: "Nuit en bivouac avec pension complète",
    },
    {
      day: 3,
      title: "Au cœur de la Vallée des Merveilles",
      description:
        "Après le passage du Col du Diable et des lacs d'altitude, entrée dans la Vallée des Merveilles accompagnés d'un spécialiste. Au-delà de son aspect archéologique, cette vallée est aussi un espace naturel où la faune sauvage évolue librement. Environ 9\u00a0km – 500\u00a0m D+.",
      accommodation: "Nuit en refuge avec pension complète",
    },
    {
      day: 4,
      title: "Rencontres et grandes traversées",
      description:
        "Départ par une crête panoramique offrant une lecture spectaculaire des paysages du Mercantour. Selon les opportunités, rencontre avec un berger ou une éleveuse pour aborder concrètement la cohabitation entre activités humaines et faune sauvage, notamment le loup. Environ 8\u00a0km – 400\u00a0m D+.",
      accommodation: "Nuit en refuge avec pension complète",
    },
    {
      day: 5,
      title: "Derniers instants dans le massif",
      description:
        "Dernière matinée dans le massif. Deux options sont proposées selon le groupe\u00a0: une descente à pied ou un transfert plus direct en voiture vers la vallée pour rejoindre Nice en bus. Retour vers Nice en fin de journée.",
      accommodation: null,
    },
  ],

  pricing: {
    price: "1 200",
    currency: "€",
    perPerson: true,
    deposit: "30%",
    bookingUrl: "#", // TODO: ajouter le lien Google Forms
    paymentTerms: [
      "Un acompte de 30\u00a0% vous est demandé à l'inscription par CB.",
      "Le solde doit être réglé 1 mois avant la date de départ du voyage.",
      "Des facilités de paiement ont été mises en place.",
      "Possibilité d'échelonner le paiement tous les mois jusqu'à la date limite de solde.",
    ],
    cancellation: [
      {
        delay: "Plus de 60 jours",
        retention: "Seul l'acompte n'est pas restitué",
      },
      {
        delay: "De 60 à 30 jours",
        retention: "50\u00a0% du montant total retenu",
      },
      {
        delay: "De 30 à 7 jours",
        retention: "75\u00a0% du montant total retenu",
      },
      {
        delay: "Moins de 7 jours",
        retention: "100\u00a0% du montant total retenu",
      },
    ],
    cancellationNote:
      "Si Sanko se trouve dans l'obligation d'annuler un départ en groupe, en raison d'événements exceptionnels, les participants seront remboursés intégralement des sommes qu'ils ont versées.",
  },

  inclusions: [
    "Trajet Train des Merveilles (Nice/point de départ)",
    "Trajet bus (point final/Nice)",
    "Les transferts prévus à l'arrivée et au départ",
    "L'accompagnement par un guide naturaliste sur toute la durée du séjour",
    "3 nuits d'hébergement en dortoir (refuges)",
    "1 nuit en bivouac",
    "La pension complète du dîner du J1 au petit-déjeuner du J5",
    "Les pique-niques pendant l'itinérance",
    "Une soirée observation des étoiles avec du matériel professionnel",
    "Une rencontre avec un berger ou une éleveuse",
    "Le transport du matériel de bivouac",
    "Notre assistance sur place 24h/7",
  ],

  exclusions: [
    "Le transport jusqu'à Nice",
    "Les dépenses personnelles",
    "Les boissons hors repas",
    "Les douches chaudes dans certains refuges",
    "L'assurance voyage (recommandée)",
    "Toute prestation non mentionnée dans le programme",
    "Les pourboires (non obligatoire)",
  ],

  insurance: {
    text: "L'assurance voyage n'est pas légalement obligatoire en France.",
    coverage:
      "Elle doit couvrir les frais médicaux, les accidents, l'annulation, la perte de biens personnels et le rapatriement.",
    tip: "Avant de prévoir une assurance de voyage, consulte ta banque ou ton assureur habituel pour vérifier les garanties incluses dans tes contrats existants.",
    partner:
      "Une assurance multirisque peut t'être proposée avec notre partenaire Chapka.",
    note: "Sur demande, lors de l'inscription.",
  },

  aboutUs: {
    text: [
      "Sanko, c'est un Travel Studio qui crée des voyages immersifs au cœur des populations locales, en collaboration avec des créateurs de contenu inspirants.",
      "On sélectionne chaque destination avec soin, on travaille avec des partenaires locaux de confiance, et on s'assure que chaque voyage ait du sens, un impact positif, et une vraie dimension humaine.",
    ],
    mission: [
      "Vous faire découvrir le monde autrement",
      "Créer du lien",
      "Soutenir les communautés locales à travers un tourisme plus respectueux",
    ],
  },

  legal: {
    registrationNumber: "IM013260002",
    tva: "FR66978616431",
    financialGuarantee:
      "Accelerant Insurance Europe SA - Place du Champ de Mars 5, 1050 Bruxelles, Belgique",
    insurance:
      "Accelerant Insurance Europe SA - Place du Champ de Mars 5, 1050 Bruxelles, Belgique - Contrat n° CL-AIE-2026-00005",
    note: "Cette immatriculation garantit notre sérieux, notre engagement légal et financier, et vous assure un voyage en toute sécurité et confiance.",
  },
};
