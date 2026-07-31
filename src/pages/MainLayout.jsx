import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from './Home'
import Manifeste from './Manifeste'
import Contact from './Contact'
import CreerMonVoyage from './CreerMonVoyage'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notre-equipe" element={<Manifeste />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/creer-mon-voyage" element={<CreerMonVoyage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
