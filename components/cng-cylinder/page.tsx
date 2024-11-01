import Image from 'next/image'
import Link from 'next/link';
import cng1 from "@/public/images/cng1.jpg";
import cng2 from "@/public/images/cng2.jpg";
import saveFuel from "@/public/images/saveFuel.jpg"
import React from 'react';
import { Button } from '../ui/button';
const CngCyliner = () => {
  return (
    <div className='py-6'>
        <div className='flex flex-col'>
        <div className="grid grid-flow-col gap-4">
            <Link href="https://punchng.com/concern-over-cng-explosions-as-fg-begins-probe/#google_vignette" target='_blank'>
            <Image alt="" src={cng1} width={500} height={500}  className='hover:'/>
            </Link>
            <Link href="/" target='_blank'>
            <Image alt="" src={cng2} width={500} height={500}  className='hover:'/>
            </Link>
            <Link href="/" target='_blank'>
            <Image alt="" src={saveFuel} width={500} height={500}  className='hover: '/>
            </Link>
        </div>
            <div>
                <Button variant="outline" asChild>
                    <Link href="https://io.adafruit.com/Ogbontor1/dashboards/my-dashboard" target="_blank">
                    check your dashboard
                    </Link>
                    
                </Button>
            </div>
        </div>
       </div>

  )
}

export default CngCyliner