import { useState } from 'react'
import useTurnstile from '../hooks/useTurnstile'
import useScrollReveal from '../hooks/useScrollReveal'

const honeypotStyle = { position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }

export default function LeadCaptureForm() {
  const [handle, setHandle] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [hpNumber, setFaxNumber] = useState('sk-78x')
  const [newsletter, setNewsletter] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { containerRef, token, reset } = useTurnstile()
  const revealRef = useScrollReveal()

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
          form: 'lead-capture',
          data: { handle, email },
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
    <section id="formulaire" className="bg-teal py-24 px-6">
      <div ref={revealRef} className="max-w-2xl mx-auto text-center">
        <h2 className="reveal fade-only font-heading font-bold text-4xl md:text-5xl text-white mb-4">
          Tu souhaites créer ton propre voyage ?
        </h2>
        <p className="reveal fade-only font-body text-white/80 text-lg mb-10">
          Tu es créateur de contenu et tu rêves de faire voyager ta communauté ? Lance ton voyage de groupe sur-mesure avec Sankofa.
        </p>

        {submitted ? (
          <div className="reveal fade-only bg-white/90 backdrop-blur rounded-2xl p-10">
            <p className="font-heading font-bold text-teal text-2xl mb-2">Bienvenue dans l'aventure !</p>
            <p className="font-body text-gray-600">On te contacte très bientôt.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal fade-only flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={handle}
                onChange={e => setHandle(e.target.value)}
                placeholder="@tonhandle"
                required
                className="flex-1 font-body bg-white text-teal placeholder-teal/40 border border-white/30 rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-coral transition-colors"
              />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="ton@mail.fr"
                required
                className="flex-1 font-body bg-white text-teal placeholder-teal/40 border border-white/30 rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-coral transition-colors"
              />
            </div>

            {/* Honeypot fields */}
            <div style={honeypotStyle} aria-hidden="true">
              <input type="text" name="website" value={website} onChange={e => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" />
              <input type="text" name="number" value={hpNumber} onChange={e => setFaxNumber(e.target.value)} tabIndex={-1} autoComplete="off" />
              <input type="checkbox" name="newsletter" checked={newsletter} onChange={e => setNewsletter(e.target.checked)} tabIndex={-1} />
            </div>

            <button
              type="submit"
              disabled={loading || !token}
              className="self-center bg-coral text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-coral/90 transition-colors whitespace-nowrap disabled:opacity-60"
            >
              {loading ? 'Envoi…' : 'Je rejoins l\'aventure'}
            </button>
          </form>
        )}

        <div ref={containerRef} className="flex justify-center mt-4" />

        {error && (
          <p className="font-body text-coral bg-white/90 rounded-full px-4 py-3 mt-4">{error}</p>
        )}

      </div>
    </section>
  )
}
