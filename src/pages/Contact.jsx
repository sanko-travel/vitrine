import { useState } from 'react'
import useTurnstile from '../hooks/useTurnstile'
import useScrollReveal from '../hooks/useScrollReveal'

const honeypotStyle = { position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }

export default function Contact() {
  const [form, setForm] = useState({ prenom: '', email: '', type: '', message: '' })
  const [website, setWebsite] = useState('')
  const [hpNumber, setFaxNumber] = useState('sk-78x')
  const [newsletter, setNewsletter] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { containerRef, token, reset } = useTurnstile()
  const revealRef = useScrollReveal()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!token) return setError('Vérifie que tu n\'es pas un robot.')
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: 'contact',
          data: form,
          website,
          number: hpNumber,
          newsletter,
          'cf-turnstile-response': token,
        }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      reset()
      setError('Une erreur est survenue. Réessaie ou contacte-nous directement.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-beige min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-center">
          <p className="font-body text-coral font-semibold tracking-widest text-sm uppercase mb-3">
            Nous écrire
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-teal">
            Connecte-toi à nous
          </h1>
        </div>

        <div ref={revealRef} className="grid md:grid-cols-5 gap-12 items-start">
          {/* Form */}
          <div className="reveal from-left md:col-span-3 bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-teal/5">
            {submitted ? (
              <div className="text-center py-10">
                <svg className="w-14 h-14 text-coral mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h2 className="font-heading font-bold text-2xl text-teal mb-2">
                  Message envoyé !
                </h2>
                <p className="font-body text-gray-600">
                  On revient vers toi très bientôt.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="font-body text-sm font-semibold text-teal mb-1.5 block">
                    Prénom
                  </label>
                  <input
                    name="prenom"
                    value={form.prenom}
                    onChange={handleChange}
                    placeholder="Ton prénom"
                    required
                    className="w-full font-body border border-teal/20 rounded-xl px-5 py-3.5 outline-none focus:border-coral transition-colors bg-gray-light/40 text-teal placeholder-teal/30"
                  />
                </div>
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
                    Tu es…
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    className="w-full font-body border border-teal/20 rounded-xl px-5 py-3.5 outline-none focus:border-coral transition-colors bg-gray-light/40 text-teal appearance-none"
                  >
                    <option value="" disabled>Sélectionne ton profil</option>
                    <option value="createur">Créateur de contenu</option>
                    <option value="partenaire">Partenaire / Marque</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm font-semibold text-teal mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Dis-nous tout…"
                    rows={5}
                    required
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
                  {loading ? 'Envoi…' : 'Envoyer'}
                </button>

                {error && (
                  <p className="font-body text-coral text-sm bg-coral/10 rounded-lg px-4 py-3">{error}</p>
                )}
              </form>
            )}
          </div>

          {/* Info column */}
          <div className="reveal from-right md:col-span-2 flex flex-col gap-8">
            <div className="bg-teal rounded-2xl p-7">
              <h3 className="font-heading font-bold text-white text-xl mb-5">
                Infos pratiques
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <span className="text-coral mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-body text-white/80 text-xs mb-0.5">Email</p>
                    <a href="mailto:contact@withsanko.com" className="font-body text-white text-sm hover:text-coral transition-colors">
                      contact@withsanko.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-coral mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-body text-white/80 text-xs mb-0.5">Instagram</p>
                    <a href="https://www.instagram.com/withsanko/" target="_blank" rel="noopener noreferrer" className="font-body text-white text-sm hover:text-coral transition-colors">
                      @withsanko
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-light border border-yellow/20 rounded-2xl p-7">
              <p className="font-body text-teal text-sm leading-relaxed">
                <span className="font-semibold">Temps de réponse :</span> Nous répondons
                à tous les messages sous <strong>48h</strong>. Si c'est urgent, passe-nous un DM sur Instagram.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
