import useScrollReveal from '../hooks/useScrollReveal'

const partners = [
  { name: 'Tesla', svg: (
    <svg viewBox="0 0 100 30" className="h-8 w-auto fill-teal/70" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Lexend, sans-serif" fontWeight="bold" fontSize="24">TESLA</text>
    </svg>
  )},
  { name: 'Spotify', svg: (
    <svg viewBox="0 0 100 30" className="h-8 w-auto fill-teal/70" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Lexend, sans-serif" fontWeight="bold" fontSize="24">Spotify</text>
    </svg>
  )},
  { name: 'Airbnb', svg: (
    <svg viewBox="0 0 100 30" className="h-8 w-auto fill-teal/70" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Lexend, sans-serif" fontWeight="bold" fontSize="24">Airbnb</text>
    </svg>
  )},
  { name: 'GoPro', svg: (
    <svg viewBox="0 0 100 30" className="h-8 w-auto fill-teal/70" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Lexend, sans-serif" fontWeight="bold" fontSize="24">GoPro</text>
    </svg>
  )},
  { name: 'Notion', svg: (
    <svg viewBox="0 0 100 30" className="h-8 w-auto fill-teal/70" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Lexend, sans-serif" fontWeight="bold" fontSize="24">Notion</text>
    </svg>
  )},
  { name: 'Patagonia', svg: (
    <svg viewBox="0 0 130 30" className="h-8 w-auto fill-teal/70" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Lexend, sans-serif" fontWeight="bold" fontSize="24">Patagonia</text>
    </svg>
  )},
  { name: 'Todoist', svg: (
    <svg viewBox="0 0 110 30" className="h-8 w-auto fill-teal/70" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Lexend, sans-serif" fontWeight="bold" fontSize="24">Todoist</text>
    </svg>
  )},
]

export default function PartnersBanner() {
  const ref = useScrollReveal()

  return (
    <section className="bg-beige py-16 px-6 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto mb-10 text-center">
        <h2 className="reveal font-heading font-bold text-3xl text-teal">
          Ils voyagent avec nous
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-track gap-16 items-center">
          {/* Duplicate for seamless loop */}
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex-shrink-0 flex items-center px-6 opacity-70 hover:opacity-100 transition-opacity">
              {partner.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
