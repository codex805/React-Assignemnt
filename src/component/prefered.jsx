import React from 'react'

function PreferedArea() {
  return (
     <>
       <section className='max-w-[1400px] my-[100px] mx-auto'>
          <div className='m-10 bg-[#07292F] rounded-xl md:p-20 text-center p-5'>
              <h1 className='text-xl font-semibold text-white md:text-3xl'>Train your aiDR on your...</h1>
              <h2 className='text-xl font-bold md:text-3xl italic py-2 text-[#0FF1F6]'>prefered email st|</h2>
              <p className='text-gray-400  md:w-[400px] mx-auto md:text-2xl text-base w-full'>You’re in control. Train your aiDR on elements of your Marketing strategy.</p>
              <div className='flex gap-3 justify-center mt-4'>
                  <p className='text-[#0FF1F6] text-lg'><i class="fa-solid fa-check bg-[#0FF1F6] p-1 rounded-full text-white"></i>Quick to ramp</p>
                  <p className='text-[#0FF1F6] text-lg'><i class="fa-solid fa-check bg-[#0FF1F6] p-1 rounded-full text-white"></i>Easy to optimize</p>
              </div>
              <div className='flex gap-3 justify-center mt-4'>
                  <p className='text-[#0FF1F6] text-lg'><i class="fa-solid fa-check bg-[#0FF1F6] p-1 rounded-full text-white"></i>Quick to scale up</p>
                  <p className='text-[#0FF1F6] text-lg'><i class="fa-solid fa-check bg-[#0FF1F6] p-1 rounded-full text-white"></i>Works with all your existing tools</p>
              </div>
          </div>
       </section>

     </>
  )
}

export default PreferedArea;