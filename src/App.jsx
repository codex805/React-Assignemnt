import { useState } from 'react'
import './App.css'
import NavArea from './component/Navbar'
import Hero from './component/Hero'
import ColabArea from './component/compb'
import GridArea from './component/Grid'
import PreferedArea from './component/prefered'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
   <main className='overflow-x-hidden max-w-[1400px] mx-auto'>
     <NavArea/>
     <Hero/>
     <ColabArea/>
     <GridArea/>
     <PreferedArea/>
   </main>
   
    </>
  )
}

export default App
