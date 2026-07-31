import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-beige flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-heading font-bold text-8xl text-teal/10 mb-4">404</p>
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-teal mb-4">
          Page introuvable
        </h1>
        <p className="font-body text-gray-600 mb-8">
          Cette page n'existe pas ou a été déplacée. Pas de panique, l'aventure continue.
        </p>
        <Link
          to="/"
          className="inline-block bg-coral text-white font-body font-semibold px-8 py-3 rounded-full hover:bg-coral/90 transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    </main>
  )
}
