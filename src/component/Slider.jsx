import React from 'react'
import { useState } from 'react';

function Slider() {
    const SliedrArray = [
          {
    quote:
      "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "John Doe",
    role: "Chief Strategy Officer @ Company",
  },
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Jane Smith",
    role: "Marketing Lead @ Startup",
  },
  {
    img: "/quote (1).svg",
    quote:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    name: "Ali Khan",
    role: "Founder @ SaaSify",
  },
]
  const [index ,setIndex] = useState(0);

  const prevSlide = () =>{
    setIndex((prev) => (prev === 0? SliedrArray.length - 2 : prev - 1))
  }

  const NextSlide = () => {
    setIndex((prev) => (prev ===  SliedrArray.length - 1 ? 0 : prev + 1))
  }

  return (
   <>
     <section className='bg-[#002228] max-w-[1400px] mx-auto p-8'>
           <div className='flex justify-between items-center flex-col md:flex-row m-[50px] '>
               <button onClick={prevSlide} className='bg-[#96ACAF] p-3 rounded-md'><i class="fa-solid fa-arrow-left "></i></button>
               <div className='max-w-[650px] mx-auto justify-center items-center'>
                    <div className='mx-auto flex justify-center'>
                         <img src="/quote (1).svg" alt="" />
                    </div>
                    <p className='text-2xl md:text-3xl lg:text-3xl  py-4 text-gray-500 w-[800px]'>{SliedrArray[index].quote}</p>
                    <h1 className='mt-4 text-bold text-[#0FF1F6] text-2xl text-center'>{SliedrArray[index].name}</h1>
                    <p className='text-gray-500 leading-tight tracking-tight text-lg text-center'>{SliedrArray[index].role}</p>
               </div>
               <button onClick={NextSlide} className='bg-[#96ACAF] p-3 rounded-md'><i class="fa-solid fa-arrow-right"></i></button>
           </div>
     </section>
   </>
  )
}

export default Slider;