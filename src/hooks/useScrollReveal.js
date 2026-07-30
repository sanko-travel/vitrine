import { useEffect, useRef } from 'react'

export default function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger children with .reveal class
          const children = el.querySelectorAll('.reveal')
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 100)
          })
          // Also reveal the container itself if it has .reveal
          if (el.classList.contains('reveal')) {
            el.classList.add('visible')
          }
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
