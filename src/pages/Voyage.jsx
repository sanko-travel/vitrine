import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import voyages from '../data/voyages'
import VoyageHeader from '../components/voyage/VoyageHeader'
import VoyageHero from '../components/voyage/VoyageHero'
import VoyageIntro from '../components/voyage/VoyageIntro'
import VoyageHighlights from '../components/voyage/VoyageHighlights'
import VoyageItinerary from '../components/voyage/VoyageItinerary'
import VoyagePricing from '../components/voyage/VoyagePricing'
import VoyageInclusions from '../components/voyage/VoyageInclusions'
import VoyageCTA from '../components/voyage/VoyageCTA'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'

export default function Voyage() {
  const { slug } = useParams()
  const data = voyages[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

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
        <VoyageItinerary data={data} />
        <VoyagePricing data={data} />
        <VoyageInclusions data={data} />
        <VoyageCTA data={data} />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
