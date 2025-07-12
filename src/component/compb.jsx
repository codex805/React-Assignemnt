import React from 'react'

function ColabArea() {

  return (
    <>
     <div className='flex flex-col justify-center items-center py-6 mt-7 bg-[#07292F]'>
        <h1 className='text-xl text-[#0FF1F6]'>our trusted partners</h1>
        <div className='flex md:gap-20 gap-5 flex-col md:flex-row'>
            <img src="/logo-1.svg" alt="" />
            <img src="/logo-2.svg" alt="" />
            <img src="/logo-3.svg" alt="" />
            <img src="/logo-4.svg" alt="" />
        </div>
     </div>
    </>
  )
  
}

export default ColabArea;