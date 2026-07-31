import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import Voyage from './pages/Voyage'

// TODO: Remove this password gate before launch
function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value === 'samsam') {
      sessionStorage.setItem('site-unlocked', 'true')
      onUnlock()
    } else {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen bg-beige flex items-center justify-center">
      <form onSubmit={handleSubmit} className="text-center space-y-6">
        <h1 className="font-lexend text-3xl text-teal">Sankofa</h1>
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

export default function App() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem('site-unlocked') === 'true'
  )

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/voyage/:slug" element={<Voyage />} />
        <Route path="*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  )
}
