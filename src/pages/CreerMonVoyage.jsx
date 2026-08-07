import { useState, useEffect, useRef } from "react";
import useTurnstile from "../hooks/useTurnstile";
import useScrollReveal from "../hooks/useScrollReveal";
import StickerLabel from "../components/StickerLabel";
import ReassuranceBand from "../components/ReassuranceBand";
import StrikethroughList from "../components/StrikethroughList";
import OfferCards from "../components/OfferCards";
import useHashScroll from "../hooks/useHashScroll";

const SECTION_IDS = [
  "hero",
  "pourquoi",
  "profil",
  "objections",
  "invisible",
  "temoignages",
  "processus",
  "faq",
  "formulaire",
];

const heroVideos = [
  "/videos/createurs/03.mp4",
  "/videos/createurs/04.mp4",
  "/videos/createurs/01.mp4",
  "/videos/createurs/02.mp4",
];

const profileThresholds = [
  { value: "8 000+", label: "Instagram" },
  { value: "10 000+", label: "TikTok" },
  { value: "5 000+", label: "YouTube" },
  { value: "500+", label: "Communauté privée" },
];

const objections = [
  {
    question: "Faire payer ma communauté ?",
    shortAnswer: "Ils achètent un moment unique",
    answer:
      "Normal. Ce qu'ils achètent, c'est un moment avec toi - que toi seul peux leur offrir. Pas un circuit touristique. Une expérience que personne d'autre ne peut leur donner.",
    highlight:
      "La communauté de Joyce a sold out en 72h. Zéro commentaire négatif. Que des mercis.",
    fearImage: "/images/objections/fear_1.jpg",
    reassuranceImage: "/images/objections/reassurance_1.jpg",
  },
  {
    question: "Ça prend trop de temps ?",
    shortAnswer: "3 stories suffisent",
    answer:
      "Sanko gère tout l'opérationnel : logistique, paiements, contrats, imprévus. Toi, tu communiques et tu vis l'expérience. C'est tout.",
    highlight:
      "Éloïse a lancé son voyage en 5 semaines. Temps passé de son côté : 3 stories et 1 post.",
    fearImage: "/images/objections/fear_2.jpg",
    reassuranceImage: "/images/objections/reassurance_2.jpg",
    reassuranceShift: "-15%",
  },
  {
    question: "Ma communauté va suivre ?",
    shortAnswer: "On teste avant de lancer",
    answer:
      "On t'aide à tester la demande avec un sondage communautaire. Zéro engagement tant qu'on n'a pas la preuve que ta commu est prête.",
    highlight:
      "Inès : 28 places vendues en 5 semaines, zéro relance, et déjà une liste d'attente.",
    fearImage: "/images/objections/fear_3.jpg",
    reassuranceImage: "/images/objections/reassurance_3.jpg",
  },
  {
    question: "C'est vraiment légal ?",
    shortAnswer: "100% encadré par la loi",
    answer:
      "Sanko est immatriculée Atout France, assurée Groupama en RC Pro. Tu es protégé juridiquement. Zéro zone grise.",
    highlight:
      "Immatriculation Atout France. Garantie financière APST. RC Pro Groupama.",
    fearImage: "/images/objections/fear_4.jpg",
    reassuranceImage: "/images/objections/reassurance_4.jpg",
  },
  {
    question: "Et si ça se passe mal ?",
    shortAnswer: "Pas de place au hasard",
    answer:
      "Un coordinateur Sanko est présent sur place pendant tout le voyage. Assurance incluse, hébergements vérifiés. On ne laisse rien au hasard.",
    highlight:
      "6 voyages organisés, 0 incident majeur. Assurance rapatriement incluse pour chaque voyageur.",
    fearImage: "/images/objections/fear_5.jpg",
    reassuranceImage: "/images/objections/reassurance_5.jpg",
  },
];

