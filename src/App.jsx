import { useState } from 'react'
import Header from './components/header'
import Home from './components/Home'

function App() {
  const [count,setCount]=useState(0)

  return (
    <>
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
    </>
  )
}

export default App
