import { useState } from 'react'
import './App.css'
import NavArea from './component/Navbar'
import Hero from './component/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
   <main className='overflow-x-hidden'>
     <NavArea/>
     <Hero/>
   </main>
   
    </>
  )
}

export default App
