import { Link } from 'react-router-dom'

const trips = [
  {
    image: '/images/paysages/paysage_005.jpg',
    destination: 'Alpes françaises',
    season: 'Été 2024',
  },
  {
    image: '/images/paysages/paysage_020.jpg',
    destination: 'Mongolie',
    season: 'Automne 2024',
  },
  {
    image: '/images/paysages/paysage_035.jpeg',
    destination: 'Maroc',
    season: 'Printemps 2025',
  },
  {
    image: '/images/paysages/paysage_010.png',
    destination: 'Grèce',
    season: 'Été 2025',
  },
  {
    image: '/images/paysages/paysage_027.jpeg',
    destination: 'Islande',
    season: 'Hiver 2025',
  },
  {
    image: '/images/paysages/paysage_014.jpg',
    destination: 'Patagonie',
    season: 'Printemps 2025',
  },
]

export default function TripsGallery() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-teal mb-4">
            Nos dernières expéditions
          </h2>
          <p className="font-body text-teal/60 text-lg">
            Des destinations soigneusement sélectionnées, des expériences uniques.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {trips.map((trip, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer"
            >
              <img
                src={trip.image}
                alt={trip.destination}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-teal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <span className="font-heading font-bold text-white text-xl text-center px-4">
                  {trip.destination}
                </span>
                <span className="font-body text-white/80 text-sm mt-1">
                  {trip.season}
                </span>
              </div>
              {/* Always visible label on mobile */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal/80 to-transparent p-4 md:hidden">
                <span className="font-heading font-semibold text-white text-sm">{trip.destination}</span>
                <span className="font-body text-white/70 text-xs ml-2">{trip.season}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-block bg-teal text-white font-body font-semibold px-8 py-3.5 rounded-lg hover:bg-teal/80 transition-colors"
          >
            Voir toutes nos expéditions
          </Link>
        </div>
      </div>
    </section>
  )
}
