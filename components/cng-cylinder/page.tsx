import Image from 'next/image'
import Link from 'next/link';
import cng1 from "@/public/images/cng1.jpg";
import cng2 from "@/public/images/cng2.jpg";
import saveFuel from "@/public/images/saveFuel.jpg"
import React from 'react';
const CngCyliner = () => {
  return (
    <div className='py-6'>
        <div className="grid grid-flow-col gap-4">
            <Link href="/" target='_blank'>
            <Image alt="" src={cng1} width={500} height={500}  className='hover:'/>
            </Link>
            <Link href="/" target='_blank'>
            <Image alt="" src={cng2} width={500} height={500}  className='hover:'/>
            </Link>
            <Link href="/" target='_blank'>
            <Image alt="" src={saveFuel} width={500} height={500}  className='hover: '/>
            </Link>
 
        </div>
    </div>
  )
}

export default CngCyliner