import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import Home from './Home'
import Manifeste from './Manifeste'
import Contact from './Contact'
import CreerMonVoyage from './CreerMonVoyage'
import Marques from './Marques'
import MentionsLegales from './MentionsLegales'
import PolitiqueConfidentialite from './PolitiqueConfidentialite'
import CGV from './CGV'
import NotFound from './NotFound'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    // Don't scroll to top if there's a hash — useHashScroll handles that
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notre-concept" element={<Manifeste />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/creer-mon-voyage" element={<CreerMonVoyage />} />
        <Route path="/marques" element={<Marques />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/conditions-generales-de-vente" element={<CGV />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </>
  )
}
