"use client";
import Image from 'next/image';
import logo from "@/public/images/logo.svg";
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { UserButton , SignedIn, SignedOut} from '@clerk/nextjs';


const Navbar = () => {
  return (
    <div className='md:px-12 w-full px-4'>
       <div className='flex flex-row justify-between py-6 items-center'>
            {/* logo */}
            <Image src={logo} width={36} height={36} alt=""/>
            <div className='flex space-x-3 flex-row'>
            <SignedOut>
            <Button variant="outline" size="lg" asChild>
                        <Link href="/sign-in">
                        Log in
                        </Link> 
                </Button>
                <Button variant="outline" size="lg" asChild>
                    <Link href="/sign-up">
                    Sign up 
                    </Link>
                </Button>
            </SignedOut>
                <SignedIn>
           <UserButton afterSignOutUrl='/'/>
          </SignedIn> 
            </div>
       </div>
        </div>
  )
}

export default Navbar