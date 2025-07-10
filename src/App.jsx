import { useState } from 'react'
import './App.css'
import NavArea from './component/Navbar'
import Hero from './component/Hero'
import ColabArea from './component/compb'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
   <main className='overflow-x-hidden'>
     <NavArea/>
     <Hero/>
     <ColabArea/>
   </main>
   
    </>
  )
}

export default App
