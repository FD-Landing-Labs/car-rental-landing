"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const marqueeBrands = [
  "/assets/images/car-brands/amg-brand-logo.jpg",
  "/assets/images/car-brands/BMW-Text-Logo.jpg",
  "/assets/images/car-brands/Benz.png",
  "/assets/images/car-brands/bugatti-brand-logo.jpg",
  "/assets/images/car-brands/gmc-brand-logo.jpg",
  "/assets/images/car-brands/cadillac-car-logo.jpg",
  "/assets/images/car-brands/hummer-logo.jpg",
  "/assets/images/car-brands/audi.png",
  "/assets/images/car-brands/tesla.jpg",
  "/assets/images/car-brands/lamborghini.png",
  "/assets/images/car-brands/porsche.png",
];

export default function MarqueeBrand() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className=" bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="overflow-hidden mx-4 md:mx-14 font-inter"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.2) 10%, black 30%, black 70%, rgba(0, 0, 0, 0.2) 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.2) 10%, black 30%, black 70%, rgba(0, 0, 0, 0.2) 90%, transparent)",
        }}
      >
        <div className="flex animate-scroll whitespace-nowrap">
          {/* First set of images */}
          <div className="flex items-center gap-4 mx-4 md:gap-16 md:mx-16">
            {marqueeBrands.map((src, index) => (
              <div
                key={`brand-1-${index}`}
                className="relative h-10 w-24 md:h-20 md:w-44 shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={src}
                  alt="Brand Logo"
                  fill
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless scrolling */}
          <div className="flex items-center gap-4 mx-4 md:gap-16 md:mx-16">
            {marqueeBrands.map((src, index) => (
              <div
                key={`brand-2-${index}`}
                className="relative h-10 w-24 md:h-20 md:w-44 shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={src}
                  alt="Brand Logo"
                  fill
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
