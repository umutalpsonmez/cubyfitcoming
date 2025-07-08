// src/App.js
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
    <div className="container">
      <img src={mascot} alt="Cubyfit Maskot" className="mascot" />
      <h1 className="title">CUBYFIT</h1>

      {finished ? (
        <p className="message">🎉 Geldik! 🎉</p>
      ) : (
        <>
          <p className="countdown">
            {timeLeft.days}g {timeLeft.hours}s {timeLeft.minutes}dk {timeLeft.seconds}sn
          </p>
          <p className="info">Yakında görüşürüz...</p>
        </>
      )}
    </div>
  )
}

export default App