const processSteps = [
  {
    number: "01",
    title: "On se parle - 20 min",
    description:
      "Tu nous décris ton univers, ta commu, ce que tu imagines. On voit si le fit est là. Zéro engagement.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Ta commu répond",
    description:
      "On te fournit un formulaire de sondage. Ta communauté dit où elle veut aller, avec quel budget, quand.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "On construit le voyage ensemble",
    description:
      "À partir des réponses, on co-construit l'expérience. 100% adapté à ton ADN.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Tu lances - on gère le reste",
    description:
      "Tu communiques à ta commu. Les inscriptions s'ouvrent. Sanko s'occupe de tout l'opérationnel.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />
      </svg>
    ),
  },
];

const temoignages = [
  {
    name: "Joyce",
    handle: "@joyce",
    trip: "Voyage en Jordanie",
    quote:
      "Ma communauté a sold out en 72h. Aucun commentaire négatif - que des messages de remerciement.",
    result: "Voyage complet en 72h",
  },
  {
    name: "Éloïse",
    handle: "@eloise",
    trip: "Voyage en Inde",
    quote:
      "J'organisais déjà des voyages seule. Avec Sanko, je suis enfin en règle - sans avoir rien lâché du contrôle.",
    result: "Régularisée en un mois",
  },
  {
    name: "Inès",
    handle: "@ines.voyage",
    trip: "Voyage au Maroc",
    quote:
      "Mes abonnées me demandaient un voyage depuis deux ans. On l'a lancé en cinq semaines - 28 places, zéro relance, et déjà une liste d'attente pour la prochaine.",
    result: "28 places en 5 semaines",
  },
];

const faqItems = [
  {
    question: "C'est quoi le piège ?",
    answer:
      "Il n'y a pas de piège, juste une vraie envie de changer la manière dont nous voyageons. Sanko est une entreprise immatriculée, assurée, avec une équipe dédiée. On gagne notre vie en organisant des voyages exceptionnels - pas en cachant des frais.",
  },
  {
    question: "Je fais payer ma communauté - est-ce que ça va mal passer ?",
    answer:
      "Non. Tu ne fais pas payer ta communauté : tu lui proposes une expérience qu'elle ne pourrait pas vivre autrement. C'est un service premium, pas une taxe. Tes abonnés le comprennent.",
  },
  {
    question: "Combien de participants minimum pour organiser un voyage ?",
    answer:
      "Il faut un minimum de 10 participants pour lancer un voyage. Notre équipe t'accompagne dans la promotion auprès de ta communauté pour atteindre cet objectif.",
  },
  {
    question: "Qui gère la logistique sur place ?",
    answer:
      "Sanko s'occupe de tout : vols, hébergements, activités, transports locaux, restauration. Un coordinateur Sanko est présent sur place pendant tout le voyage.",
  },
  {
    question: "Qu'est-ce que j'y gagne concrètement ?",
    answer:
      "Ta place est offerte, tu vis une expérience unique avec ta communauté, et tu repars avec du contenu authentique et mémorable. On discute de tous les détails lors de notre premier échange.",
  },
  {
    question: "Faut-il une taille minimum de communauté ?",
    answer:
      "Pas de minimum strict, mais nous recommandons au moins 5 000 abonnés engagés pour garantir un voyage réussi. Ce qui compte, c'est l'engagement de ta communauté, pas juste le nombre.",
  },
  {
    question: "Est-ce que je suis juridiquement responsable ?",
    answer:
      "Non. Sanko est immatriculée auprès d'Atout France et dispose d'une garantie financière et d'une RC Pro voyage. C'est nous qui portons la responsabilité légale, pas toi.",
  },
];

const honeypotStyle = {
  position: "absolute",
  left: "-9999px",
  opacity: 0,
  pointerEvents: "none",
};

