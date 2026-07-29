import { useState } from 'react'
import { Link } from 'react-router-dom'

const steps = [
  {
    number: '01',
    title: 'Tu choisis ta destination',
    description:
      'Sélectionne la destination de tes rêves parmi nos propositions ou propose la tienne. On étudie chaque projet ensemble.',
  },
  {
    number: '02',
    title: "On s'occupe de tout",
    description:
      'Logistique, hébergement, activités, transports… Notre équipe gère l\'intégralité de l\'organisation pour toi.',
  },
  {
    number: '03',
    title: 'Tu vis l\'expérience et crées du contenu',
    description:
      'Concentre-toi sur ce que tu fais de mieux : vivre le moment et partager des souvenirs uniques avec ta communauté.',
  },
]

const avantages = [
  {
    icon: '💸',
    title: 'Revenus',
    description:
      'Gagne une commission sur chaque participant inscrit à ton voyage. Plus ta communauté te suit, plus tu gagnes.',
    bg: 'bg-orange',
    text: 'text-white',
  },
  {
    icon: '🎬',
    title: 'Contenu',
    description:
      'Vis des expériences uniques pensées pour être filmées, photographiées et partagées. Du contenu authentique, sans effort.',
    bg: 'bg-green-light',
    text: 'text-blue-dark',
  },
  {
    icon: '🤝',
    title: 'Communauté',
    description:
      'Renforce le lien avec ton audience en vivant une aventure ensemble. Rien ne rapproche plus qu\'un voyage partagé.',
    bg: 'bg-yellow',
    text: 'text-blue-dark',
  },
]

const temoignages = [
  {
    name: 'Amina K.',
    handle: '@amina.travels',
    followers: '120K abonnés',
    quote:
      'J\'avais toujours voulu emmener ma communauté en voyage, mais la logistique me faisait peur. Avec Sanko, j\'ai juste eu à profiter et créer du contenu. Le reste était géré de A à Z.',
  },
  {
    name: 'Marcus D.',
    handle: '@marcus.explore',
    followers: '85K abonnés',
    quote:
      'Mon premier voyage avec Sanko a généré plus de revenus que 3 mois de partenariats classiques. Et surtout, ma communauté m\'en parle encore tous les jours.',
  },
  {
    name: 'Sofia L.',
    handle: '@sofia.world',
    followers: '200K abonnés',
    quote:
      'Ce qui m\'a convaincue, c\'est l\'accompagnement. L\'équipe Sanko comprend les créateurs et sait exactement ce dont on a besoin pour produire du contenu incroyable.',
  },
]

const faqItems = [
  {
    question: 'Combien de participants minimum pour organiser un voyage ?',
    answer:
      'Il faut un minimum de 10 participants pour lancer un voyage. Notre équipe t\'accompagne dans la promotion auprès de ta communauté pour atteindre cet objectif.',
  },
  {
    question: 'Qui gère la logistique sur place ?',
    answer:
      'Sanko s\'occupe de tout : vols, hébergements, activités, transports locaux, restauration. Un coordinateur Sanko est présent sur place pendant tout le voyage.',
  },
  {
    question: 'Comment sont calculés mes revenus ?',
    answer:
      'Tu reçois une commission sur chaque inscription confirmée. Le montant dépend de la destination et du nombre de participants. On te présente tout ça en détail lors de notre premier échange.',
  },
  {
    question: 'Quelles destinations sont disponibles ?',
    answer:
      'Nous proposons des destinations en Afrique, Asie, Amérique latine et Europe. Tu peux aussi proposer ta propre destination et on étudie la faisabilité ensemble.',
  },
  {
    question: 'Faut-il une taille minimum de communauté ?',
    answer:
      'Pas de minimum strict, mais nous recommandons au moins 5 000 abonnés engagés pour garantir un voyage réussi. Ce qui compte, c\'est l\'engagement de ta communauté, pas juste le nombre.',
  },
]

