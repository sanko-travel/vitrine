import { useState } from "react";
import { Link } from "react-router-dom";
import useTurnstile from "../hooks/useTurnstile";
import StickerLabel from "../components/StickerLabel";

const steps = [
  {
    number: "01",
    title: "On en discute ensemble",
    description:
      "Réserve un appel avec notre équipe pour nous parler de ton projet. On définit ensemble la destination, le format et les détails de ton voyage.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "On s'occupe de tout",
    description:
      "Logistique, hébergement, activités, transports… Notre équipe gère l'intégralité de l'organisation pour toi.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Tu vis l'expérience et crées du contenu",
    description:
      "Concentre-toi sur ce que tu fais de mieux : vivre le moment et partager des souvenirs uniques avec ta communauté.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
];

const avantages = [
  {
    title: "Places offertes",
    description:
      "Organise un voyage pour ta communauté et ta place est prise en charge. Tu profites aussi d'autres avantages en tant que créateur partenaire.",
    borderColor: "border-coral",
    iconColor: "text-coral",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
  },
  {
    title: "Contenu",
    description:
      "Vis des expériences uniques pensées pour être filmées, photographiées et partagées. Du contenu authentique, sans effort.",
    borderColor: "border-teal",
    iconColor: "text-teal",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "Communauté",
    description:
      "Renforce le lien avec ton audience en vivant une aventure ensemble. Rien ne rapproche plus qu'un voyage partagé.",
    borderColor: "border-yellow",
    iconColor: "text-yellow",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

const temoignages = [
  {
    name: "Amina K.",
    handle: "@amina.travels",
    followers: "120K abonnés",
    quote:
      "J'avais toujours voulu emmener ma communauté en voyage, mais la logistique me faisait peur. Avec Sanko, j'ai juste eu à profiter et créer du contenu. Le reste était géré de A à Z.",
  },
  {
    name: "Marcus D.",
    handle: "@marcus.explore",
    followers: "85K abonnés",
    quote:
      "Mon premier voyage avec Sanko a généré plus de revenus que 3 mois de partenariats classiques. Et surtout, ma communauté m'en parle encore tous les jours.",
  },
  {
    name: "Sofia L.",
    handle: "@sofia.world",
    followers: "200K abonnés",
    quote:
      "Ce qui m'a convaincue, c'est l'accompagnement. L'équipe Sanko comprend les créateurs et sait exactement ce dont on a besoin pour produire du contenu incroyable.",
  },
];

const faqItems = [
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
    question: "Comment sont calculés mes revenus ?",
    answer:
      "Tu reçois une commission sur chaque inscription confirmée. Le montant dépend de la destination et du nombre de participants. On te présente tout ça en détail lors de notre premier échange.",
  },
  {
    question: "Quelles destinations sont disponibles ?",
    answer:
      "Nous proposons des destinations en Afrique, Asie, Amérique latine et Europe. Tu peux aussi proposer ta propre destination et on étudie la faisabilité ensemble.",
  },
  {
    question: "Faut-il une taille minimum de communauté ?",
    answer:
      "Pas de minimum strict, mais nous recommandons au moins 5 000 abonnés engagés pour garantir un voyage réussi. Ce qui compte, c'est l'engagement de ta communauté, pas juste le nombre.",
  },
];

const honeypotStyle = { position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" };

export default function CreerMonVoyage() {
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
  const { containerRef, token, reset } = useTurnstile();

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
      setError("Une erreur est survenue. Réessaie ou contacte-nous directement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url(/images/paysages/paysage_005.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-teal/50 to-teal/30" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <StickerLabel text="Créateurs" color="coral" className="mx-auto mb-6" />
          <p className="font-body text-coral font-semibold tracking-widest text-sm uppercase mb-4">
            Créateurs de contenu
          </p>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-6xl leading-tight mb-6">
            Vivez l'aventure d'une vie avec votre audience
          </h1>
          <a
            href="#formulaire"
            className="inline-block bg-coral text-white font-body font-semibold px-10 py-4 rounded-full hover:bg-coral/90 transition-colors text-lg"
          >
            Lancer mon projet
          </a>
        </div>
      </section>

      {/* Pourquoi Sanko ? */}
      <section className="bg-beige py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-teal mb-8">
            Pourquoi Sanko ?
          </h2>
          <div className="font-body text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              Tu rêves d'emmener ta communauté à l'autre bout du monde, mais tu
              ne sais pas par où commencer ? Sanko est né pour ça. Nous sommes
              une agence de voyage spécialisée dans l'accompagnement des
              créateurs de contenu.
            </p>
            <p>
              De la sélection de la destination à la gestion des inscriptions,
              en passant par la logistique complète sur place — on prend tout en
              charge pour que tu puisses te concentrer sur ce que tu fais de
              mieux : créer et inspirer.
            </p>
          </div>
        </div>
      </section>

      {/* Comment ça marche — Timeline */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-teal mb-4">
              Comment ça marche
            </h2>
            <p className="font-body text-gray-600 text-lg">
              3 étapes simples pour lancer ton voyage.
            </p>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-teal/15 -translate-x-1/2" />
            <div className="flex flex-col gap-12">
              {steps.map((step, i) => (
                <div key={step.number} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
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
                  {/* Circle number */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-teal text-white font-heading font-bold text-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    {step.number}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vos avantages */}
      <section className="bg-beige py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-4xl text-teal mb-4">
              Vos avantages
            </h2>
            <p className="font-body text-gray-600 text-lg">
              Ce que Sanko vous apporte concrètement.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {avantages.map((a, i) => (
              <div key={i} className={`bg-white border-t-4 ${a.borderColor} rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}>
                <div className={`${a.iconColor} mb-4`}>{a.icon}</div>
                <h3 className="font-heading font-bold text-2xl text-teal mb-3">
                  {a.title}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages créateurs */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-4xl text-teal mb-4">
              Ils ont créé leur voyage
            </h2>
            <p className="font-body text-gray-600 text-lg">
              Des créateurs qui ont franchi le pas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {temoignages.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-8"
              >
                <span className="font-heading text-5xl text-coral/30 leading-none select-none">"</span>
                <p className="font-body text-gray-700 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-heading font-bold text-teal">{t.name}</p>
                  <p className="font-body text-coral text-sm">{t.handle}</p>
                  <p className="font-body text-gray-500 text-xs mt-1">
                    {t.followers}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-4xl text-teal mb-4">
              Questions fréquentes
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="border border-teal/15 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-light/40 transition-colors"
                >
                  <span className="font-body font-semibold text-teal pr-4">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-coral flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <p className={`px-6 pb-5 font-body text-gray-600 text-sm leading-relaxed ${openFaq === i ? 'border-l-4 border-coral ml-4' : ''}`}>
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section id="formulaire" className="bg-beige py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14 text-center">
            <p className="font-body text-coral font-semibold tracking-widest text-sm uppercase mb-3">
              On y est
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-teal">
              Lance ton projet de voyage
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-teal/5">
            {submitted ? (
              <div className="text-center py-10">
                <svg className="w-14 h-14 text-coral mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
                <h3 className="font-heading font-bold text-2xl text-teal mb-2">
                  Demande envoyée !
                </h3>
                <p className="font-body text-gray-600">
                  Notre équipe te contacte sous 48h pour discuter de ton projet.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="font-body text-sm font-semibold text-teal mb-1.5 block">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ton@email.fr"
                    required
                    className="w-full font-body border border-teal/20 rounded-xl px-5 py-3.5 outline-none focus:border-coral transition-colors bg-gray-light/40 text-teal placeholder-teal/30"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-semibold text-teal mb-1.5 block">
                    Instagram / TikTok
                  </label>
                  <input
                    name="social"
                    value={form.social}
                    onChange={handleChange}
                    placeholder="@tonpseudo"
                    required
                    className="w-full font-body border border-teal/20 rounded-xl px-5 py-3.5 outline-none focus:border-coral transition-colors bg-gray-light/40 text-teal placeholder-teal/30"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-semibold text-teal mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Parle-nous de ton projet de voyage…"
                    rows={5}
                    className="w-full font-body border border-teal/20 rounded-xl px-5 py-3.5 outline-none focus:border-coral transition-colors bg-gray-light/40 text-teal placeholder-teal/30 resize-none"
                  />
                </div>
                {/* Honeypot fields */}
                <div style={honeypotStyle} aria-hidden="true">
                  <input type="text" name="website" value={website} onChange={e => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" />
                  <input type="text" name="number" value={hpNumber} onChange={e => setFaxNumber(e.target.value)} tabIndex={-1} autoComplete="off" />
                  <input type="checkbox" name="newsletter" checked={newsletter} onChange={e => setNewsletter(e.target.checked)} tabIndex={-1} />
                </div>

                <div ref={containerRef} className="flex justify-center" />
                <button
                  type="submit"
                  disabled={loading || !token}
                  className="bg-coral text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-coral/90 transition-colors text-base mt-2 disabled:opacity-60"
                >
                  {loading ? "Envoi…" : "Envoyer ma demande"}
                </button>

                {error && (
                  <p className="font-body text-coral text-sm bg-coral/10 rounded-lg px-4 py-3">{error}</p>
                )}
              </form>
            )}
          </div>

          <p className="font-body text-gray-700 text-lg mt-10 text-center">
            Ou prends un rdv directement avec la grande chef{" "}
            <a
              href="https://calendly.com/sankofatravelstudio/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coral font-semibold underline hover:text-coral/70 transition-colors"
            >
              juste ici
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
