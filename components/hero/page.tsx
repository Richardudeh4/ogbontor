
import Image from 'next/image';
import car from "@/public/images/car.jpg";
import React from 'react';

const Hero = () => {
  return (
    <div className="py-6 flex  w-full  flex-col">
        <div className='flex flex-row justify-between '>
        <h1 className='text-6xl 2xl:text-8xl font-bold flex items-center justify-center'>Welcome to the future <br/>of CNG vehicles</h1>
        <div className='flex justify-end'>
          <Image src={car} width={500} height={250} alt="cars" className="rounded-2xl"/>
        </div>
       
        </div>
      

    </div>
  )
}

export default Hero