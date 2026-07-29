import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ prenom: '', email: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: remplacer par Formspree endpoint ou mailto
    // fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', ... })
    setSubmitted(true)
  }

  return (
    <main className="bg-beige min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-center">
          <p className="font-body text-orange font-semibold tracking-widest text-sm uppercase mb-3">
            Nous écrire
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-blue-dark">
            Connecte-toi à nous
          </h1>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Form */}
          <div className="md:col-span-3 bg-white rounded-3xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="font-heading font-bold text-2xl text-blue-dark mb-2">
                  Message envoyé !
                </h2>
                <p className="font-body text-blue-dark/60">
                  On revient vers toi très bientôt.
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
                    Tu es…
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    className="w-full font-body border border-blue-dark/15 rounded-xl px-5 py-3.5 outline-none focus:border-orange transition-colors bg-beige/50 text-blue-dark appearance-none"
                  >
                    <option value="" disabled>Sélectionne ton profil</option>
                    <option value="createur">Créateur de contenu</option>
                    <option value="partenaire">Partenaire / Marque</option>
                    <option value="autre">Autre</option>
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
                    placeholder="Dis-nous tout…"
                    rows={5}
                    required
                    className="w-full font-body border border-blue-dark/15 rounded-xl px-5 py-3.5 outline-none focus:border-orange transition-colors bg-beige/50 text-blue-dark placeholder-blue-dark/30 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange text-white font-body font-semibold px-8 py-4 rounded-lg hover:bg-orange/90 transition-colors text-base mt-2"
                >
                  Envoyer
                </button>
              </form>
            )}
          </div>

          {/* Info column */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <div className="bg-blue-dark rounded-2xl p-7">
              <h3 className="font-heading font-bold text-white text-xl mb-5">
                Infos pratiques
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <span className="text-orange mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-body text-beige/50 text-xs mb-0.5">Email</p>
                    <a href="mailto:hello@sankofa.fr" className="font-body text-beige text-sm hover:text-orange transition-colors">
                      hello@sankofa.fr
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-body text-beige/50 text-xs mb-0.5">Instagram</p>
                    <a href="#" className="font-body text-beige text-sm hover:text-orange transition-colors">
                      @sankofa
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange/10 border border-orange/20 rounded-2xl p-7">
              <p className="font-body text-blue-dark/80 text-sm leading-relaxed">
                <span className="font-semibold text-blue-dark">Temps de réponse :</span> Nous répondons
                à tous les messages sous <strong>48h</strong>. Si c'est urgent, passe-nous un DM sur Instagram.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
