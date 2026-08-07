import { useState, useEffect } from "react";
import useTurnstile from "../hooks/useTurnstile";
import useScrollReveal from "../hooks/useScrollReveal";
import useHashScroll from "../hooks/useHashScroll";
import usePageMeta from "../hooks/usePageMeta";
import StickerLabel from "../components/StickerLabel";
import ReassuranceBand from "../components/ReassuranceBand";
import PartnershipTiers from "../components/PartnershipTiers";
import Guarantees from "../components/Guarantees";
import PartnersBanner from "../components/PartnersBanner";

const SECTION_IDS = [
  "hero",
  "proposition",
  "chiffres",
  "pourquoi",
  "cas-concret",
  "createurs",
  "formulaire-marques",
];

const brandValues = [
  {
    title: "Une audience qui a déjà voté avec son portefeuille",
    description:
      "Les gens qui partent avec Sanko ont payé leur voyage. C'est pas un like ou un follow : ils ont sorti la CB pour vivre un truc avec le créateur.",
    borderColor: "border-yellow",
    iconColor: "text-yellow",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
        />
      </svg>
    ),
  },
  {
    title: "Une intégration dans l'expérience, pas à côté",
    description:
      "Votre produit est utilisé pendant le voyage, en situation réelle. Pas posé sur un fond blanc pour une story. Quand le contexte est bon, le message passe tout seul.",
    borderColor: "border-coral",
    iconColor: "text-coral",
    icon: (
      <svg
        className="w-7 h-7"
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
  {
    title: "Un environnement brand-safe garanti",
    description:
      "On est immatriculés Atout France, les contrats sont carrés, les droits d'image réglés avant le départ. Vous gérez pas la logistique, on s'en charge.",
    borderColor: "border-teal",
    iconColor: "text-teal",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
];

const brandStats = [
  { value: "3,3M+", label: "Abonnés cumulés" },
  { value: "20+", label: "Voyages réalisés ou en cours" },
  { value: "72h", label: "Pour sold out sur notre 1er départ" },
  { value: "0\u202F€", label: "Coût d'acquisition voyageur" },
];

const brandCreators = [
  {
    creator: "@nolwenn_creme",
    creatorImg: "/images/creators/nolwenn_creme.jpg",
    destination: "Japon",
    region: "Tokyo & Kyoto",
    image: "/images/paysages/japon.jpg",
    status: "à venir",
    followers: "204K",
    engagement: "6,2%",
    platform: "Instagram",
  },
  {
    creator: "@deavy.b",
    creatorImg: "/images/creators/deavy_b.jpg",
    destination: "Grèce",
    region: "Îles & Côtes",
    image: "/images/paysages/grece.jpg",
    status: "à venir",
    followers: "20K",
    engagement: "8,9%",
    platform: "Instagram",
  },
];

const CREATOR_STATUS_STYLES = {
  'à venir': 'bg-coral text-white',
  'en cours': 'bg-yellow text-white',
  'passé': 'bg-white/30 text-white',
};

const heroVideos = [
  "/videos/marques/02.mp4",
  "/videos/marques/04.mp4",
  "/videos/marques/05.mp4",
  "/videos/marques/06.mp4",
  "/videos/marques/07.mp4",
  "/videos/marques/08.mp4",
  "/videos/marques/09.mp4",
  "/videos/marques/03.mp4",
  "/videos/marques/01.mp4",
];

const honeypotStyle = {
  position: "absolute",
  left: "-9999px",
  opacity: 0,
  pointerEvents: "none",
};

export default function Marques() {
  useHashScroll(SECTION_IDS);
  usePageMeta({
    title: "Marques & Partenaires",
    description: "Associez votre marque à des expériences de voyage authentiques avec des créateurs de contenu et leurs communautés engagées.",
    path: "/marques",
  });
  const [form, setForm] = useState({
    nom: "",
    entreprise: "",
    email: "",
    objectif: "",
    message: "",
  });
  const [website, setWebsite] = useState("");
  const [hpNumber, setFaxNumber] = useState("sk-78x");
  const [newsletter, setNewsletter] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const { containerRef, token, reset } = useTurnstile();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  const refValues = useScrollReveal();
  const refStats = useScrollReveal();
  const refPourquoi = useScrollReveal();
  const refCas = useScrollReveal();
  const refCreators = useScrollReveal();
  const refFormulaire = useScrollReveal();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return setError("Vérifiez que vous n'êtes pas un robot.");
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "marques",
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
        "Une erreur est survenue. Réessayez ou contactez-nous directement.",
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
            poster={i === 0 ? "/videos/marques/poster.jpg" : undefined}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === currentVideo ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-teal/50 to-teal/30" />
        <div className="hero-content relative z-10 text-center px-6 max-w-3xl mx-auto">
          <StickerLabel
            text="Marques"
            color="yellow"
            className="mx-auto mb-6"
          />
          <p className="hero-fade-up hero-d1 font-body text-yellow font-semibold tracking-widest text-sm uppercase mb-4">
            Partenaires & marques
          </p>
          <h1 className="hero-fade-up hero-d2 font-heading font-extrabold text-white text-4xl md:text-6xl leading-tight mb-6">
            Votre marque dans un voyage, pas dans un feed.
          </h1>
          <p className="hero-fade-up hero-d2 font-body text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Des créateurs organisent des voyages avec leur communauté. Votre
            marque fait partie de l'aventure. Pour de vrai.
          </p>
          <a
            href="#formulaire-marques"
            className="hero-fade-up hero-d3 inline-block bg-coral text-white font-body font-semibold px-10 py-4 rounded-full hover:bg-coral/90 transition-colors text-lg"
          >
            Devenir partenaire
          </a>
        </div>
      </section>

      {/* 2. Reassurance Band */}
      <ReassuranceBand />

      {/* 3. Proposition de valeur */}
      <section id="proposition" className="bg-white py-24 px-6">
        <div ref={refValues} className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <StickerLabel
              text="Pourquoi Sanko"
              color="coral"
              className="mx-auto mb-4"
            />
            <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-teal mb-4">
              Ce n'est pas un logo sur un itinéraire.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {brandValues.map((v, i) => (
              <div
                key={i}
                className="reveal scale-up bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ring-1 ring-teal/5"
              >
                <div className={`${v.iconColor} mb-4`}>{v.icon}</div>
                <h3 className="font-heading font-bold text-lg text-teal mb-3">
                  {v.title}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats banner */}
      <section id="chiffres" className="bg-teal py-20 px-6">
        <div ref={refStats} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brandStats.map((stat, i) => (
              <div key={i} className="reveal scale-up text-center">
                <p className="font-heading font-bold text-4xl md:text-5xl text-yellow mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-white text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pourquoi Sanko plutôt qu'un placement classique ? */}
      <section id="pourquoi" className="bg-white py-24 px-6">
        <div ref={refPourquoi} className="max-w-3xl mx-auto">
          <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-teal mb-8 text-center">
            Pourquoi Sanko plutôt qu'un placement classique ?
          </h2>
          <div className="reveal font-body text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              Un placement classique, c'est un logo dans un feed et un code
              promo qui expire dans 48h. Ça marche, mais c'est oubliable. Avec
              Sanko, votre marque fait partie d'un voyage que 30 personnes ont
              payé pour vivre ensemble.
            </p>
            <p>
              Le contenu sort naturellement du séjour. Personne ne joue un rôle.
              Et les gens qui regardent ces vidéos voient la différence entre
              un post sponsorisé et un moment vécu.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Cas concret */}
      <section id="cas-concret" className="bg-teal py-24 px-6">
        <div ref={refCas} className="max-w-4xl mx-auto text-center">
          <StickerLabel
            text="Cas concret"
            color="yellow"
            className="mx-auto mb-4"
          />
          <h2 className="reveal font-heading font-bold text-3xl md:text-4xl text-white mb-8">
            Comment ça se passe concrètement ?
          </h2>
          <div className="reveal scale-up bg-white rounded-2xl p-10 shadow-md">
            <p className="font-body text-gray-600 text-lg italic">
              Étude de cas à venir - nous préparons un retour d'expérience
              détaillé avec l'un de nos premiers partenaires.
            </p>
            <a
              href="#formulaire-marques"
              className="inline-block mt-6 bg-coral text-white font-body font-semibold px-8 py-3 rounded-full hover:bg-coral/90 transition-colors"
            >
              Être informé en avant-première
            </a>
          </div>
        </div>
      </section>

      {/* 7. Catalogue créateurs */}
      <section id="createurs" className="bg-white py-24 px-6">
        <div ref={refCreators} className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <StickerLabel
              text="Créateurs"
              color="coral"
              className="mx-auto mb-4"
            />
            <h2 className="reveal font-heading font-bold text-4xl text-teal mb-4">
              Trouvez le créateur qui parle à votre audience.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {brandCreators.map((c, i) => (
              <div
                key={i}
                className="reveal scale-up bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
              >
                {/* Image destination avec nom incrusté */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.destination}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent via-40% to-white" />
                  {/* Pastille statut */}
                  <span className={`absolute top-3 right-3 px-3 py-1 rounded-full font-accent font-semibold text-xs uppercase tracking-wide ${CREATOR_STATUS_STYLES[c.status]}`}>
                    {c.status}
                  </span>
                  {/* Destination sur l'image */}
                  <div className="absolute bottom-6 left-4 right-4">
                    <h3 className="font-heading font-bold text-2xl text-teal leading-tight">
                      {c.destination}
                    </h3>
                  </div>
                </div>

                {/* Section créateur + stats */}
                <div className="px-4 pb-4 -mt-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-10 h-10 flex-shrink-0">
                      <span className="absolute inset-0 rounded-full bg-teal flex items-center justify-center text-white text-xs font-bold">
                        {c.creator.replace('@', '').charAt(0).toUpperCase()}
                      </span>
                      <img
                        src={c.creatorImg}
                        alt={c.creator}
                        className="absolute inset-0 w-10 h-10 rounded-full object-cover ring-2 ring-teal/20"
                        onError={(e) => { e.target.style.display = 'none' }}
                      />
                    </div>
                    <p className="font-body text-coral font-semibold text-sm truncate min-w-0">
                      {c.creator}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-heading font-bold text-sm text-teal">{c.followers}</p>
                      <p className="font-body text-gray-500 text-xs">Abonnés</p>
                    </div>
                    <div className="w-px h-6 bg-teal/10" />
                    <div>
                      <p className="font-heading font-bold text-sm text-teal">{c.engagement}</p>
                      <p className="font-body text-gray-500 text-xs">Engagement</p>
                    </div>
                    <div className="w-px h-6 bg-teal/10" />
                    <div>
                      <p className="font-heading font-bold text-sm text-teal">{c.platform}</p>
                      <p className="font-body text-gray-500 text-xs">Plateforme</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Niveaux de partenariat */}
      <PartnershipTiers />

      {/* 9. Nos garanties */}
      <Guarantees />

      {/* 10. Ils nous font confiance */}
      <PartnersBanner />

      {/* 11. Formulaire marques + Calendly */}
      <section id="formulaire-marques" className="bg-teal py-24 px-6">
        <div ref={refFormulaire} className="max-w-3xl mx-auto">
          <div className="mb-14 text-center">
            <p className="font-body text-yellow font-semibold tracking-widest text-sm uppercase mb-3">
              Parlons-en
            </p>
            <h2 className="reveal font-heading font-bold text-4xl md:text-5xl text-white">
              On en discute ?
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
                  Notre équipe vous recontacte sous 48h pour discuter de votre
                  projet.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <StickerLabel text="Nom" color="teal" size="xs" className="mb-2" />
                    <input
                      name="nom"
                      value={form.nom}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="w-full font-body border border-teal/20 rounded-full px-5 py-3.5 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all bg-gray-light/40 text-teal placeholder-teal/30"
                    />
                  </div>
                  <div>
                    <StickerLabel text="Entreprise" color="yellow" size="xs" className="mb-2" />
                    <input
                      name="entreprise"
                      value={form.entreprise}
                      onChange={handleChange}
                      placeholder="Nom de votre entreprise"
                      required
                      className="w-full font-body border border-teal/20 rounded-full px-5 py-3.5 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all bg-gray-light/40 text-teal placeholder-teal/30"
                    />
                  </div>
                </div>
                <div>
                  <StickerLabel text="Email" color="teal" size="xs" className="mb-2" />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="vous@entreprise.com"
                    required
                    className="w-full font-body border border-teal/20 rounded-full px-5 py-3.5 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all bg-gray-light/40 text-teal placeholder-teal/30"
                  />
                </div>
                <div>
                  <StickerLabel text="Objectif" color="yellow" size="xs" className="mb-2" />
                  <select
                    name="objectif"
                    value={form.objectif}
                    onChange={handleChange}
                    required
                    className="w-full font-body border border-teal/20 rounded-full px-5 py-3.5 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all bg-gray-light/40 text-teal appearance-none"
                  >
                    <option value="">Sélectionnez un objectif</option>
                    <option value="visibilite">Visibilité & notoriété</option>
                    <option value="engagement">Engagement & contenu</option>
                    <option value="conversion">Conversion & acquisition</option>
                    <option value="brand-love">
                      Brand love & fidélisation
                    </option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <StickerLabel text="Message" color="coral" size="xs" className="mb-2" style={{ transform: 'rotate(-4deg)' }} />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Parlez-nous de votre projet, de votre marque et de vos objectifs…"
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

                <p className="font-body text-gray-500 text-xs text-center mt-2">
                  Vous préférez un échange direct ? Réservez un créneau sur
                  notre Calendly via la page Contact.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
