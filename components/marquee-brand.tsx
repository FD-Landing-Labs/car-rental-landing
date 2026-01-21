"use client";

import Image from "next/image";

const marqueeBrands = [
  "/assets/car-brands/amg-brand-logo.jpg",
  "/assets/car-brands/BMW-Text-Logo.jpg",
  "/assets/car-brands/Benz.png", // Removed leading space
  "/assets/car-brands/bugatti-brand-logo.jpg", // Removed leading space
  "/assets/car-brands/gmc-brand-logo.jpg", // Removed leading space
  "/assets/car-brands/cadillac-car-logo.jpg",
  "/assets/car-brands/hummer-logo.jpg",
  "/assets/car-brands/audi.png",
  "/assets/car-brands/tesla.jpg",
  "/assets/car-brands/lamborghini.png",
  "/assets/car-brands/porsche.png",
];

export default function MarqueeBrand() {
  return (
    <div
      className="overflow-hidden bg-white mx-4 md:mx-14 font-inter"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.2) 10%, black 40%, black 60%, rgba(0, 0, 0, 0.2) 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.2) 10%, black 40%, black 60%, rgba(0, 0, 0, 0.2) 90%, transparent)",
      }}
    >
      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set of images */}
        <div className="flex items-center gap-8 mx-4 md:gap-16 md:mx-16">
          {marqueeBrands.map((src, index) => (
            <div
              key={`brand-1-${index}`}
              className="relative h-10 w-20 md:h-16 md:w-32 shrink-0"
            >
              <Image
                src={src}
                alt="Brand Logo"
                fill
                className="object-cover" // Changed back to object-contain for logos
              />
            </div>
          ))}
        </div>
        {/* Duplicate set of images for seamless scrolling */}
        <div className="flex items-center gap-8 mx-4 md:gap-16 md:mx-16">
          {marqueeBrands.map((src, index) => (
            <div
              key={`brand-2-${index}`}
              className="relative h-10 w-20 md:h-16 md:w-32 shrink-0"
            >
              <Image
                src={src}
                alt="Brand Logo"
                fill
                className="object-cover" // Changed back to object-contain for logos
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
