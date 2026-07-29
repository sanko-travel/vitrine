export default function IntroBlock() {
  return (
    <section className="bg-beige py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading font-extrabold text-blue-dark text-3xl md:text-5xl leading-relaxed md:leading-relaxed mb-6">
          Une grande{' '}
          <span className="bg-orange text-white px-2 rounded-md">aventure</span>{' '}
          commence par un{' '}
          <span className="bg-green-dark text-white px-2 rounded-md">voyage</span>
        </h2>
        <p className="font-body text-blue-dark/70 text-lg md:text-xl leading-relaxed max-w-2xl">
          Sanko conçoit des voyages de groupe d'exception pour les
          créateurs de contenu et les communautés.
        </p>
      </div>
    </section>
  )
}
