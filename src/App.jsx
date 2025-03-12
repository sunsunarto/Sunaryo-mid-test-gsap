import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import './App.css'
import Header from './Components/Header'
import Header1 from './Components/Header1'
import Adjustment from './Components/Adjustment.jsx'

function App() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.fromTo(ref.current, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power1.out'
    })
  }, [])

  return (
    <div className='App' ref={ref}>
      <p>
        <Header/>
        <Header1/>
        <Adjustment/>
      </p>
    </div>
  )
}

export default App


