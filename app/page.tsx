"use client";
import CngCyliner from "@/components/cng-cylinder/page";
import Hero from "@/components/hero/page";
import { SignIn, useAuth } from "@clerk/nextjs";

export default function Home() {
  const userId = useAuth();

  if(!userId){
    return (
      <SignIn/>
    )
  }
  return (
    <div className="flex flex-col md:px-12 px-4">
      <Hero/>
      {/* {
        userId && (
          <div>
            heelo {userId?.sessionId}
          </div>
        )
      } */}
      <CngCyliner/>
    </div>
  );
}
