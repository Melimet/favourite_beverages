import { useState } from 'react'
import './App.css'
import Beverages from './components/Beverages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Beverages />
    </div>
  )
}

export default App
