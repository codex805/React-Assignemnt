import { useState } from 'react'
import './App.css'
import NavArea from './component/Navbar'
import Hero from './component/Hero'
import ColabArea from './component/compb'
import GridArea from './component/Grid'
import PreferedArea from './component/prefered'
import TestimonialSlider from './component/Slider'
import Allocate from './component/Allocate'
import Footer from './component/Footer'


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
     <TestimonialSlider/>
     < Allocate/>
     <Footer/>
   </main>
   
   
    </>
  )
}

export default App
