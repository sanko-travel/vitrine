import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const CTA_COLORS = [
  '#E67A52', // orange
  '#0B6863', // green-dark
  '#102C40', // blue-dark
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [ctaColor, setCtaColor] = useState(CTA_COLORS[0])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight <= 0) return
      const progress = Math.min(window.scrollY / scrollHeight, 1)

      const idx = Math.min(
        Math.floor(progress * CTA_COLORS.length),
        CTA_COLORS.length - 1
      )
      setCtaColor(CTA_COLORS[idx])
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { to: '/creer-mon-voyage', label: 'Créer mon voyage' },
    { to: '/notre-equipe', label: 'Notre équipe' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-dark shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 font-heading font-bold text-2xl text-white tracking-tight">
          Sanko
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-body font-medium text-sm transition-colors ${
                  isActive
                    ? 'text-orange'
                    : 'text-white hover:text-orange'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/creer-mon-voyage"
            className="text-white font-body font-semibold text-sm px-6 py-2.5 rounded-lg"
            style={{ backgroundColor: ctaColor, transition: 'background-color 0.5s ease' }}
          >
            Créer mon voyage
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-body font-medium text-sm ${isActive ? 'text-orange' : 'text-white'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/creer-mon-voyage"
            onClick={() => setMenuOpen(false)}
            className="bg-orange text-white font-body font-semibold text-sm px-6 py-2.5 rounded-lg text-center hover:bg-orange/90 transition-colors mt-2"
          >
            Créer mon voyage
          </Link>
        </div>
      )}
    </header>
  )
}
