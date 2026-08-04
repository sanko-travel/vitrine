import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const sections = [
  {
    title: "Préambule",
    content: (
      <>
        <p className="font-semibold text-teal mt-2 mb-2">
          1. Désignation du Vendeur
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>SANKOFA STUDIO TRAVEL, SAS</li>
          <li>Siège social : 114 rue de la République – 13002 Marseille</li>
          <li>Enregistrée au RCS de Marseille sous le numéro 978 616 431</li>
          <li>Représentée par Melany Fabre, en qualité de Présidente</li>
          <li>Téléphone : 06.68.68.74.10</li>
          <li>
            Adresse mail :{" "}
            <a
              href="mailto:contact@withsanko.com"
              className="text-teal underline hover:text-teal/80 transition-colors"
            >
              contact@withsanko.com
            </a>
          </li>
          <li>
            Immatriculation au registre des opérateurs de voyages et de séjours
            : IM013260002
          </li>
          <li>
            Garant financier : ACCELERANT INSURANCE EUROPE SA, BASTION TOWER,
            LEVEL 20, PLACE DU CHAMP DE MARS 5, 1050 BRUXELLES, BELGIQUE
          </li>
          <li>
            Assureur responsabilité civile professionnelle : ACCELERANT
            INSURANCE EUROPE SA, BASTION TOWER, LEVEL 20, PLACE DU CHAMP DE
            MARS 5, 1050 BRUXELLES, BELGIQUE
          </li>
          <li>
            Site de vente :{" "}
            <a
              href="https://withsanko.com"
              className="text-teal underline hover:text-teal/80 transition-colors"
            >
              www.withsanko.com
            </a>
          </li>
        </ul>
        <p className="mt-3">Ci-après dénommé « SANKOFA »</p>

        <p className="font-semibold text-teal mt-4 mb-2">2. Objet</p>
        <p>
          Les présentes conditions générales de vente ont pour objet de définir
          les droits et obligations des parties dans le cadre de la
          commercialisation par SANKOFA de prestations touristiques fournies
          directement par elle et par des prestataires partenaires, à destination
          de personnes ayant la qualité de consommateurs ou non-professionnels au
          sens du Code de la consommation ou de voyageur au sens du Code du
          tourisme et ayant la capacité juridique de contracter (ci-après dénommé
          « le(s) Client(s) »).
        </p>

        <p className="font-semibold text-teal mt-4 mb-2">3. Définitions</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Client</strong> : personne physique ayant la qualité de
            consommateur ou de non-professionnel au sens du Code de la
            consommation, ou de voyageur au sens du Code du tourisme, qui
            contracte avec SANKOFA dans le cadre des présentes conditions
            générales de vente.
          </li>
          <li>
            <strong>Contrat</strong> : email de confirmation de réservation
            reprenant les éléments essentiels du contrat passé entre le Client et
            SANKOFA.
          </li>
          <li>
            <strong>Prestation</strong> : service de voyage, service touristique
            ou forfait touristique au sens de l'article L. 211-2 du Code du
            tourisme.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Article 1 – Contenu et champ d'application",
    content: (
      <p>
        Les présentes conditions générales de vente s'appliquent de plein droit à
        l'ensemble des prestations vendues ou offertes à la vente par SANKOFA.
        Elles s'appliquent pour les ventes réalisées par tous circuits de
        distribution et de commercialisation. Toute commande ou achat implique
        l'adhésion sans réserve aux présentes conditions générales de vente qui
        prévalent sur toutes autres conditions, à l'exception de celles qui ont
        été acceptées expressément par SANKOFA et figurent sur la confirmation de
        commande valant contrat. Le Client déclare avoir pris connaissance des
        présentes conditions générales de vente et les avoir acceptées avant sa
        réservation.
      </p>
    ),
  },
  {
    title: "Article 2 – Informations précontractuelles",
    content: (
      <>
        <p>
          Le Client reconnaît avoir eu communication, préalablement à la
          passation de sa commande et/ou à la conclusion du contrat, d'une
          manière lisible et compréhensible, des présentes conditions générales
          de vente et de toutes les informations listées à l'article L. 221-5 du
          Code de la consommation ainsi qu'à l'article R. 211-4 du Code du
          tourisme.
        </p>
        <p className="mt-3">
          Le Client reconnaît de plus avoir eu communication du formulaire pris
          en application de l'arrêté du 1er mars 2018 « fixant le modèle de
          formulaire d'information pour la vente de voyages et de séjours ».
        </p>
      </>
    ),
  },
  {
    title: "Article 3 – Prix",
    content: (
      <>
        <p className="font-semibold text-teal mt-2 mb-2">
          Article 3.1. Prix définitif et taxes additionnelles
        </p>
        <p>
          Le prix définitif est annoncé en euros, toutes taxes comprises (TTC)
          par personne. Le prix comprend les éléments indiqués dans l'offre. Sauf
          mention contraire dans le Contrat, il inclut l'hébergement et les
          activités précisés dans l'offre. Sauf mention contraire au Contrat, il
          ne comprend pas les repas, les transferts, le pré et post
          acheminement, le supplément « chambre individuelle », la taxe de
          séjour, les assurances facultatives, les pourboires ni les dépenses
          personnelles et extras comme les boissons ou les essentiels sur place.
        </p>
        <p className="mt-3">
          La taxe de séjour est une contribution obligatoire, perçue par les
          hébergeurs touristiques (hôtels, location saisonnière, gîtes…) au nom
          des collectivités locales, et ajoutée au prix du séjour pour financer
          le développement touristique de la région. Elle est à régler
          directement sur place auprès de l'hébergeur, sauf si elle est déjà
          incluse dans le prix au moment de la réservation.
        </p>

        <p className="font-semibold text-teal mt-4 mb-2">
          Article 3.2. Modalités de paiement
        </p>
        <p>
          <strong>Par carte bancaire :</strong> La réservation sera effective
          après le versement de 30% du montant total du séjour. Le reste du solde
          est a versé au maximum 30 jours avant le départ. Si le versement du
          reste du solde n'intervient pas dans le délai énoncé, SANKOFA se
          réserve le droit d'annuler le séjour du fait du Client et appliquera
          les frais d'annulation applicables.
        </p>
        <p className="mt-3">
          <strong>Par virement :</strong> La réservation sera effective après le
          versement du montant total du séjour.
        </p>
        <p className="mt-3">
          Le Client garantit à SANKOFA qu'il dispose des autorisations
          éventuellement nécessaires pour utiliser le mode de paiement choisi par
          lui, lors de la validation du contrat. SANKOFA se réserve le droit de
          suspendre toute gestion de réservation et toute exécution des
          prestations en cas de refus d'autorisation de paiement par carte
          bancaire de la part des organismes officiellement accrédités ou en cas
          de non-paiement de toute somme due au titre du contrat. Les paiements
          effectués par le Client ne seront considérés comme définitifs qu'après
          encaissement effectif des sommes dues par SANKOFA.
        </p>
        <p className="mt-3">
          Le règlement peut s'effectuer par carte bancaire, via un lien de
          paiement fourni en ligne ou par virement.
        </p>
      </>
    ),
  },
  {
    title: "Article 4 – Révision du prix",
    content: (
      <>
        <p>
          SANKOFA s'engage à appliquer les tarifs en vigueur indiqués au moment
          de la réservation mais se réserve le droit de modifier unilatéralement
          ses prix sous conditions fixées au présent article. Conformément à
          l'article L. 211-12 du Code du tourisme, le prix pourra ainsi être
          modifié à la hausse ou à la baisse après validation de la réservation
          pour prendre en compte l'évolution :
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>
            1° Du prix du transport de passagers résultant du coût du carburant
            ou d'autres sources d'énergie ;
          </li>
          <li>
            2° Du niveau des taxes ou redevances sur les services de voyage
            compris dans le contrat, imposées par un tiers qui ne participe pas
            directement à l'exécution du contrat, y compris les taxes
            touristiques, les taxes d'atterrissage ou d'embarquement et de
            débarquement dans les ports et aéroports ; ou
          </li>
          <li>3° Des taux de change en rapport avec le contrat.</li>
        </ul>
        <p className="mt-3">
          L'application éventuelle d'une majoration de prix en application de
          l'alinéa précédent sera notifiée de manière claire et compréhensible au
          Client et assortie d'une justification et d'un calcul, sur support
          durable, au plus tard vingt jours avant le début des prestations.
        </p>
        <p className="mt-3">
          Réciproquement, le Client a le droit à une réduction de prix
          correspondant à toute baisse des coûts mentionnés aux 1°, 2° et 3°,
          qui intervient après la conclusion du contrat et avant le début des
          prestations. En cas de diminution du prix, SANKOFA a le droit de
          déduire ses dépenses administratives réelles du remboursement dû au
          Client. A la demande du Client, SANKOFA apporte la preuve de ces
          dépenses administratives.
        </p>
        <p className="mt-3">
          Si la majoration dépasse 8 % du prix total du contrat, le Client peut
          accepter la modification proposée, ou demander la résiliation sans
          payer de frais de résiliation et obtenir le remboursement de tous les
          paiements déjà effectués.
        </p>
      </>
    ),
  },
  {
    title: "Article 5 – Réservations",
    content: (
      <>
        <p>
          Les informations figurant sur le site internet de SANKOFA ne sont pas
          contractuelles mais seulement informatives. Le Client remplit le
          formulaire de pré-inscription proposé par un des ambassadeurs SANKOFA.
          Il est ensuite recontacté par email par SANKOFA avec le lien de
          paiement. Une fois le paiement effectué, le Client reçoit une
          confirmation par email de son inscription (valant contrat de séjour).
        </p>
        <p className="mt-3">
          Le Client indique ses informations : nom, prénom, adresse mail, numéro
          de téléphone, adresse postale, date de naissance et toute autre
          information utile à transmettre à SANKOFA. Il accepte que ces données
          personnelles soient traitées conformément à la Politique de
          confidentialité de SANKOFA et les présentes conditions générales de
          vente.
        </p>
        <p className="mt-3">
          En cas de confirmation de la réservation, le Client recevra une
          confirmation de séjour valant Contrat par email. Toute commande
          implique que le Client accepte le contenu du séjour et se déclare apte
          physiquement, psychologiquement et techniquement à participer aux
          Prestations.
        </p>
      </>
    ),
  },
  {
    title: "Article 6 – Absence de droit de rétractation",
    content: (
      <>
        <p>
          L'article L. 221-28 du Code de la consommation dispose que le droit de
          rétractation ne peut être exercé pour les contrats de prestations de
          services d'hébergement, autres que d'hébergement résidentiel, de
          services de transport de biens, de locations de voiture, de
          restauration ou d'activités de loisirs qui doivent être fournis à une
          date ou à une période déterminée. L'article L. 221-2 du Code de la
          consommation exclut également cette faculté pour les transports de
          personnes et les forfaits touristiques.
        </p>
        <p className="mt-3">
          SANKOFA se prévaut de cette absence de droit de rétractation et indique
          que pour toutes les prestations entrant dans le champ d'application de
          l'article L. 221-28 ou L. 221-2 du Code de la consommation, le Client
          ne disposera d'aucun droit de rétractation.
        </p>
      </>
    ),
  },
  {
    title: "Article 7 – Modification du contrat",
    content: (
      <>
        <p className="font-semibold text-teal mt-2 mb-2">
          Article 7.1. Modification à l'initiative de SANKOFA
        </p>
        <p>
          SANKOFA a la possibilité de modifier unilatéralement les clauses du
          contrat après sa conclusion et avant le début des Prestations, et ce
          sans que le Client ne puisse s'y opposer, sous réserve que la
          modification soit mineure et que le Client en soit informé le plus
          rapidement possible de manière claire, compréhensible et apparente sur
          un support durable.
        </p>
        <p className="mt-3">
          <em>Exemple :</em> Les activités d'un séjour peuvent être modifiées,
          inversées ou décalées en fonction d'impératifs locaux rendant
          inaccessibles les sites prévus ou des conditions météorologiques
          défavorables. Dans ce même contexte, les hébergements peuvent également
          être modifiés et remplacés par des hébergements de catégorie similaire.
          Attention, les classifications locales ne correspondent pas aux
          classifications françaises. Certaines Prestations étant dépendante des
          conditions météorologiques, SANKOFA pourra proposer des modifications
          d'itinéraire et pourra être contraint de raccourcir et/ou annuler
          certaines excursions et activités sportives pour la sécurité des
          participants sans que ces modifications exceptionnelles ne donnent lieu
          à une indemnisation.
        </p>
        <p className="mt-3">
          Si, avant le début du séjour, SANKOFA est contraint de modifier
          unilatéralement une des caractéristiques principales du contrat au sens
          de l'article R. 211-4 du Code du tourisme, qu'il ne peut satisfaire
          aux exigences particulières convenues avec le Client, ou en cas de
          hausse du prix supérieure à 8 %, il informe le Client dans les
          meilleurs délais, d'une manière claire, compréhensible et apparente,
          sur un support durable des modifications proposées et, s'il y a lieu,
          des répercussions sur le prix du contrat ; du délai raisonnable dans
          lequel le Client doit communiquer à SANKOFA la décision qu'il prend ;
          des conséquences de l'absence de réponse du Client dans le délai fixé ;
          s'il y a lieu, de l'autre prestation proposée, ainsi que de son prix.
        </p>
        <p className="mt-3">
          Lorsque les modifications du contrat ou la prestation de substitution
          entraînent une baisse de qualité des prestations ou de leur coût, le
          Client a droit à une réduction de prix adéquate. Si le contrat est
          résilié et que le Client n'accepte pas d'autre prestation, SANKOFA
          remboursera tous les paiements effectués par celui-ci ou en son nom dans
          les meilleurs délais, et au plus tard quatorze jours après la
          résiliation du contrat.
        </p>

        <p className="font-semibold text-teal mt-4 mb-2">
          Article 7.2. Modification à l'initiative du Client
        </p>
        <p>
          Toute prestation abrégée ou non consommée du fait du Client, ou
          commencée en retard du fait du Client ne donnera droit à aucun
          remboursement. SANKOFA s'engage vis-à-vis du Client uniquement sur les
          prestations vendues.
        </p>
        <p className="mt-3">
          Ne sauraient engager la responsabilité de SANKOFA :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            toute prestation souscrite par le Client en dehors de celle facturée
            par SANKOFA ;
          </li>
          <li>toute modification des prestations à l'initiative du Client.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Article 8 – Résiliation du contrat",
    content: (
      <>
        <p className="font-semibold text-teal mt-2 mb-2">
          Article 8.1. Résiliation du contrat par le Client
        </p>
        <p>
          Le Client a la possibilité de résilier le contrat à tout moment, avant
          le début des prestations. Pour que cette résiliation soit valable, il
          doit en informer SANKOFA par mail. Le cas échéant, SANKOFA demandera en
          ce cas au Client de payer des frais de résiliation et pourra retenir
          tout ou partie des acomptes ou du solde déjà versés selon l'échéancier
          applicable à la réservation.
        </p>
        <p className="mt-3">
          Ces indemnités d'annulation ne seront pas dues si le contrat est
          résilié à la suite de circonstances exceptionnelles et inévitables,
          survenant au lieu de destination ou à proximité immédiate de celui-ci et
          ayant des conséquences importantes sur l'exécution du contrat. Dans ce
          cas, SANKOFA procèdera au remboursement intégral des paiements
          effectués, sans toutefois entraîner de dédommagement supplémentaire.
        </p>
        <p className="mt-3">
          La date d'annulation est la date de réception par SANKOFA de la demande
          du Client.
        </p>

        <p className="font-semibold text-teal mt-4 mb-2">
          Article 8.2. Résiliation du contrat par SANKOFA
        </p>
        <p>
          SANKOFA a la possibilité de résilier le contrat à tout moment, avant le
          début des prestations. Le cas échéant, le Client aura droit à une
          indemnisation supplémentaire, qui correspond à celle qu'il aurait dû
          supporter si la résiliation du contrat était intervenue de son fait.
        </p>
        <p className="mt-3">
          Toutefois, SANKOFA ne sera redevable d'aucune indemnisation
          supplémentaire, si la résiliation du contrat intervient dans les deux
          cas suivants :
        </p>
        <p className="mt-3">
          <strong>1)</strong> Le nombre de personnes inscrites est inférieur au
          nombre minimal indiqué dans le contrat. Dans ce cas, SANKOFA notifie
          par mail la résiliation du contrat au Client dans le délai fixé par le
          contrat, selon le calendrier suivant :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            vingt jours avant le début des prestations dans le cas de voyages
            dont la durée dépasse six jours
          </li>
          <li>
            sept jours avant le début des prestations dans le cas de voyages dont
            la durée est de deux à six jours
          </li>
          <li>
            quarante-huit heures avant le début des prestations dans le cas de
            voyages ne durant pas plus de deux jours
          </li>
        </ul>
        <p className="mt-3">
          <strong>2)</strong> SANKOFA est empêché d'exécuter le contrat en raison
          de circonstances exceptionnelles et inévitables. Dans ce cas, SANKOFA
          notifie par mail ou par tout écrit la résiliation du contrat au Client
          dans les meilleurs délais avant le début des prestations.
        </p>
      </>
    ),
  },
  {
    title: "Article 9 – Sécurité et communauté",
    content: (
      <>
        <p className="font-semibold text-teal mt-2 mb-2">Sécurité</p>
        <p>
          Le Client s'engage à ne pas avoir de contre-indication médicale,
          physique ou psychique, pour la participation aux activités prévues dans
          son séjour. En cas de difficulté ou de doute sur le niveau des
          activités proposées, il devra se rapprocher immédiatement de SANKOFA ou
          de l'accompagnateur. Il s'engage également à respecter les règles
          énoncées par les guides et accompagnateurs en toutes circonstances, de
          sorte qu'une faute de sa part pourra être retenue en cas d'incident.
          Toute interruption de séjour en raison de l'incompatibilité physique,
          ou la non-réalisation de certaines activités prévues au contrat de ce
          fait n'entraînera aucun remboursement.
        </p>

        <p className="font-semibold text-teal mt-4 mb-2">Communauté</p>
        <p>
          Le Client reconnaît que les séjours vendus par SANKOFA sont des séjours
          en communauté. Il s'engage donc à respecter les règles de bienséance et
          de respect envers les autres voyageurs à tout moment. Il est précisé
          que les Clients partagent leur chambre avec d'autres voyageurs. Il est
          donc primordial de respecter l'intimité et le confort de chacun.
          L'usage ou la possession de drogue ne sont pas tolérés lors des
          séjours. Si le Client ou les participants choisissent de consommer de
          l'alcool lors du séjour, ils devront le faire avec modération en se
          conformant en outre aux règles de consommation d'alcool de la région
          visitée.
        </p>
        <p className="mt-3">
          SANKOFA ne pourra en aucun cas être tenue responsable du comportement
          inadapté d'un Client ou de gênes occasionnées par les autres Clients
          pouvant être inhérentes à la vie en communauté. Tout frais
          supplémentaire résultant d'une interruption de séjour souhaitée par le
          Client (transferts véhiculés, ajout de nuitées…etc) resteront à la
          charge du Client et devront être réglées sur site aux prestataires
          concernés.
        </p>
        <p className="mt-3">
          A ce titre, SANKOFA se réserve le droit d'exclure le Client du séjour
          en cas de comportement inapproprié durant ou dehors des activités,
          pouvant nuire à la sécurité et/ou à la qualité des prestations
          proposées et/ou aux autres membres du groupe : non-respect des
          horaires, des directives, des indications, attitude impolie,
          irrespectueuse ou encore dangereuse vis à vis des tiers et/ou des
          chevaux. Dans ce cas, le Client ne pourra prétendre à aucune
          indemnisation ou remboursement.
        </p>
      </>
    ),
  },
  {
    title: "Article 10 – Cession du contrat",
    content: (
      <p>
        Le Client a la possibilité de céder son contrat à un cessionnaire qui
        remplit les mêmes conditions que lui pour bénéficier des prestations,
        tant que ce contrat n'a produit aucun effet. Le Client ne peut céder son
        contrat qu'à la condition d'informer SANKOFA de sa décision par tout
        moyen permettant d'en obtenir un accusé de réception au plus tard sept
        jours avant le début du voyage. Cette cession n'est soumise, en aucun
        cas, à une autorisation préalable de SANKOFA. Le Client cédant et le
        cessionnaire sont solidairement responsables du paiement du solde du prix
        et des frais supplémentaires éventuels que la cession pourrait engendrer.
      </p>
    ),
  },
  {
    title: "Article 11 – Garantie",
    content: (
      <>
        <p>
          Le Client doit communiquer à SANKOFA les vices et/ou défauts de
          conformité dans les meilleurs délais à compter de la fourniture des
          services, conformément à l'article L. 211-16 II du Code du tourisme.
          Cette communication doit se faire, pièces justificatives à l'appui, de
          préférence dans un délai de 7 jours suivant la fin des prestations,
          afin que SANKOFA puisse enquêter sur le trouble et apprécier la réalité
          des défauts allégués de façon efficace et dans l'intérêt des deux
          parties.
        </p>
        <p className="mt-3">
          Les défauts et/ou vices constatés donneront lieu à rectification,
          substitution, réduction de prix ou remboursement dans les meilleurs
          délais, compte tenu de l'importance de la non-conformité et de la
          valeur des services de voyage concernés. En cas de proposition de
          SANKOFA d'une prestation de remplacement ou d'une réduction de prix, le
          Client ne peut refuser les autres prestations proposées que si elles ne
          sont pas comparables à ce qui avait été prévu dans le contrat ou si la
          réduction de prix octroyée n'est pas appropriée.
        </p>
        <p className="mt-3">
          La garantie de SANKOFA est limitée au remboursement des services
          effectivement payés par le Client consommateur ou non professionnel et
          SANKOFA ne pourra être considéré comme responsable ni défaillant pour
          tout retard ou inexécution consécutif à la survenance d'un cas de force
          majeure ou de circonstances exceptionnelles ou inévitables.
        </p>
        <p className="mt-3">
          Conformément à l'article R 211-6, 4° du Code du tourisme, le Client
          peut contacter rapidement SANKOFA aux coordonnées figurant à l'article
          1.1. « Désignation du vendeur » des présentes conditions générales de
          vente, afin de communiquer avec lui de manière efficace, demander une
          aide si le Client est en difficulté ou se plaindre de toute
          non-conformité constatée lors de l'exécution du contrat.
        </p>
      </>
    ),
  },
  {
    title: "Article 12 – Protection des données à caractère personnel",
    content: (
      <>
        <p className="font-semibold text-teal mt-2 mb-2">
          Article 12.1. Données collectées
        </p>
        <p>
          Dans le cadre de son activité de vente de prestations touristiques,
          SANKOFA met en œuvre et exploite des traitements de données à caractère
          personnel relatifs aux Clients. A ce titre, SANKOFA collecte les
          données à caractère personnel suivantes : prénom, nom, adresse postale,
          adresse mail, date de naissance, numéro de téléphone, particularités
          notées au contrat, modalités de paiement.
        </p>

        <p className="font-semibold text-teal mt-4 mb-2">
          Article 12.2. But poursuivi
        </p>
        <p>
          La collecte de ces données personnelles est indispensable à l'exécution
          contractuelle et en cas de refus de les communiquer, le Client s'expose
          à des difficultés d'exécution de la prestation qui ne pourront donner
          lieu à l'engagement de la responsabilité de SANKOFA. Ces données à
          caractère personnel sont collectées dans le but exclusif d'assurer la
          gestion de la Clientèle de SANKOFA dans le cadre de la conclusion du
          contrat et de son exécution, sur la base du consentement du Client.
          Elles ne sont utilisées que pour les finalités auxquelles le Client a
          consenti.
        </p>
        <p className="mt-3">
          Plus précisément, les finalités sont les suivantes :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Identification des personnes utilisant et/ou réservant les
            prestations
          </li>
          <li>Formalisation de la relation contractuelle</li>
          <li>Réalisation des prestations réservées auprès de SANKOFA</li>
          <li>Gestion des contrats et réservation</li>
          <li>
            Communication aux partenaires en vue de la réalisation des
            prestations par les partenaires concernés
          </li>
          <li>
            Comptabilité notamment gestion des comptes Clients et suivi de la
            relation Client
          </li>
          <li>Communications commerciales et prospection, animation</li>
        </ul>

        <p className="font-semibold text-teal mt-4 mb-2">
          Article 12.3. Personnes autorisées à accéder aux données
        </p>
        <p>
          Les personnes autorisées à accéder aux données collectées au sein de
          SANKOFA sont les suivantes : les salariés de SANKOFA et ses partenaires
          intervenant sur les prestations sollicitées par le Client, et le cas
          échéant, les prestataires sous-traitants de SANKOFA participant à la
          réalisation et/ou l'administration des prestations et étant amené à
          intervenir à ce titre sur les traitements, étant alors précisé qu'en
          pareille hypothèse, qu'il s'agisse de partenaires ou de sous-traitant,
          cela est effectué dans le respect de la réglementation en vigueur.
        </p>

        <p className="font-semibold text-teal mt-4 mb-2">
          Article 12.4. Conservation des données
        </p>
        <p>
          Ces données à caractère personnel collectées sont conservées pendant la
          durée de conservation légale relative à la finalité du traitement et au
          plus pendant 5 ans. Les données à caractère personnel relatives à la
          carte bancaire du Client sont conservées exclusivement dans le délai
          nécessaire pour la réalisation de la transaction.
        </p>
        <p className="mt-3">
          SANKOFA met en œuvre des mesures organisationnelles, techniques,
          logicielles et physiques en matière de sécurité du numérique pour
          protéger les données personnelles contre les altérations, destructions
          et accès non autorisés. Toutefois, il est à signaler qu'Internet n'est
          pas un environnement complètement sécurisé et SANKOFA ne peut pas
          garantir la sécurité de la transmission ou du stockage des informations
          sur Internet.
        </p>

        <p className="font-semibold text-teal mt-4 mb-2">
          Article 12.5. Droits du titulaire des données collectées
        </p>
        <p>
          En application de la réglementation applicable en matière de données à
          caractère personnel, chaque utilisateur dispose d'un droit
          d'interrogation, d'accès, de modification, d'opposition et de
          rectification, pour des motifs légitimes, à la collecte et au
          traitement de ses données à caractère personnel. Il est possible de
          demander à ce que ces données soient rectifiées, complétées, clarifiées,
          mises à jour ou effacées.
        </p>
        <p className="mt-3">
          Ces droits peuvent être exercés en écrivant un courrier signé ou un
          mail au responsable de traitement des données à l'adresse suivante :{" "}
          <a
            href="mailto:contact@withsanko.com"
            className="text-teal underline hover:text-teal/80 transition-colors"
          >
            contact@withsanko.com
          </a>{" "}
          et en joignant à la demande une copie de la pièce d'identité de la
          personne concernée.
        </p>
        <p className="mt-3">
          À tout moment, le Client peut introduire une réclamation auprès de la
          CNIL selon les modalités indiquées sur son site Internet (
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal underline hover:text-teal/80 transition-colors"
          >
            https://www.cnil.fr
          </a>
          ).
        </p>

        <p className="font-semibold text-teal mt-4 mb-2">
          Article 12.6. Modification de la clause
        </p>
        <p>
          SANKOFA se réserve le droit d'apporter toute modification à la présente
          clause relative à la protection des données à caractère personnel à
          tout moment. Si une modification est apportée à la présente clause de
          protection des données à caractère personnel, SANKOFA s'engage à
          publier la nouvelle version sur son site, et informera également les
          utilisateurs de la modification par messagerie électronique, dans un
          délai minimum de 15 jours avant la date d'effet.
        </p>

        <p className="font-semibold text-teal mt-4 mb-2">
          Article 12.7. Opposition au démarchage téléphonique
        </p>
        <p>
          Le Client a la faculté de s'inscrire sur la liste d'opposition au
          démarchage téléphonique sur le site internet suivant :{" "}
          <a
            href="http://www.bloctel.gouv.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal underline hover:text-teal/80 transition-colors"
          >
            http://www.bloctel.gouv.fr/
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Article 13 – Langue du contrat",
    content: (
      <p>
        Les présentes conditions générales de vente sont rédigées en langue
        française. Dans le cas où elles seraient traduites en une ou plusieurs
        langues étrangères, seul le texte français ferait foi en cas de litige.
      </p>
    ),
  },
  {
    title: "Article 14 – Assurances",
    content: (
      <>
        <p>
          L'assureur responsabilité civile professionnelle garantit SANKOFA
          contre les conséquences pécuniaires de la responsabilité civile
          professionnelle telle qu'elle est exposée aux articles L. 211-16 et L.
          211-17 du Code du tourisme. La garantie prend également en charge les
          dommages causés à des Clients et bénéficiaires, à des prestataires de
          services ou à des tiers par suite de fautes, erreurs de fait ou de
          droit, omissions ou négligences commises à l'occasion de l'offre, de
          l'organisation et de la vente des prestations tant de son fait que du
          fait de ses préposés, salariés et non-salariés.
        </p>
        <p className="mt-3">
          SANKOFA propose une assurance annulation, assistance ou multirisque
          avec son partenaire Chapka Assurance. Le Client peut s'il le souhaite
          souscrire une assurance annulation et/ou rapatriement auprès de
          l'assureur de son choix pour couvrir les éventuelles pertes
          occasionnées par une annulation de séjour de son fait et les
          éventuelles conséquences résultant d'un accident.
        </p>
        <p className="mt-3">
          Finalement, le Client s'engage à détenir et être à jour de son
          assurance de responsabilité civile pour couvrir les dommages qu'il
          pourrait causer (y compris lors de la pratique sportive).
        </p>
      </>
    ),
  },
  {
    title: "Article 15 – Responsabilité de SANKOFA",
    content: (
      <>
        <p className="font-semibold text-teal mt-2 mb-2">
          Article 15.1. Responsabilité de plein droit
        </p>
        <p>
          SANKOFA est responsable de plein droit des prestations touristiques
          contractées dans le cadre des présentes conditions générales de vente.
          SANKOFA peut toutefois s'exonérer de tout ou partie de sa
          responsabilité en apportant la preuve que le dommage est imputable soit
          au Client, soit à un tiers étranger à la fourniture des services de
          voyage compris dans le contrat, soit à des circonstances
          exceptionnelles et inévitables. SANKOFA ainsi que le détaillant sont
          responsables de la bonne exécution de tous les services de voyage
          compris dans le contrat conformément à l'article L. 211-16.
        </p>

        <p className="font-semibold text-teal mt-4 mb-2">
          Article 15.2. Limitation de la responsabilité
        </p>
        <p>
          Conformément à l'article L 211-17, IV du Code du tourisme, le montant
          des éventuels dommages-intérêts que SANKOFA serait condamné à verser au
          Client pour quelque cause que ce soit, sera limité à trois fois le prix
          total hors taxes des prestations, à l'exception des préjudices
          corporels et des dommages causés intentionnellement ou par négligence.
        </p>
        <p className="mt-3">
          En cas de déclaration imprécise ou inexacte des renseignements, ou du
          port d'équipements inadaptés au Client (chaussures, tenue…etc) pouvant
          mettre en péril le bon déroulement du programme, la sécurité du Client
          et/ou celle du groupe ou des tiers, ou encore la sécurité et/ou le
          bien-être des chevaux, SANKOFA se réserve le droit de refuser ou
          d'interrompre le séjour du Client. Cette décision ne pourra en aucun
          cas engager la responsabilité de SANKOFA.
        </p>
      </>
    ),
  },
  {
    title: "Article 16 – Circonstances exceptionnelles et inévitables",
    content: (
      <>
        <p>
          Tout événement qui crée une situation échappant au contrôle de SANKOFA
          comme du Client et dont les conséquences n'auraient pas pu être évitées
          même si toutes les mesures avaient été prises empêchant ainsi
          l'exécution dans des conditions normales de leurs obligations, sont
          considérées comme des causes d'exonération des obligations des parties
          et entraînent leur suspension. La partie qui invoque les circonstances
          visées ci-dessus doit avertir immédiatement l'autre partie de leur
          survenance, ainsi que de leur disparition.
        </p>
        <p className="mt-3">
          Les parties se rapprocheront pour examiner l'incidence de l'événement
          et convenir des conditions dans lesquelles l'exécution du contrat sera
          poursuivie. Si les circonstances exceptionnelles et inévitables ont une
          durée supérieure à trois mois, les présentes conditions générales
          pourront être résiliées par la partie lésée.
        </p>
      </>
    ),
  },
  {
    title: "Article 17 – Aide au Client",
    content: (
      <p>
        SANKOFA est responsable de la bonne exécution des prestations prévues au
        contrat. Dans ce cadre, si le Client est confronté à des difficultés,
        SANKOFA apportera dans les meilleurs délais une aide appropriée, eu égard
        aux circonstances de l'espèce. SANKOFA sera en droit de facturer un prix
        raisonnable pour cette aide si cette difficulté est causée de façon
        intentionnelle par le Client ou par sa négligence. Le prix facturé ne
        dépassera pas les coûts réels supportés par l'organisateur ou le
        détaillant.
      </p>
    ),
  },
  {
    title: "Article 18 – Accessibilité",
    content: (
      <p>
        Malgré tous nos efforts, nos prestations ne sont pas accessibles aux
        personnes à mobilité réduite. Le Client est invité à demander des
        renseignements en cas de difficultés de mouvement d'un des participants.
      </p>
    ),
  },
  {
    title: "Article 19 – Règlement des litiges",
    content: (
      <>
        <p className="font-semibold text-teal mt-2 mb-2">
          Article 19.1. Loi applicable
        </p>
        <p>
          Les présentes conditions générales sont soumises à l'application du
          droit français, sous réserve de l'application des dispositions
          impératives plus protectrices du pays de résidence du Client. Il en est
          ainsi pour les règles de fond comme pour les règles de forme.
        </p>

        <p className="font-semibold text-teal mt-4 mb-2">
          Article 19.2. Médiation
        </p>
        <p>
          Le Client peut recourir à une médiation conventionnelle, notamment
          auprès de la Commission de la médiation de la consommation ou auprès
          des instances de médiation sectorielles existantes, ou à tout mode
          alternatif de règlement des différends (conciliation, par exemple) en
          cas de contestation. Le Client peut ainsi saisir le Médiateur du
          Tourisme et du Voyage sur le site suivant :{" "}
          <a
            href="https://www.mtv.travel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal underline hover:text-teal/80 transition-colors"
          >
            https://www.mtv.travel/
          </a>{" "}
          ou à MTV Médiation tourisme voyage, BP 80 303 - 75 823 Paris Cedex 17
          dans le cas où la réponse apportée par SANKOFA au Client sur sa
          réclamation soit jugée insuffisante ou restée sans réponse au bout de
          60 jours.
        </p>

        <p className="font-semibold text-teal mt-4 mb-2">
          Article 19.3. Vente en ligne
        </p>
        <p>
          Dans le cas où le service aurait été acheté en ligne par le Client, ce
          dernier est informé qu'il a la faculté, conformément à l'article 14.1
          du règlement (UE) n°524/2013 du parlement européen et du conseil du 21
          mai 2013, d'introduire une réclamation et de sélectionner un organisme
          de règlement des litiges sur le site internet suivant :{" "}
          <a
            href="https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.show&lng=FR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal underline hover:text-teal/80 transition-colors"
          >
            https://webgate.ec.europa.eu/odr
          </a>
          .
        </p>

        <p className="font-semibold text-teal mt-4 mb-2">
          Article 19.4. Preuve
        </p>
        <p>
          Il est expressément convenu que les données contenues dans les systèmes
          d'information de SANKOFA ont force probante quant aux commandes,
          demandes, et tout autre élément relatif à l'utilisation du Site. Elles
          pourront être valablement produites, notamment en justice, comme moyen
          de preuve au même titre que tout document écrit.
        </p>
      </>
    ),
  },
  {
    title: "Article 20 – Prestations de voyage liées",
    content: (
      <>
        <p>
          Si, après avoir choisi un service de voyage et l'avoir réglé, le Client
          réserve, par l'intermédiaire de SANKOFA, des services de voyage
          supplémentaires pour le même séjour, il NE BENEFICIERA PAS des droits
          applicables aux forfaits au sens de la directive (UE) 2015/2302 et de
          l'article L.211-2 du Code du tourisme. En revanche, si ces services de
          voyage supplémentaires sont réservés au cours de la même visite ou du
          même contact avec SANKOFA, ceux-ci constitueront une prestation de
          voyage liée.
        </p>
        <p className="mt-3">
          Dans ce cas, SANKOFA bénéficie, conformément au droit de l'Union
          européenne, d'une protection contre l'insolvabilité visant à rembourser
          les sommes versées par le Client pour les services qui n'auraient pas
          été exécutés en raison de cette insolvabilité. SANKOFA a souscrit cette
          protection auprès de Arcus Solutions. En cas de refus de prestation en
          raison d'une défaillance financière de SANKOFA, le Client pourra
          contacter cette entité.
        </p>
        <p className="mt-3">
          Remarque : cette protection contre l'insolvabilité ne couvre pas les
          contrats conclus avec d'autres prestataires que SANKOFA, lorsque ces
          contrats peuvent être exécutés indépendamment de l'insolvabilité de
          cette dernière.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          [Site internet sur lequel on peut consulter la directive (UE)
          2015/2302 transposée en droit national :{" "}
          <a
            href="https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=B6B56671A51841699A8FB7B4B5EB08A2.tplgfr21s_1?idArticle=LEGIARTI000036242695&cidTexte=LEGITEXT000006074073&categorieLien=id&dateTexte=20180701"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal underline hover:text-teal/80 transition-colors break-all"
          >
            https://www.legifrance.gouv.fr/affichCodeArticle.do
          </a>
          ].
        </p>
      </>
    ),
  },
  {
    title:
      "Article 21 – Information importante : formalités administratives et sanitaires",
    content: (
      <>
        <p>
          Quels que soient la destination choisie et les pays traversés, il
          appartient au Client de s'assurer que chaque participant inscrit (y
          compris les enfants et les bébés) dispose d'un passeport biométrique
          avec puce intégrée et photo numérique, dont la validité correspond aux
          exigences imposées par le pays de destination, ainsi que de tout autre
          document requis (visa, autorisation ESTA, livret de famille,
          autorisation de sortie du territoire, etc.). Ces documents doivent être
          valides et conformes aux exigences en vigueur pour entrer et/ou
          transiter par les pays visités.
        </p>
        <p className="mt-3">
          SANKOFA fournit ces informations uniquement pour les ressortissants de
          nationalité française résidant en France. Il est de la responsabilité
          du Client et de chaque participant de s'assurer de la conformité de ses
          documents, tant administratifs que sanitaires, avec les informations
          transmises par l'organisateur. La personne ayant validé le devis ou le
          contrat de voyage est tenue de communiquer à chacun des participants
          les formalités applicables.
        </p>
        <p className="mt-3">
          SANKOFA ne pourra en aucun cas être tenue responsable des conséquences
          découlant du non-respect des règlements de police, de douane ou de
          santé publique. Si un voyageur se voit refuser l'embarquement
          (notamment sur un vol) en raison de documents manquants ou non
          conformes, aucun remboursement ne pourra être exigé, même si ces
          documents étaient mentionnés dans le contrat de vente remis au client.
        </p>
        <p className="mt-3">
          Les personnes de nationalité étrangère sont invitées à consulter leur
          autorité consulaire afin de vérifier les conditions d'entrée et de
          séjour dans les pays concernés.
        </p>
        <p className="mt-3">
          Pour plus de précisions sur les
          formalités liées au voyage, il est conseillé au Client de consulter les
          fiches pays mises à disposition sur le site du Ministère de l'Europe et
          des Affaires étrangères, à l'adresse suivante :{" "}
          <a
            href="https://www.diplomatie.gouv.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal underline hover:text-teal/80 transition-colors"
          >
            www.diplomatie.gouv.fr
          </a>
          , rubrique "Conseils aux Voyageurs / Conseils par pays".
        </p>
        <p className="mt-3">
          SANKOFA attire l'attention du Client sur le fait que ces informations
          sont susceptibles d'évoluer jusqu'à la date de départ. Il est donc
          recommandé de consulter régulièrement les sites officiels. Pour
          certaines destinations, l'organisateur pourra demander au client de
          signer la fiche MEAE du ou des pays concernés, dans le cadre de son
          devoir d'information. Cette demande ne constitue en aucun cas une
          décharge de responsabilité.
        </p>
        <p className="mt-3">
          Les informations sanitaires communiquées par SANKOFA sont celles
          disponibles au moment de la conclusion du contrat. Il est vivement
          recommandé au Client de consulter régulièrement les sites officiels des
          autorités sanitaires compétentes, tels que :
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            <a
              href="http://solidarites-sante.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal underline hover:text-teal/80 transition-colors"
            >
              solidarites-sante.gouv.fr
            </a>{" "}
            (Ministère français des Solidarités et de la Santé)
          </li>
          <li>
            <a
              href="https://www.who.int/fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal underline hover:text-teal/80 transition-colors"
            >
              www.who.int/fr
            </a>{" "}
            (Organisation Mondiale de la Santé)
          </li>
        </ul>
        <p className="mt-3">
          Sauf indication contraire stipulée au contrat, SANKOFA n'est pas tenue
          de vérifier la validité ni la conformité des documents de voyage, même
          si ceux-ci ont été transmis par le Client. Sa responsabilité se limite
          à une obligation d'information.
        </p>
      </>
    ),
  },
];

export default function CGV() {
  const ref = useScrollReveal(0.01);

  return (
    <main>
      {/* Hero */}
      <section className="bg-teal pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-3">
            Conditions générales de vente
          </h1>
          <p className="font-body text-white/80 text-sm">
            Sankofa Travel Studio — Séjours SANKOFA
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
