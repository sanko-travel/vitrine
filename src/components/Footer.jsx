import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const sankoLinks = [
  { to: "https://withsanko.com", label: "withsanko.com", external: true },
  { to: "/notre-equipe", label: "Qui sommes-nous" },
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
    name: "WhatsApp",
    href: "https://wa.me/message/CI4DWPH2ICMTD1",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35zM12.05 21.5c-1.8 0-3.55-.48-5.08-1.4l-.36-.22-3.78.99 1.01-3.69-.24-.38A9.44 9.44 0 012.5 12.05C2.5 6.8 6.8 2.5 12.05 2.5c2.55 0 4.95 1 6.76 2.8a9.5 9.5 0 012.8 6.75c0 5.25-4.3 9.55-9.56 9.55zM12.05.5C5.7.5.5 5.7.5 12.05c0 2.04.54 4.03 1.56 5.78L.5 23.5l5.8-1.52A11.46 11.46 0 0012.05 23.5c6.35 0 11.55-5.2 11.55-11.55C23.6 5.6 18.4.5 12.05.5z" />
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
