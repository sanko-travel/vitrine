import { useEffect } from "react";

const HOME_SECTION_IDS = [
  "hero",
  "concept",
  "destinations",
  "manifeste",
  "temoignages",
  "garanties",
  "chiffres",
  "profils",
  "faq",
  "presse",
  "formulaire",
];

export default function useHashScroll(sectionIds = HOME_SECTION_IDS) {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    let timer;

    // On mount, scroll to hash if present — retry to beat ScrollToTop race
    if (hash) {
      const scrollToHash = () => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "instant" });
      };
      scrollToHash();
      requestAnimationFrame(scrollToHash);
      timer = setTimeout(scrollToHash, 100);
    }

    // Determine the first section ID (treated as "top" — clears hash from URL)
    const firstId = sectionIds[0] || "";

    // Track which section is currently visible and update hash
    let currentHash = hash || "";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === currentHash) continue;

            currentHash = id;
            if (id === firstId) {
              history.replaceState(null, "", window.location.pathname);
            } else {
              history.replaceState(null, "", `#${id}`);
            }
          }
        }
      },
      {
        // Thin band at ~40% from top - triggers when a section reaches upper-middle of viewport
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [sectionIds]);
}
