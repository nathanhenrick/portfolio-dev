import './App.css'
import { GlobalStyle } from './components/GlobalStyle'
import { MainCard } from './components/MainCard/MainCard'
import { SecondaryCard } from './components/SecondaryCard/SecondaryCard'

function App() {

  return (
    <div id='Wrapper'>
      <GlobalStyle />
      <MainCard />
      <SecondaryCard />
    </div>
  )
}

export default App
