import { useState } from 'react'
import './App.css'
import LeagueCalendar from './components/LeagueCalendar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <LeagueCalendar />
    </div>
    </>
  )
}

export default App
