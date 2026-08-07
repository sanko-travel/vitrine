export default {
  slug: "egypte-jojo-wanderlust",
  destination: "L'Égypte",
  subtitle: "avec @jojo_wanderlust_",

  facts: {
    dates: "20 - 30 octobre 2026",
    duration: "11 jours",
    groupNote: "8 places uniquement",
    price: "1 990",
  },

  heroImage: "/images/voyages/egypte/hero.jpg",
  heroVideoFolder: "/videos/voyages/egypte/",

  route: [
    { city: "Le Caire", coordinates: [30.0444, 31.2357], days: [1] },
    { city: "Assouan", coordinates: [24.0889, 32.8998], days: [2, 3] },
    { city: "Abu Simbel", coordinates: [22.3369, 31.6256], days: [3, 4], curveInward: true },
    { city: "Nil (felouque)", coordinates: [24.4539, 32.9394], days: [4, 5], curveInward: true },
    { city: "Kom Ombo", coordinates: [24.4520, 32.9457], days: [5], curveInward: true },
    { city: "Edfou", coordinates: [24.9780, 32.8734], days: [6], curveInward: true },
    { city: "Louxor", coordinates: [25.6872, 32.6396], days: [6, 7, 8, 9], curveInward: true },
    { city: "Le Caire", coordinates: [30.0444, 31.2357], days: [10, 11] },
  ],

  intro: {
    heading: "Les secrets les mieux gardés d'Égypte",
    stickerWord: "Égypte",
    paragraphs: [
      "Du 20 au 30 octobre 2026, on t'emmène en Égypte, dans sa version la plus vraie, celle que seuls les Égyptiens connaissent.",
      "Entre immersion culturelle, rencontres humaines et reconnexion à l'essentiel, ce voyage est une parenthèse hors du temps.",
      "Pendant plusieurs jours, tu ralentis, tu te reconnectes à toi et aux autres, et tu rencontres celles et ceux qui font battre le cœur de l'Égypte, loin des circuits touristiques classiques.",
      "Un voyage pour ressentir, comprendre, s'ancrer. L'Égypte, vécue à travers ses habitants.",
    ],
  },

  creator: {
    name: "Joyce",
    handle: "@jojo_wanderlust_",
    image: "/images/voyages/egypte/creator.jpg",
    bio: [
      "J'ai eu la chance d'explorer plus d'une trentaine de pays... et l'aventure continue\u00a0! Pendant 20 ans, j'ai vécu mon rêve en tant que basketteuse pro. Aujourd'hui, c'est derrière l'objectif que je m'épanouis, en capturant la magie des rencontres et la beauté du monde qui nous entoure.",
      "J'aime les plaisirs simples\u00a0: ma famille, mes amis, une belle tablée, de la bonne musique... et ces paysages qui laissent sans voix. J'ai toujours aimé partager, échanger, tisser des liens – et c'est tout naturellement que l'idée de voyager en groupe s'est imposée à moi.",
      "Si tu rêves de vivre une aventure différente, authentique et pleine de sens, viens\u00a0! On part ensemble\u00a0!",
    ],
  },

  highlights: [
    {
      title: "Immersion nubienne",
      subtitle: "Heissa & Éléphantine",
      description:
        "Vivez une immersion profonde sur l'île de Heissa, explorez les chemins colorés de l'île Éléphantine, échangez avec un pêcheur local et apprenez à préparer les saveurs nubiennes lors d'un cours de cuisine traditionnelle.",
      image: "/images/voyages/egypte/highlight-1.jpg",
    },
    {
      title: "Abu Simbel",
      subtitle: "Temples au lever du soleil",
      description:
        "Découverte de l'un des plus beaux temples d'Égypte, édifié par Ramsès II. Les colosses extérieurs, les scènes gravées et le temple de Néfertari au lever du jour\u00a0: un spectacle inoubliable.",
      image: "/images/voyages/egypte/highlight-2.jpg",
    },
    {
      title: "Croisière sur le Nil",
      subtitle: "Felouque traditionnelle",
      description:
        "Deux jours de navigation sur le Nil à bord d'une felouque traditionnelle. Escales dans des villages isolés, marché local de Daraw et temples de Kom Ombo et d'Edfou. Nuit sous les étoiles.",
      image: "/images/voyages/egypte/highlight-3.jpg",
    },
    {
      title: "Louxor en montgolfière",
      subtitle: "Vallée des Rois",
      description:
        "Vol en montgolfière au lever du soleil au-dessus de Louxor, puis découverte de la Vallée des Rois, du temple d'Hatchepsout et des colosses de Memnon avec votre guide.",
      image: "/images/voyages/egypte/highlight-4.jpg",
    },
  ],

  itinerary: [
    {
      day: 1,
      title: "Premiers pas en Égypte",
      description:
        "À votre arrivée au Caire, vous serez accueillis et accompagnés dans vos premières démarches sur place. Nous prendrons ensuite la direction de la gare pour embarquer à bord d'un train-couchette en direction d'Assouan.",
      accommodation: "Nuit en train-couchette",
    },
    {
      day: 2,
      title: "Premières découvertes sur le Nil",
      description:
        "Au petit matin, arrivée à Assouan. Découverte du magnifique temple de Philae, posé sur son île, avant de rejoindre l'île de Heissa pour une parenthèse plus locale. Moment de partage avec un pêcheur, déjeuner sur place. En fin de journée, installation dans notre maison d'hôtes nubienne. Option possible\u00a0: découverte des environs de Philae en kayak.",
      accommodation: "Nuit en maison d'hôtes nubienne",
    },
    {
      day: 3,
      title: "Entre traditions et vie locale",
      description:
        "Ce matin, place à un moment de partage autour d'un cours de cuisine nubienne. Après le déjeuner, balade sur l'île Éléphantine, entre petits chemins et maisons colorées. Dans l'après-midi, départ en direction d'Abu Simbel. Petite surprise et nuit sur place.",
      accommodation: "Nuit à Abu Simbel",
    },
    {
      day: 4,
      title: "Un lever de soleil inoubliable",
      description:
        "Réveil matinal, mais clairement justifié. Découverte des temples d'Abu Simbel au lever du soleil. Après le petit-déjeuner, retour vers Assouan pour embarquer à bord d'une felouque pendant deux jours.",
      accommodation: "Nuit en felouque sur le Nil",
    },
    {
      day: 5,
      title: "Le Nil, ses villages et ses temples",
      description:
        "Escale au village de Koubania, puis continuation jusqu'à Daraw où nous aurons peut-être la chance de tomber sur un marché local, avant de rejoindre le temple de Kom Ombo qui rend hommage à deux divinités Sobek et Haroëris.",
      accommodation: "Nuit en felouque sur le Nil",
    },
    {
      day: 6,
      title: "Sur la route de Louxor",
      description:
        "Après le petit-déjeuner, départ de la felouque pour prendre la route vers Louxor. En chemin, arrêt au temple d'Edfou, puis passage par Esna, une ville encore peu touristique où nous prendrons le temps de déjeuner. Arrivée à Louxor en fin de journée.",
      accommodation: "Nuit à Louxor",
    },
    {
      day: 7,
      title: "L'Égypte des grands sites",
      description:
        "Très tôt le matin, vol en montgolfière au lever du soleil au-dessus de Louxor. Puis direction la rive ouest avec votre guide\u00a0: la Vallée des Rois, le temple d'Hatchepsout et les colosses de Memnon. Installation dans la guest house. Dîner inclus.",
      accommodation: "Nuit en guest house à Louxor",
    },
    {
      day: 8,
      title: "Une immersion différente",
      description:
        "Aujourd'hui, changement de rythme. Matinée à la ferme, au contact de la vie locale, suivie d'un cours de poterie. Dîner inclus.",
      accommodation: "Nuit en guest house à Louxor",
    },
    {
      day: 9,
      title: "Entre liberté et patrimoine",
      description:
        "Visite libre des temples de Karnak et de Louxor, sans guide. En fin de journée, transfert à la gare pour le train-couchette en direction du Caire.",
      accommodation: "Nuit en train-couchette",
    },
    {
      day: 10,
      title: "Le Caire à votre rythme",
      description:
        "Cette dernière journée est libre, pour découvrir la ville selon vos envies, vous perdre dans ses quartiers ou simplement prendre le temps avant le retour. Le lendemain, retour vers la France ou extension dans le Désert Blanc.",
      accommodation: "Nuit en hôtel 3* au Caire",
    },
    {
      day: 11,
      title: "Retour en France",
      description:
        "Transfert vers l'aéroport et vol retour. Le voyage s'achève avec des souvenirs plein la tête.",
      accommodation: null,
    },
  ],

  pricing: {
    price: "1 990",
    currency: "€",
    perPerson: true,
    deposit: "30%",
    bookingUrl: "https://buy.stripe.com/aFaaEW49Nfa9fIW4D00sU03",
    paymentTerms: [
      "Un acompte de 30\u00a0% vous est demandé à l'inscription par CB.",
      "Le solde doit être réglé 45 jours avant la date de départ du voyage.",
      "Des facilités de paiement ont été mises en place.",
      "Possibilité d'échelonner le paiement tous les mois jusqu'à la date limite de solde le 12 septembre 2026.",
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
    "Accueil et assistance à l'aéroport du Caire",
    "Les transports en train-couchette",
    "Les transports sur place en van/bus et le chauffeur",
    "Les nuits d'hébergement en chambres partagées",
    "Les petits-déjeuners, les déjeuners et les dîners mentionnés inclus au programme",
    "Activités mentionnées incluses au programme",
    "Frais d'entrée pour les visites mentionnées incluses au programme",
    "Notre assistance sur place 24h/7",
  ],

  exclusions: [
    "Le visa d'entrée à payer sur place (30\u00a0€ en espèces)",
    "Les vols internationaux A/R",
    "Les transports personnels au Caire",
    "L'extension dans le Désert Blanc en pension complète (420\u00a0€/pers)",
    "Activités mentionnées en option au programme",
    "Les repas non mentionnés inclus au programme",
    "Les dépenses personnelles et boissons",
    "Les pourboires (non obligatoire)",
  ],

  insurance: {
    text: "L'assurance voyage n'est pas obligatoire en Égypte, mais recommandée.",
    coverage:
      "Elle doit couvrir les frais médicaux, les accidents, l'annulation, la perte de biens personnels et le rapatriement.",
    tip: "Avant de prévoir une assurance de voyage, consulte ta banque ou ton assureur habituel pour vérifier les garanties incluses dans tes contrats existants.",
    partner:
      "Une assurance multirisque peut être demandée avec notre partenaire Chapka Assurances.",
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
