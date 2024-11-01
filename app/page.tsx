"use client";
import CngCyliner from "@/components/cng-cylinder/page";
import Hero from "@/components/hero/page";

export default function Home() {

  return (
    <div className="flex flex-col md:px-12 px-4">
      <Hero/>
      <CngCyliner/>
    </div>
  );
}
