import { useEffect, useState } from 'react'
import './App.css'
import mascot from './mascot.png'

function App() {
  const [timeLeft, setTimeLeft] = useState({})
  const [finished, setFinished] = useState(false)

  const launchDate = new Date('2026-01-01T00:00:00')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const distance = launchDate - now

      if (distance <= 0) {
        setFinished(true)
        clearInterval(interval)
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="modern-container">
      <img src={mascot} alt="Cubyfit Maskot" className="modern-mascot" />
      <h1 className="modern-title">CUBYFIT</h1>

      {finished ? (
        <p className="modern-message">🎉 Geldik! 🎉</p>
      ) : (
        <div className="flip-clock">
          <div className="flip-box"><span>{String(timeLeft.days).padStart(2, '0')}</span><label>Gün</label></div>
          <div className="flip-box"><span>{String(timeLeft.hours).padStart(2, '0')}</span><label>Saat</label></div>
          <div className="flip-box"><span>{String(timeLeft.minutes).padStart(2, '0')}</span><label>Dakika</label></div>
          <div className="flip-box"><span>{String(timeLeft.seconds).padStart(2, '0')}</span><label>Saniye</label></div>
        </div>
      )}

      <p className="modern-subtext">Zaman sonra, CUBYFIT yanında.</p>
    </div>
  )
}

export default App
