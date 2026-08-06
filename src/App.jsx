import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import Voyage from './pages/Voyage'
import MentionsLegales from './pages/MentionsLegales'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'
import CGV from './pages/CGV'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

// TODO: Remove this password gate before launch
function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value === 'samsam') {
      localStorage.setItem('site-unlocked', 'true')
      onUnlock()
    } else {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen bg-beige flex items-center justify-center">
      <form onSubmit={handleSubmit} className="text-center space-y-6">
        <h1 className="font-lexend text-3xl text-teal">Sanko</h1>
        <p className="text-teal/70 font-dm-sans">Entrez le mot de passe pour accéder au site</p>
        <input
          type="password"
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false) }}
          placeholder="Mot de passe"
          className="block mx-auto px-4 py-3 rounded-lg border border-teal/25 bg-white text-teal font-dm-sans text-center focus:outline-none focus:ring-2 focus:ring-coral"
          autoFocus
        />
        {error && <p className="text-red-500 text-sm">Mot de passe incorrect</p>}
        <button
          type="submit"
          className="bg-coral text-white font-dm-sans font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
        >
          Entrer
        </button>
      </form>
    </div>
  )
}

function ProtectedRoute({ children }) {
  const [unlocked, setUnlocked] = useState(
    () => localStorage.getItem('site-unlocked') === 'true'
  )

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />
  }

  return children
}

function PublicLegalLayout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/conditions-generales-de-vente" element={<CGV />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages voyage accessibles sans mot de passe */}
        <Route path="/voyage/:slug" element={<Voyage />} />
        {/* Pages légales accessibles sans mot de passe */}
        <Route path="/mentions-legales" element={<PublicLegalLayout />} />
        <Route path="/politique-de-confidentialite" element={<PublicLegalLayout />} />
        <Route path="/conditions-generales-de-vente" element={<PublicLegalLayout />} />
        {/* Toutes les autres pages protégées */}
        <Route path="*" element={<ProtectedRoute><MainLayout /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}
