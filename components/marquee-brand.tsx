"use client";

import Image from "next/image";

const marqueeBrands = [
  "/assets/images/amg-brand-logo.jpg",
  "/assets/images/BMW-Text-Logo.jpg",
  "/assets/images/Benz.png", // Removed leading space
  "/assets/images/bugatti-brand-logo.jpg", // Removed leading space
  "/assets/images/gmc-brand-logo.jpg", // Removed leading space
  "/assets/images/cadillac-car-logo.jpg",
  "/assets/images/hummer-logo.jpg",
];

export default function MarqueeBrand() {
  return (
    <div className="w-full overflow-hidden bg-white px-4 ">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set of images */}
        <div className="flex items-center gap-14 mx-14 ">
          {marqueeBrands.map((src, index) => (
            <div
              key={`brand-1-${index}`}
              className="relative h-16 w-32 shrink-0"
            >
              <Image
                src={src}
                alt="Brand Logo"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        {/* Duplicate set of images for seamless scrolling */}
        <div className="flex items-center gap-14 mx-14">
          {marqueeBrands.map((src, index) => (
            <div
              key={`brand-2-${index}`}
              className="relative h-16 w-32 shrink-0"
            >
              <Image
                src={src}
                alt="Brand Logo"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
