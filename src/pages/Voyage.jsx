import { useParams } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import voyages from '../data/voyages'
import VoyageHeader from '../components/voyage/VoyageHeader'
import VoyageHero from '../components/voyage/VoyageHero'
import VoyageIntro from '../components/voyage/VoyageIntro'
import VoyageHighlights from '../components/voyage/VoyageHighlights'
import VoyageMap from '../components/voyage/VoyageMap'
import VoyageItinerary from '../components/voyage/VoyageItinerary'
import VoyagePricing from '../components/voyage/VoyagePricing'
import VoyageInclusions from '../components/voyage/VoyageInclusions'
import VoyageCTA from '../components/voyage/VoyageCTA'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'

export default function Voyage() {
  const { slug } = useParams()
  const data = voyages[slug]
  const [activeDay, setActiveDay] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveDay(null)
  }, [slug])

  const handleDayChange = useCallback((day) => {
    setActiveDay(day)
  }, [])

  if (!data) {
    return (
      <div className="min-h-screen bg-beige flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-bold text-4xl text-teal mb-4">Voyage introuvable</h1>
          <a href="/" className="text-coral font-semibold hover:underline">
            Retour à l'accueil
          </a>
        </div>
      </div>
    )
  }

  return (
    <>
      <VoyageHeader data={data} />
      <main>
        <VoyageHero data={data} />
        <VoyageIntro data={data} />
        <VoyageHighlights data={data} />
        <VoyageItinerary
          data={data}
          activeDay={activeDay}
          onDayChange={handleDayChange}
          mapSlot={
            data.route?.length > 0 && (
              <VoyageMap
                route={data.route}
                activeDay={activeDay}
                onMarkerClick={handleDayChange}
              />
            )
          }
        />
        <VoyageInclusions data={data} />
        <VoyagePricing data={data} />
        <VoyageCTA data={data} />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
