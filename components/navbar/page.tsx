import Image from 'next/image';
import logo from "@/public/images/logo.svg";
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='md:px-12 w-full px-4'>
       <div className='flex flex-row justify-between py-6 items-center'>
            {/* logo */}
            <Image src={logo} width={36} height={36} alt=""/>
            <div className='flex space-x-3 flex-row'>
                <Button variant="outline" size="lg" asChild>
                        <Link href="/">
                        Log in
                        </Link> 
                </Button>
                <Button variant="outline" size="lg" asChild>
                    <Link href="/">
                    Sign up 
                    </Link>
              
                </Button>
            </div>
       </div>
        </div>
  )
}

export default Navbar