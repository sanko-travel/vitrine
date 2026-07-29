import { useState } from 'react'

export default function LeadCaptureForm() {
  const [handle, setHandle] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: remplacer par Formspree endpoint
    // fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: ... })
    setSubmitted(true)
  }

  return (
    <section id="form" className="bg-orange py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
          Tu souhaites devenir ambassadeur ?
        </h2>
        <p className="font-body text-white/80 text-lg mb-10">
          Rejoins les créateurs qui transforment leur passion en aventure partagée.
        </p>

        {submitted ? (
          <div className="bg-white/20 backdrop-blur rounded-2xl p-10">
            <p className="font-heading font-bold text-white text-2xl mb-2">Bienvenue dans l'aventure ! 🎉</p>
            <p className="font-body text-white/80">On te contacte très bientôt.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={handle}
              onChange={e => setHandle(e.target.value)}
              placeholder="@tonhandle"
              required
              className="flex-1 font-body bg-white/20 backdrop-blur text-white placeholder-white/60 border border-white/30 rounded-lg px-6 py-4 outline-none focus:border-white focus:bg-white/30 transition-colors"
            />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="ton@mail.fr"
              required
              className="flex-1 font-body bg-white/20 backdrop-blur text-white placeholder-white/60 border border-white/30 rounded-lg px-6 py-4 outline-none focus:border-white focus:bg-white/30 transition-colors"
            />
            <button
              type="submit"
              className="bg-blue-dark text-white font-body font-semibold px-8 py-4 rounded-lg hover:bg-blue-dark/80 transition-colors whitespace-nowrap"
            >
              Je rejoins l'aventure
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
