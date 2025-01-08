import './App.css'
import { GlobalStyle } from './components/GlobalStyle'
import { MainCard } from './components/MainCard/MainCard'
import { SecondaryCard } from './components/SecondaryCard/SecondaryCard'
import { HeroBanner } from "./components/HeroBanner/HeroBanner"
import { useState, useEffect } from 'react'

function App() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div id='Wrapper'>
      <GlobalStyle />

      {visible && <HeroBanner />}
      {!visible && <MainCard />}
      {!visible && <SecondaryCard />}
    </div>
  )
}

export default App
