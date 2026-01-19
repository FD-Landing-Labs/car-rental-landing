"use client";

import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center justify-center h-screen p-4 gap-4">
            <span className="text-5xl font-medium text-center">Drive Your Dream Car,<br/> Anytime, Anywhere</span>
            <p className="text-center">Dream Drive Offers curated luxury cars, quikck booking and <br/> seamless delivery for an unforgettable ride</p>
            <div className="flex gap-2 font-medium">
                <button className="bg-[#1a3edb] text-white px-4 py-2 rounded-full cursor-pointer">Book Your Ride</button>
                <button className="bg-gray-200  text-[#1a3edb] px-4 py-2 rounded-full border border-[#1a3edb] cursor-pointer">Browse Our Fleet</button>
            </div>
            <div className="p-4">
                <Image src="/assets/images/hero-car.avif" 
                alt="Hero Image" 
                width={500} 
                height={500}
                className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}