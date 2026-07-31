import useScrollReveal from '../hooks/useScrollReveal'

const partners = [
  { name: 'BPI France', svg: (
    <svg viewBox="0 0 140 30" className="h-8 w-auto fill-teal/70" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Lexend, sans-serif" fontWeight="bold" fontSize="22">BPI France</text>
    </svg>
  )},
  { name: 'TeedUp', svg: (
    <svg viewBox="0 0 100 30" className="h-8 w-auto fill-teal/70" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Lexend, sans-serif" fontWeight="bold" fontSize="22">TeedUp</text>
    </svg>
  )},
  { name: 'La French Tech', svg: (
    <svg viewBox="0 0 180 30" className="h-8 w-auto fill-teal/70" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Lexend, sans-serif" fontWeight="bold" fontSize="22">La French Tech</text>
    </svg>
  )},
  { name: 'Les Déterminés', svg: (
    <svg viewBox="0 0 190 30" className="h-8 w-auto fill-teal/70" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Lexend, sans-serif" fontWeight="bold" fontSize="22">Les Déterminés</text>
    </svg>
  )},
  { name: 'TDC', svg: (
    <svg viewBox="0 0 60 30" className="h-8 w-auto fill-teal/70" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Lexend, sans-serif" fontWeight="bold" fontSize="22">TDC</text>
    </svg>
  )},
]

export default function PartnersBanner() {
  const ref = useScrollReveal()

  return (
    <section className="bg-beige py-16 px-6 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto mb-10 text-center">
        <h2 className="reveal font-heading font-bold text-3xl text-teal">
          Ils nous font confiance
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
