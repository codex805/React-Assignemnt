import React from 'react'

function Allocate() {
    const DataInfo = [
        {
            Count: "35%",
            info: "Improvement in Open Rates"
        },

         {
            Count: "75%",
            info: "Improvement in Ramp Time"
        },

         {
            Count: "35%",
            info: "Improvement in Meetings Booked"
        },
    ]
  return (
     <>
       <section className='max-w-[1400px] mx-auto'>
           <div className='m-10 bg-[#02242A]   md:p-10 rounded-sm flex justify-around flex-col md:flex-row '>

              <div className=' flex  flex-col justify-center z-50 '>
                  <h1 className='text-xl md:text-2xl lg:3xl text-white font-bold'>Allocate effort where your reps <br></br> make an inpact</h1>
                  <h3 className='text-lg md:text-xl lg:2xl text-[#0FF1F6] font-bold py-4'>Let us handle the rest.</h3>
                  <p className='text-gray-300 text-sm md:text-lg  leading-tight'>
                    Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
                  <div className='flex flex-col md:flex-row items-center justify-center py-11 md:gap-28 gap-10'>
                     {
                        DataInfo.map((items, i ) =>(
                            <div key={i}>
                               <h1 className='text-4xl md:text-3xl lg:text-5xl text-[#0FF1F6] font-semibold'>{items.Count}</h1>
                               <p className='text-gray-300 text-sm py-2 font-bold'>{items.info}</p>
                            </div>
                        ))
                     }
                  </div>

              </div>
              <img src="/hero.svg" alt="" className='md:ml-[-580px] mt-10  h-auto z-40 z-0'/> 
           </div>
       </section>
       
     </>
  )
}

export default Allocate;