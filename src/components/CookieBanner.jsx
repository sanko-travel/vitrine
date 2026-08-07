import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Clarity from "@microsoft/clarity";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem("cookie-consent", "refused");
    Clarity.consent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl ring-1 ring-teal/10 p-6 md:flex md:items-center md:gap-6">
        <div className="flex-1 mb-4 md:mb-0">
          <p className="font-body text-gray-700 text-sm leading-relaxed">
            Nous utilisons des cookies essentiels pour le fonctionnement du
            site. En savoir plus dans notre{" "}
            <Link
              to="/politique-de-confidentialite"
              className="text-teal font-semibold underline hover:text-teal/80 transition-colors"
            >
              politique de confidentialit&eacute;
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={refuse}
            className="font-body font-semibold text-sm text-teal px-5 py-2.5 rounded-full border-2 border-teal/20 hover:border-teal/40 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="font-body font-semibold text-sm bg-coral text-white px-5 py-2.5 rounded-full hover:bg-coral/90 transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
