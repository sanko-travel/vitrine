import { useEffect } from 'react'

const SECTION_IDS = [
  'hero',
  'concept',
  'destinations',
  'manifeste',
  'temoignages',
  'garanties',
  'chiffres',
  'profils',
  'faq',
  'presse',
  'formulaire',
]

export default function useHashScroll() {
  useEffect(() => {
    // On mount, scroll to hash if present
    const hash = window.location.hash.slice(1)
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ behavior: 'instant' })
      })
    }

    // Track which section is currently visible and update hash
    let currentHash = hash || ''

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (id === currentHash) continue

            currentHash = id
            if (id === 'hero') {
              history.replaceState(null, '', window.location.pathname)
            } else {
              history.replaceState(null, '', `#${id}`)
            }
          }
        }
      },
      {
        // Thin band at ~40% from top — triggers when a section reaches upper-middle of viewport
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      },
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
