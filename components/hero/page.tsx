
import Image from 'next/image';
import car from "@/public/images/car.jpg";
import React from 'react';

const Hero = () => {
  return (
    <div className="py-6 flex  w-full  flex-col">
        <div className='flex flex-row justify-between '>
          <div className='flex flex-col items-center  justify-center space-y-16 py-12'>
            <h1  className='text-4xl md:text-6xl 2xl:text-8xl -pt-10 font-bold flex '>CNG Protect</h1>
          <h1 className='text-4xl 2xl:text-6xl font-bold flex items-center justify-center'>Welcome to the future <br/>of CNG vehicles</h1>
          
          </div>
      
        <div className='flex justify-end'>
          <Image src={car} width={500} height={250} alt="cars" className="rounded-2xl"/>
        </div>
       
        </div>
      

    </div>
  )
}

export default Hero