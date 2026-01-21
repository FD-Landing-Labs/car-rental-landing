"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center  px-4 py-4 md:px-14 gap-6">
      <span className="text-3xl md:text-5xl font-medium text-center font-header">
        Drive Your Dream Car,
        <br /> Anytime, Anywhere
      </span>
      <p className="text-center text-sm md:text-lg font-inter">
        Dream Drive Offers curated luxury cars, quikck booking and <br />{" "}
        seamless delivery for an unforgettable ride
      </p>
      <div className="flex gap-4  text-sm md:text-md font-inter font-medium">
        <button className="bg-[#1a3edb] hover:bg-blue-800 text-white px-4 py-2 rounded-full cursor-pointer">
          Book Your Ride
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-[#1a3edb] px-4 py-2 rounded-full border border-gray-300 cursor-pointer">
          Browse Our Fleet
        </button>
      </div>
      <div className="p-4 font-inter">
        <Image
          src="/assets/images/hero-car.avif"
          alt="Hero Image"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
