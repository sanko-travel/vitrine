import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Manifeste from './pages/Manifeste'
import Contact from './pages/Contact'
import CreerMonVoyage from './pages/CreerMonVoyage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<Manifeste />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/creer-mon-voyage" element={<CreerMonVoyage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
