import React from 'react'
import {Button} from "@heroui/react";

function Footer() {
    const NewYear =  new Date().getFullYear();
  return (
    

    <>
     <section className='max-w-[1400px] mx-auto '>
        <div className='flex flex-col justify-center items-center'>
           <h2 className='text-[#0FF1F6] text-lg font-bold'>GET STARTED</h2>
           <h1 className='py-4 text-xl md:text-2xl lg:text-3xl text-gray-300'>Embrace <span className='font-semibold'>the new era of</span> outbound.</h1>
           <p className='py-3 text-sm md:text-lg md:w-[500px] text-gray-400'>Wizia lets you train, activate, and optimize aiDRs. 
          Take your outbound to new levels of performance and efficiency.</p>
            <Button  variant="faded" radius='full' className='px-10 py-3 bg-[#0FF1F6] border-none'>
             Sign Up for the Beta
          </Button>
        </div>
        
        {/*  */}
        <div className='mt-5 p-12 flex justify-between items-center bg-[#07292F] flex-col md:flex-row gap-3'>
            <img src="/Logo.svg" alt="" />
            <p className='text-gray-400'>Copyright  {NewYear} Wizia. All rights reserved.</p>
        </div>
     </section>
      
    </>
  )
}

export default Footer