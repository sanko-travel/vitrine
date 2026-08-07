import { useEffect } from "react";

const BASE_TITLE = "Sanko - Voyage avec ta communauté";
const BASE_URL = "https://withsanko.com";

export default function usePageMeta({ title, description, path } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Sanko` : BASE_TITLE;
    document.title = fullTitle;

    const canonical = path ? `${BASE_URL}${path}` : BASE_URL;

    const updates = {
      'meta[name="description"]': description,
      'meta[property="og:title"]': fullTitle,
      'meta[property="og:description"]': description,
      'meta[property="og:url"]': canonical,
      'meta[name="twitter:title"]': fullTitle,
      'meta[name="twitter:description"]': description,
    };

    for (const [selector, value] of Object.entries(updates)) {
      if (!value) continue;
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", value);
    }

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    return () => {
      document.title = BASE_TITLE;
      const l = document.querySelector('link[rel="canonical"]');
      if (l) l.setAttribute("href", BASE_URL);
    };
  }, [title, description, path]);
}
