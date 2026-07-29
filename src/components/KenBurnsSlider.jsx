import { useState, useEffect, useRef } from 'react'

const slides = [
  '/images/paysages/paysage_020.jpg',
  '/images/paysages/paysage_005.jpg',
  '/images/paysages/paysage_035.jpeg',
  '/images/paysages/paysage_001.jpg',
]

const KB_ANIMATIONS = [
  'kenBurns1',
  'kenBurns2',
  'kenBurns3',
  'kenBurns4',
]

export default function KenBurnsSlider() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: i === current
              ? `${KB_ANIMATIONS[i % KB_ANIMATIONS.length]} 10s ease-out forwards`
              : 'none',
          }}
        />
      ))}
    </div>
  )
}
