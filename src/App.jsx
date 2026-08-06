import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Voyage from "./pages/Voyage";

const PUBLIC_PATHS = [
  "/mentions-legales",
  "/politique-de-confidentialite",
  "/conditions-generales-de-vente",
];

// TODO: Remove this password gate before launch
function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "samsam") {
      localStorage.setItem("site-unlocked", "true");
      onUnlock();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-teal flex items-center justify-center px-4 relative overflow-hidden">
      {/* Oiseau Sanko watermark */}
      <img
        src="/images/logo/image5.png"
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[600px] opacity-[0.06] pointer-events-none select-none"
        draggable="false"
      />

      <div className="text-center relative z-10 max-w-lg w-full">
        {/* Logo texte comme dans le header */}
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-10 tracking-tight">
          sanko<sup className="text-xs align-super">&copy;</sup>
        </h2>

        {/* Titre avec stickers */}
        <div className="relative inline-block mb-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Site en
            <br />
            construction
          </h1>
          <span className="absolute -top-4 -right-6 md:-right-12 inline-block bg-coral text-white font-accent font-semibold text-xs md:text-sm px-3 md:px-4 py-1 rounded-full rotate-[6deg]">
            Voyage
          </span>
          <span className="absolute -bottom-3 -left-4 md:-left-10 inline-block bg-yellow text-white font-accent font-semibold text-xs md:text-sm px-3 md:px-4 py-1 rounded-full -rotate-[4deg]">
            Impact
          </span>
        </div>

        {/* Message */}
        <p className="text-white/90 font-body text-lg md:text-xl max-w-md mx-auto mb-10 leading-relaxed">
          On prépare quelque chose de grand.
          <br />
          Voyages de groupe, créateurs, communauté&nbsp;- restez connectés.
        </p>

        {/* Réseaux sociaux */}
        <div className="flex items-center justify-center gap-5 mb-12">
          <a
            href="https://www.instagram.com/withsanko/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@withsanko"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="TikTok"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.82a4.84 4.84 0 01-1-.13z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@withsanko"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label="YouTube"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        {/* Lien admin discret */}
        {!showAdmin ? (
          <button
            onClick={() => setShowAdmin(true)}
            className="text-white/30 hover:text-white/50 text-xs font-body transition-colors cursor-pointer"
          >
            Je suis admin
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 animate-fade-in">
            <input
              type="password"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              placeholder="Mot de passe"
              className="block mx-auto px-4 py-2.5 rounded-full border border-white/20 bg-white/10 text-white font-body text-center text-sm focus:outline-none focus:ring-2 focus:ring-coral placeholder:text-white/40 w-full max-w-xs"
              autoFocus
            />
            {error && (
              <p className="text-coral text-sm font-body">
                Mot de passe incorrect
              </p>
            )}
            <button
              type="submit"
              className="bg-coral text-white font-body font-semibold px-6 py-2.5 rounded-full text-sm hover:opacity-90 transition"
            >
              Accéder au site
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function ProtectedRoute({ children }) {
  const { pathname } = useLocation();
  const [unlocked, setUnlocked] = useState(
    () => localStorage.getItem("site-unlocked") === "true",
  );

  if (!unlocked && !PUBLIC_PATHS.includes(pathname)) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages voyage accessibles sans mot de passe */}
        <Route path="/voyage/:slug" element={<Voyage />} />
        {/* Toutes les autres pages (légales bypassent le password gate) */}
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
