import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 50, suffix: '+', label: 'voyages organisés' },
  { value: 2000, suffix: '+', label: 'voyageurs' },
  { value: 15, suffix: '', label: 'pays explorés' },
  { value: 98, suffix: '%', label: 'de satisfaction' },
]

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

function StatItem({ stat, animate }) {
  const count = useCountUp(stat.value, 1800, animate)
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-heading font-bold text-5xl md:text-6xl text-orange">
        {stat.suffix === '+' || stat.value > 100 ? '' : ''}{count}{stat.suffix}
      </span>
      <span className="font-body text-beige/80 text-sm md:text-base tracking-wide uppercase whitespace-nowrap">
        {stat.label}
      </span>
    </div>
  )
}

export default function StatsBanner() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-blue-dark py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat, i) => (
          <StatItem key={i} stat={stat} animate={animate} />
        ))}
      </div>
    </section>
  )
}
