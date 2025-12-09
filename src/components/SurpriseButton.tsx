import { useNavigate } from 'react-router-dom'
import './SurpriseButton.css'

export default function SurpriseButton() {
  const navigate = useNavigate()

  return (
    <div className="surprise-button-section">
      <button className="surprise-button" onClick={() => navigate('/surprise')}>
        🎁 Surprise
      </button>
    </div>
  )
}

