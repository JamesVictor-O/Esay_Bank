import React from 'react'
import NavBar from './components/navbar.components/navbar.component'
import FirstPage from './components/pages/firstPage'
import './App.css'

function App() {
  return (
    <div className="App bg-hsl(0, 0%, 100%) relative">
      <NavBar/>
      <div>
        <FirstPage/>
      </div>
    </div>
  )
}

export default App
