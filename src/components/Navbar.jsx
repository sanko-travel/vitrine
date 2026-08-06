import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const LIGHT_BG_ROUTES = ['/contact']

const CTA_COLORS = [
  '#ea573d', // coral
  '#f8a009', // yellow
  '#025961', // teal
]

export default function Navbar() {
  const { pathname } = useLocation()
  const forceSolid = LIGHT_BG_ROUTES.includes(pathname)
  const [scrolled, setScrolled] = useState(forceSolid)
  const [menuOpen, setMenuOpen] = useState(false)
  const [ctaColor, setCtaColor] = useState(CTA_COLORS[0])

  useEffect(() => {
    if (forceSolid) {
      setScrolled(true)
      return
    }
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
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [forceSolid])

  const navLinks = [
    { to: '/creer-mon-voyage', label: 'Je suis créateur' },
    { to: '/marques', label: 'Je suis une marque' },
    { to: '/notre-concept', label: 'Notre concept' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className={`flex-shrink-0 font-heading font-bold text-2xl tracking-tight transition-colors ${scrolled ? 'text-teal' : 'text-white'}`}>
          sanko<sup className="text-xs align-super">&copy;</sup>
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
                    ? 'text-coral'
                    : scrolled ? 'text-teal hover:text-coral' : 'text-white hover:text-coral'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Socials + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3">
            {[
              { name: 'Instagram', href: 'https://www.instagram.com/withsanko/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg> },

              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/melanyfabre/', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg> },
            ].map(({ name, href, icon }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className={`transition-colors ${scrolled ? 'text-teal hover:text-coral' : 'text-white hover:text-coral'}`}>
                {icon}
              </a>
            ))}
          </div>
          <Link
            to={pathname === '/creer-mon-voyage' || pathname === '/marques' ? '/contact' : '/creer-mon-voyage'}
            className="text-white font-body font-semibold text-sm px-6 py-2.5 rounded-full"
            style={{ backgroundColor: ctaColor, transition: 'background-color 0.5s ease' }}
          >
            {pathname === '/creer-mon-voyage' || pathname === '/marques' ? 'Nous contacter' : 'Je suis créateur'}
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? 'text-teal' : 'text-white'}`}
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
        <div className="md:hidden bg-white border-t border-teal/10 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-body font-medium text-sm ${isActive ? 'text-coral' : 'text-teal'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="flex items-center gap-4 mt-2">
            {[
              { name: 'Instagram', href: 'https://www.instagram.com/withsanko/', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg> },

              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/melanyfabre/', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg> },
            ].map(({ name, href, icon }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-teal hover:text-coral transition-colors">
                {icon}
              </a>
            ))}
          </div>
          <Link
            to={pathname === '/creer-mon-voyage' || pathname === '/marques' ? '/contact' : '/creer-mon-voyage'}
            onClick={() => setMenuOpen(false)}
            className="text-white font-body font-semibold text-sm px-6 py-2.5 rounded-full text-center mt-2"
            style={{ backgroundColor: ctaColor, transition: 'background-color 0.5s ease' }}
          >
            {pathname === '/creer-mon-voyage' || pathname === '/marques' ? 'Nous contacter' : 'Je suis créateur'}
          </Link>
        </div>
      )}
    </header>
  )
}
