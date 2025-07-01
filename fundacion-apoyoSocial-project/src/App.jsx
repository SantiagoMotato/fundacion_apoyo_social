import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Home'
import ReseniaHistoricaPage from './pages/reseniaHistoricaSection/ReseniaHistoricaPage'
import MisionYVisionPage from './pages/misionVisionSection/MisionYVisionPage'
import ValoresPages from './pages/valoresSection/ValoresPage'
import InformacionVeinteCuatro from './pages/informacion2024/InformacionVeinteCuatro'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/resena-historica" element={<ReseniaHistoricaPage />} />
            <Route path="/mision-vision" element={<MisionYVisionPage />} />
            <Route path="/valores" element={<ValoresPages />} />
            <Route path="/informacion-esal" element={<InformacionVeinteCuatro />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
