import { useState, useEffect } from 'react'

const CTA_COLORS = [
  '#ea573d', // coral
  '#f8a009', // yellow
  '#025961', // teal
]

const navLinks = [
  { label: 'Programme', href: '#programme' },
  { label: 'Tarifs', href: '#reservation' },
  { label: 'Inscription', href: '#inscription' },
]

export default function VoyageHeader({ data }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [ctaColor, setCtaColor] = useState(CTA_COLORS[0])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className={`font-heading font-bold text-xl transition-colors ${scrolled ? 'text-teal' : 'text-white'}`}>
          sanko<sup className="text-xs">&copy;</sup>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-medium transition-colors hover:text-coral ${
                scrolled ? 'text-teal' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            className="text-white font-body font-semibold px-5 py-2.5 rounded-full text-sm"
            style={{ backgroundColor: ctaColor, transition: 'background-color 0.5s ease' }}
          >
            S'inscrire
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden transition-colors ${scrolled ? 'text-teal' : 'text-white'}`}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-teal/10 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-teal font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={() => setMenuOpen(false)}
              className="text-white font-body font-semibold px-5 py-3 rounded-full text-sm text-center"
              style={{ backgroundColor: ctaColor, transition: 'background-color 0.5s ease' }}
            >
              S'inscrire
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
