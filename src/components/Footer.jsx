import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/our-team', label: 'Our Team' },
  { to: '/contact', label: 'Contact' },
  { to: '/mentions-legales', label: 'Mentions légales' },
]

const socials = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.26 6.26 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.2 8.2 0 004.79 1.53V6.82a4.85 4.85 0 01-1.02-.13z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.05 0 12 0 12s0 3.95.5 5.81A3.02 3.02 0 002.62 19.95C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.95 24 12 24 12s0-3.95-.5-5.81zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-blue-dark py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Logo */}
          <div>
            <span className="font-heading font-bold text-2xl text-white tracking-tight mb-4 block">
              Sanko
            </span>
            <p className="font-body text-beige/50 text-sm max-w-xs">
              L'agence de voyage pour créateurs de contenu.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="font-body text-beige/60 text-sm hover:text-beige transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className="text-beige/50 hover:text-orange transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="font-body text-beige/40 text-sm">
            © 2025 Sanko — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  )
}