export default function CreerMonVoyage() {
  const [form, setForm] = useState({
    prenom: '',
    email: '',
    social: '',
    communaute: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/paysages/paysage_005.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-dark/70" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="font-body text-orange font-semibold tracking-widest text-sm uppercase mb-4">
            Créateurs de contenu
          </p>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-6xl leading-tight mb-6">
            Transformez votre audience en aventuriers
          </h1>
          <p className="font-body text-white/70 text-lg md:text-xl mb-10">
            Organisez des voyages inoubliables pour votre communauté. On gère tout, vous créez.
          </p>
          <a
            href="#formulaire"
            className="inline-block bg-orange text-white font-body font-semibold px-10 py-4 rounded-lg hover:bg-orange/90 transition-colors text-lg"
          >
            Lancer mon projet
          </a>
        </div>
      </section>

      {/* ── Pourquoi Sanko ? ── */}
      <section className="bg-beige py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-blue-dark mb-8">
            Pourquoi Sanko ?
          </h2>
          <div className="font-body text-blue-dark/80 text-lg leading-relaxed space-y-6">
            <p>
              Tu rêves d'emmener ta communauté à l'autre bout du monde, mais tu ne sais pas par où commencer ?
              Sanko est né pour ça. Nous sommes une agence de voyage spécialisée dans l'accompagnement
              des créateurs de contenu.
            </p>
            <p>
              De la sélection de la destination à la gestion des inscriptions, en passant par
              la logistique complète sur place — on prend tout en charge pour que tu puisses
              te concentrer sur ce que tu fais de mieux : créer et inspirer.
            </p>
          </div>
        </div>
      </section>

      {/* ── Comment ça marche ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-blue-dark mb-4">
              Comment ça marche
            </h2>
            <p className="font-body text-blue-dark/60 text-lg">
              3 étapes simples pour lancer ton voyage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="font-heading font-extrabold text-6xl text-orange/20 mb-4">
                  {step.number}
                </div>
                <h3 className="font-heading font-bold text-xl text-blue-dark mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-blue-dark/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vos avantages ── */}
      <section className="bg-beige py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-4xl text-blue-dark mb-4">
              Vos avantages
            </h2>
            <p className="font-body text-blue-dark/60 text-lg">
              Ce que Sanko vous apporte concrètement.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {avantages.map((a, i) => (
              <div key={i} className={`${a.bg} ${a.text} rounded-2xl p-8`}>
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="font-heading font-bold text-2xl mb-3">{a.title}</h3>
                <p className="font-body text-sm leading-relaxed opacity-90">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Témoignages créateurs ── */}
      <section className="bg-green-dark py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-4xl text-white mb-4">
              Ils ont créé leur voyage
            </h2>
            <p className="font-body text-white/60 text-lg">
              Des créateurs qui ont franchi le pas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {temoignages.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <p className="font-body text-white/90 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-heading font-bold text-white">{t.name}</p>
                  <p className="font-body text-orange text-sm">{t.handle}</p>
                  <p className="font-body text-white/50 text-xs mt-1">{t.followers}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-4xl text-blue-dark mb-4">
              Questions fréquentes
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="border border-blue-dark/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-beige/50 transition-colors"
                >
                  <span className="font-body font-semibold text-blue-dark pr-4">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-orange flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 font-body text-blue-dark/70 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formulaire ── */}
      <section id="formulaire" className="bg-beige py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14 text-center">
            <p className="font-body text-orange font-semibold tracking-widest text-sm uppercase mb-3">
              On y est
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-blue-dark">
              Lance ton projet de voyage
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="font-heading font-bold text-2xl text-blue-dark mb-2">
                  Demande envoyée !
                </h3>
                <p className="font-body text-blue-dark/60">
                  Notre équipe te contacte sous 48h pour discuter de ton projet.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="font-body text-sm font-semibold text-blue-dark/70 mb-1.5 block">
                    Prénom
                  </label>
                  <input
                    name="prenom"
                    value={form.prenom}
                    onChange={handleChange}
                    placeholder="Ton prénom"
                    required
                    className="w-full font-body border border-blue-dark/15 rounded-xl px-5 py-3.5 outline-none focus:border-orange transition-colors bg-beige/50 text-blue-dark placeholder-blue-dark/30"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-semibold text-blue-dark/70 mb-1.5 block">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ton@email.fr"
                    required
                    className="w-full font-body border border-blue-dark/15 rounded-xl px-5 py-3.5 outline-none focus:border-orange transition-colors bg-beige/50 text-blue-dark placeholder-blue-dark/30"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-semibold text-blue-dark/70 mb-1.5 block">
                    Instagram / TikTok
                  </label>
                  <input
                    name="social"
                    value={form.social}
                    onChange={handleChange}
                    placeholder="@tonpseudo"
                    required
                    className="w-full font-body border border-blue-dark/15 rounded-xl px-5 py-3.5 outline-none focus:border-orange transition-colors bg-beige/50 text-blue-dark placeholder-blue-dark/30"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-semibold text-blue-dark/70 mb-1.5 block">
                    Taille de ta communauté
                  </label>
                  <select
                    name="communaute"
                    value={form.communaute}
                    onChange={handleChange}
                    required
                    className="w-full font-body border border-blue-dark/15 rounded-xl px-5 py-3.5 outline-none focus:border-orange transition-colors bg-beige/50 text-blue-dark appearance-none"
                  >
                    <option value="" disabled>Sélectionne une tranche</option>
                    <option value="5k-10k">5 000 – 10 000</option>
                    <option value="10k-50k">10 000 – 50 000</option>
                    <option value="50k-100k">50 000 – 100 000</option>
                    <option value="100k+">100 000+</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm font-semibold text-blue-dark/70 mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Parle-nous de ton projet de voyage…"
                    rows={5}
                    className="w-full font-body border border-blue-dark/15 rounded-xl px-5 py-3.5 outline-none focus:border-orange transition-colors bg-beige/50 text-blue-dark placeholder-blue-dark/30 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange text-white font-body font-semibold px-8 py-4 rounded-lg hover:bg-orange/90 transition-colors text-base mt-2"
                >
                  Envoyer ma demande
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
