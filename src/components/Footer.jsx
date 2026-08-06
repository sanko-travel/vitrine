import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const sankoLinks = [
  { to: "https://withsanko.com", label: "withsanko.com", external: true },
  { to: "/notre-concept", label: "Notre concept" },
  { to: "/creer-mon-voyage", label: "Je suis créateur" },
  { to: "/marques", label: "Je suis une marque" },
  { to: "/contact", label: "Contact" },
];

const legalLinks = [
  { to: "/mentions-legales", label: "Mentions légales" },
  {
    to: "/politique-de-confidentialite",
    label: "Politique de confidentialité",
  },
  {
    to: "/conditions-generales-de-vente",
    label: "CGV",
  },
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/withsanko/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-5 h-5"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/melanyfabre/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const ref = useScrollReveal();

  return (
    <footer className="bg-teal py-16 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="reveal flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-heading font-bold text-2xl text-white tracking-tight mb-2 block hover:text-white/90 transition-colors"
            >
              sanko<sup className="text-xs align-super">&copy;</sup>
            </Link>
            <p className="font-body text-white/60 text-sm max-w-xs">
              Catalyseur de rencontres
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex gap-10 sm:gap-16 text-center md:text-left">
            <nav className="flex flex-col gap-3">
              <p className="font-heading font-semibold text-white text-sm mb-1">
                Sanko
              </p>
              {sankoLinks.map(({ to, label, external }) =>
                external ? (
                  <a
                    key={to}
                    href={to}
                    className="font-body text-white/80 text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={to}
                    to={to}
                    className="font-body text-white/80 text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                ),
              )}
            </nav>
            <nav className="flex flex-col gap-3">
              <p className="font-heading font-semibold text-white text-sm mb-1">
                Légal
              </p>
              {legalLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-body text-white/80 text-sm hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-white/80 hover:text-coral transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center md:text-right">
          <p className="font-body text-white/70 text-sm">
            © {new Date().getFullYear()} Sanko - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
