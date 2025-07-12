import React from 'react'

function GridArea() {


    const Group = [
        {
            img: "/quote (1).svg",
            title:"You’re in Control",
            discription: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work."
        },

         {
            img: "/quote (1).svg",
            title:"Infinitely Scalable",
            discription: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly."
        },

         {
            img: "/quote (1).svg",
            title:"Incredibly Flexible",
            discription: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time."
        },
    ]

  return (
    <>
     <section className='max-w-[1400px] mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center md:p-20 gap-8 p-6'>
            {
                Group.map((items, i ) =>(
                    <div key={i} className='hover:bg-sky-950 p-2 rounded-xl cursor-pointer transition-all scale-105'>
                        <img src={items.img} alt="" />
                         <h2 className='my-4 text-white font-bold text-xl'>{items.title}</h2>
                         <p className='text-gray-400'>{items.discription}</p>
                    </div>
                ))
            }
        </div>
     </section>
     
    </>
  )
}

export default GridArea;