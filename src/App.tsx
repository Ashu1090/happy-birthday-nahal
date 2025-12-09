import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { SurprisePage } from './pages/SurprisePage'
import './App.css'

function App() {
  return (
    <div className="app">
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/surprise" element={<SurprisePage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
