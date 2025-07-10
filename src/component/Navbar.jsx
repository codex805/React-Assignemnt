import React, { useState } from 'react';
import {Button} from "@heroui/react";

const NavArea = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#002228] text-white p-10">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/Logo.svg" alt="" />
        <div className="hidden md:flex space-x-6 md:ml-[250px]">
          <a href="#" className="hover:text-cyan-400 text-lg">About Us</a>
          <a href="#" className="hover:text-cyan-400 text-lg">Pricing</a>
          <a href="#" className="hover:text-cyan-400 text-lg">Customers</a>
          <a href="#" className="hover:text-cyan-400 text-lg">Solutions</a>
        </div>

         <div className='flex gap-4 hidden md:flex'>
           <Button  variant="faded" radius='full' className='px-10 py-3 bg-[#0FF1F6] border-none'>
           Faded
          </Button>
          <Button color="white" variant="bordered" radius='full' className='px-10 py-3 hover:border-blue-500'>
            Solid
           </Button>
         </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden z-100">
          <a href="#" className="block px-4 py-2 hover:bg-gray-800">About Us</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-800">Pricing</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-800">Customers</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-800">Solutions</a>
          <div className='flex gap-2'>
           <Button  variant="faded" radius='full' className='px-10 py-3 bg-[#0FF1F6] border-none'>
           Faded
          </Button>
            <Button color="white" variant="bordered" radius='full' className='px-10 py-3 hover:border-blue-500'>
            Solid
           </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavArea;