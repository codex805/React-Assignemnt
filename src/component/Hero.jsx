import React from 'react'
import {Button} from "@heroui/react";

function Hero() {
  return (
    <>
      <section className='max-w-[1400px] mx-auto flex justify-between flex-col md:flex-row'>
        <div className='md:min-w-[350px] flex flex-col justify-center md:ml-[50px] z-10'>
            <h5 className='text-xl md:text-4xl text-[#0DD8DD] my-2'>AI SDRs (aiDRs)</h5>
            <h1 className='text-2xl md:text-6xl max-w-[full] text-white font-semibold'>More <span className='italic text-gray-400 font-semibold'>leads</span>, less <span className='italic text-gray-400 font-semibold'>people.</span></h1>
            <p className='my-5 leading-tight  md:w-[500px] text-sm text-gray-400 font-bold md:text-xl'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.
         </p>
             <Button  variant="faded" radius='full' className=' bg-[#0FF1F6] border-none text-xl font-bold text-gray-800 max-w-40'>
                 Sing of for the bata
                </Button>
        </div>
        <img className='w-full object-covor ml-[-20px]  z-0"' src="/hero.svg" alt="" />
      </section>
    </>
  )
}

export default Hero