export default function CreerMonVoyage() {
  useHashScroll(SECTION_IDS);
  const [form, setForm] = useState({
    email: "",
    social: "",
    message: "",
  });
  const [website, setWebsite] = useState("");
  const [hpNumber, setFaxNumber] = useState("sk-78x");
  const [newsletter, setNewsletter] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeObjection, setActiveObjection] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const objSectionRef = useRef(null);
  const objTrackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Horizontal scroll driven by vertical scroll for objections section
  useEffect(() => {
    const section = objSectionRef.current;
    const track = objTrackRef.current;
    if (!section || !track) return;

    const getMetrics = () => {
      const padLeft =
        parseFloat(getComputedStyle(track.parentElement).paddingLeft) || 24;
      const maxTranslate = Math.max(
        0,
        track.scrollWidth - window.innerWidth + 2 * padLeft
      );
      return maxTranslate;
    };

    const updateHeight = () => {
      const maxT = getMetrics();
      section.style.height = `${window.innerHeight + maxT}px`;
    };

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const extra = section.offsetHeight - window.innerHeight;
      if (extra <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / extra));
      const maxT = getMetrics();
      track.style.transform = `translateX(-${progress * maxT}px)`;
    };

    updateHeight();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const { containerRef, token, reset } = useTurnstile();
  const refPourquoi = useScrollReveal();
  const refProfile = useScrollReveal();
  const refObjection = useScrollReveal();
  const refInvisible = useScrollReveal();
  const refTemoignages = useScrollReveal();
  const refTimeline = useScrollReveal();
  const refFaq = useScrollReveal();
  const refFormulaire = useScrollReveal();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return setError("Vérifie que tu n'es pas un robot.");
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "creer-mon-voyage",
          data: form,
          website,
          number: hpNumber,
          newsletter,
          "cf-turnstile-response": token,
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      reset();
      setError(
        "Une erreur est survenue. Réessaie ou contacte-nous directement.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* 1. Hero */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {heroVideos.map((src, i) => (
          <video
            key={src}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            poster={
              i === 0
                ? "/videos/createurs/poster.jpg"
                : undefined
            }
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === currentVideo ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-teal/50 to-teal/30" />
        <div className="hero-content relative z-10 text-center px-6 max-w-3xl mx-auto">
          <StickerLabel
            text="Créateurs"
            color="coral"
            className="mx-auto mb-6"
          />
          <p className="hero-fade-up hero-d1 font-body text-coral font-semibold tracking-widest text-sm uppercase mb-4">
            Créateurs de contenu
          </p>
          <h1 className="hero-fade-up hero-d2 font-heading font-extrabold text-white text-4xl md:text-6xl leading-tight mb-6">
            Vivez l'aventure d'une vie avec votre audience
          </h1>
          <a
            href="#formulaire"
            className="hero-fade-up hero-d3 inline-block bg-coral text-white font-body font-semibold px-10 py-4 rounded-full hover:bg-coral/90 transition-colors text-lg"
          >
            Lancer mon projet
          </a>
        </div>
      </section>

      {/* 2. Reassurance Band */}
      <ReassuranceBand />

      {/* 3. Pourquoi faire un voyage avec ta communauté ? */}
      <section id="pourquoi" className="bg-white py-24 px-6">
        <div ref={refPourquoi} className="max-w-4xl mx-auto text-center">
          <h2 className="reveal font-heading font-bold text-teal text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-6">
            Emmène ta communauté à l'autre bout du monde. On s'occupe de{" "}
            <StickerLabel
              text="tout"
              color="coral"
              size="2xl"
              className="inline-block align-middle"
            />
            .
          </h2>
          <p className="reveal font-body text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Tu as toujours rêvé de voyager avec ta communauté ? Sanko est né
            pour ça. On gère la destination, la logistique, les inscriptions,
            les contratstout l'opérationnel. Toi, tu te concentres sur ce que tu
            fais de mieux : créer et inspirer.
          </p>
        </div>
      </section>

      {/* 4. Tu as le bon profil ? */}
      <section id="profil" className="bg-teal py-24 px-6">
        <div ref={refProfile} className="max-w-4xl mx-auto text-center">
          <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Tu as le bon profil ?
          </h2>
          <p className="reveal font-body text-white/90 text-lg max-w-2xl mx-auto mb-4">
            Ce qui compte le plus, c'est la relation avec ta communauté,pas les
            chiffres. On a des créateurs qui partent avec 8 000 abonnés et des
            voyages complets en 48h.
          </p>
          <p className="reveal font-body text-white/70 text-sm mb-12">
            Ces seuils sont indicatifs. Ce qui compte, c'est l'engagement, pas
            le volume.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {profileThresholds.map((t, i) => (
              <div
                key={i}
                className="reveal scale-up bg-white/10 rounded-2xl p-6"
              >
                <p className="font-heading font-bold text-3xl text-yellow mb-2">
                  {t.value}
                </p>
                <p className="font-body text-white/90 text-sm">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Freins / Objections - Horizontal scroll on vertical scroll */}
      <section id="objections" ref={objSectionRef} className="bg-white relative">
        <div ref={refObjection} className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="text-center mb-14 px-6">
            <StickerLabel
              text="La vraie question"
              color="coral"
              className="mx-auto mb-4"
            />
            <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-teal">
              On répond à ce qui te bloque.
            </h2>
          </div>

          <div className="pl-6 md:pl-16">
            <div
              ref={objTrackRef}
              className="flex gap-6 will-change-transform"
            >
              {objections.map((obj, i) => {
                const revealed = activeObjection === i;
                const badgeColors = [
                  "bg-coral text-white",
                  "bg-teal text-white",
                  "bg-yellow text-white",
                  "bg-coral text-white",
                  "bg-teal text-white",
                ];
                return (
                  <div
                    key={i}
                    className="reveal scale-up relative flex-shrink-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    style={{ width: 320, height: 420 }}
                    onClick={() => setActiveObjection(revealed ? null : i)}
                  >
                    {/* Fear image (default) */}
                    <img
                      src={obj.fearImage}
                      alt={obj.question}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                        revealed
                          ? "opacity-0 scale-110"
                          : "group-hover:opacity-0 group-hover:scale-110"
                      }`}
                      loading="lazy"
                    />
                    {/* Reassurance image (on hover/click) */}
                    <img
                      src={obj.reassuranceImage}
                      alt={`${obj.question} - réponse`}
                      className={`absolute left-0 right-0 w-full object-cover transition-all duration-700 ${
                        obj.reassuranceShift ? "" : "top-0 bottom-0 h-full"
                      } ${
                        revealed
                          ? "opacity-100 scale-105"
                          : "opacity-0 group-hover:opacity-100 group-hover:scale-105"
                      }`}
                      style={
                        obj.reassuranceShift
                          ? { height: "130%", top: obj.reassuranceShift }
                          : undefined
                      }
                      loading="lazy"
                    />

                    {/* Pill badge - top right, text swaps on hover/click */}
                    <span
                      className={`absolute top-3 right-3 z-10 rounded-full font-accent font-semibold text-sm ${badgeColors[i % 5]}`}
                    >
                      <span className="relative inline-flex">
                        {/* Question (default) */}
                        <span
                          className={`px-4 py-1.5 transition-opacity duration-300 ${
                            revealed
                              ? "opacity-0"
                              : "opacity-100 group-hover:opacity-0"
                          }`}
                        >
                          {obj.question}
                        </span>
                        {/* Short answer (on hover/click) */}
                        <span
                          className={`absolute inset-0 flex items-center justify-center px-4 py-1.5 whitespace-nowrap transition-opacity duration-300 ${
                            revealed
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                        >
                          {obj.shortAnswer}
                        </span>
                      </span>
                    </span>

                    {/* Gradient fixe en bas - toujours visible */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white/80 pointer-events-none" />

                    {/* Bloc flèche + gradient + texte - remonte au hover/click */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 transition-transform duration-500 ease-out ${
                        revealed
                          ? "translate-y-0"
                          : "translate-y-[calc(100%-3rem)] group-hover:translate-y-0"
                      }`}
                    >
                      {/* Flèche hint */}
                      <div
                        className={`flex justify-center pb-1 transition-opacity duration-300 ${
                          revealed ? "opacity-0" : "group-hover:opacity-0"
                        }`}
                      >
                        <svg
                          className="w-5 h-5 text-teal drop-shadow-md animate-bounce"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 15.75l7.5-7.5 7.5 7.5"
                          />
                        </svg>
                      </div>
                      {/* Gradient transparent → blanc */}
                      <div className="h-32 bg-gradient-to-b from-transparent via-white/40 to-white" />
                      {/* Zone blanche avec réponse */}
                      <div className="bg-white px-5 pb-5">
                        <p className="font-body text-gray-600 text-sm leading-relaxed">
                          {obj.answer}
                        </p>
                        {obj.highlight && (
                          <p className="font-heading font-semibold text-coral text-sm mt-3">
                            {obj.highlight}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Ce que tu ne feras jamais avec Sanko */}
      <StrikethroughList />

      {/* 7. Sanko est invisible pour ta communauté */}
      <section id="invisible" className="bg-white py-24 px-6">
        <div ref={refInvisible} className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-teal mb-4">
              Sanko est invisible pour ta communauté.
            </h2>
            <p className="reveal font-body text-gray-600 text-lg max-w-2xl mx-auto">
              Tu es l'hôte. Le visage du voyage. Sanko est l'infrastructure en
              arrière-plan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="reveal from-left bg-white rounded-2xl shadow-md p-8 ring-1 ring-teal/5">
              <span className="inline-block font-accent font-semibold text-xs bg-coral/10 text-coral px-3 py-1 rounded-full mb-4">
                CE QUE TA COMMUNAUTÉ VOIT
              </span>
              <p className="font-body text-gray-700 leading-relaxed">
                Toi, ton univers, ton contenu, ta présence sur place.
              </p>
            </div>
            <div className="reveal from-right bg-white rounded-2xl shadow-md p-8 ring-1 ring-teal/5">
              <span className="inline-block font-accent font-semibold text-xs bg-teal/10 text-teal px-3 py-1 rounded-full mb-4">
                CE QUI EST GÉRÉ EN ARRIÈRE-PLAN
              </span>
              <p className="font-body text-gray-700 leading-relaxed">
                Logistique, paiements, contrats, cadre légal, prestataires,
                imprévus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Deux offres */}
      <OfferCards />

      {/* 9. Ils l'ont fait !! (Témoignages) */}
      <section id="temoignages" className="bg-white py-24 px-6">
        <div ref={refTemoignages} className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="reveal font-heading font-bold text-4xl text-teal mb-4">
              Ils l'ont fait !!
            </h2>
            <p className="reveal font-body text-gray-600 text-lg">
              Des créateurs qui ont franchi le pas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {temoignages.map((t, i) => (
              <div
                key={i}
                className="reveal from-left bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-8 flex flex-col gap-5"
              >
                <span className="font-heading text-5xl text-coral/30 leading-none select-none">
                  "
                </span>

                <div className="flex gap-1 -mt-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="font-body text-gray-700 leading-relaxed italic text-base flex-1">
                  "{t.quote}"
                </p>
                {t.result && (
                  <p className="font-accent font-semibold text-xs bg-teal/10 text-teal px-3 py-1 rounded-full inline-block">
                    {t.result}
                  </p>
                )}
                <div>
                  <p className="font-heading font-semibold text-teal text-sm">{t.name}</p>
                  <p className="font-body text-coral text-xs">{t.handle} · {t.trip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Comment ça marche - Timeline */}
      <section id="processus" className="bg-teal py-24 px-6">
        <div ref={refTimeline} className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <StickerLabel
              text="Processus"
              color="coral"
              className="mx-auto mb-4"
            />
            <h2 className="reveal font-heading font-bold text-4xl text-white mb-4">
              Concrètement, ça se passe comment ?
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" />
            <div className="flex flex-col gap-12">
              {processSteps.map((step, i) => (
                <div
                  key={step.number}
                  className={`reveal ${i % 2 === 0 ? "from-left" : "from-right"} flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ring-1 ring-teal/5">
                      <div className="text-coral mb-4">{step.icon}</div>
                      <h3 className="font-heading font-bold text-xl text-teal mb-3">
                        {step.title}
                      </h3>
                      <p className="font-body text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 w-14 h-14 rounded-full bg-white text-teal font-heading font-bold text-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    {step.number}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ - fond teal */}
      <section id="faq" className="bg-white py-24 px-6">
        <div ref={refFaq} className="max-w-3xl mx-auto">
          <h2 className="reveal font-heading font-bold text-4xl md:text-5xl text-teal tracking-tight text-center mb-14">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="reveal bg-white rounded-xl overflow-hidden shadow-md ring-1 ring-teal/10"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-heading font-semibold text-teal text-lg pr-4">
                    {item.question}
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
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Formulaire */}
      <section id="formulaire" className="bg-teal py-24 px-6">
        <div ref={refFormulaire} className="max-w-3xl mx-auto">
          <div className="mb-14 text-center">
            <p className="font-body text-coral font-semibold tracking-widest text-sm uppercase mb-3">
              On y est
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
              Lance ton projet de voyage
            </h2>
          </div>

          <div className="reveal fade-only bg-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition-shadow duration-300">
            {submitted ? (
              <div className="text-center py-10">
                <svg
                  className="w-14 h-14 text-coral mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="font-heading font-bold text-2xl text-teal mb-2">
                  Demande envoyée !
                </h3>
                <p className="font-body text-gray-600">
                  Notre équipe te contacte sous 48h pour discuter de ton projet.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <StickerLabel text="Email" color="teal" size="xs" className="mb-2" />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ton@email.fr"
                    required
                    className="w-full font-body border border-teal/20 rounded-full px-5 py-3.5 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all bg-gray-light/40 text-teal placeholder-teal/30"
                  />
                </div>
                <div>
                  <StickerLabel text="Ton @" color="yellow" size="xs" className="mb-2" />
                  <input
                    name="social"
                    value={form.social}
                    onChange={handleChange}
                    placeholder="@tonpseudo"
                    required
                    className="w-full font-body border border-teal/20 rounded-full px-5 py-3.5 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all bg-gray-light/40 text-teal placeholder-teal/30"
                  />
                </div>
                <div>
                  <StickerLabel text="Message" color="coral" size="xs" className="mb-2" style={{ transform: 'rotate(-4deg)' }} />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Parle-nous de ton projet de voyage…"
                    rows={5}
                    className="w-full font-body border border-teal/20 rounded-2xl px-5 py-3.5 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all bg-gray-light/40 text-teal placeholder-teal/30 resize-none"
                  />
                </div>
                {/* Honeypot fields */}
                <div style={honeypotStyle} aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <input
                    type="text"
                    name="number"
                    value={hpNumber}
                    onChange={(e) => setFaxNumber(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    tabIndex={-1}
                  />
                </div>

                <div ref={containerRef} className="flex justify-center" />
                <button
                  type="submit"
                  disabled={loading || !token}
                  className="self-start bg-coral text-white font-body font-semibold px-10 py-4 rounded-full hover:bg-coral/90 transition-colors text-base disabled:opacity-60"
                >
                  {loading ? "Envoi…" : "Envoyer ma demande"}
                </button>

                {error && (
                  <p className="font-body text-coral text-sm bg-coral/10 rounded-lg px-4 py-3">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
