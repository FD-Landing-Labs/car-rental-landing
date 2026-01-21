"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="flex flex-col items-center justify-center px-4 py-8 md:px-14 md:py-12 gap-6 max-w-5xl mx-auto">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-semibold text-center font-header text-gray-900 tracking-tight leading-[1.1]"
        >
          Drive Your Dream Car,
          <br />
          Anytime, Anywhere
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-center text-sm md:text-lg font-inter text-gray-500 max-w-lg tracking-tighter"
        >
          Dream Drive offers curated luxury cars, quick booking, and
          seamless delivery for an unforgettable ride
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-row gap-3 sm:gap-4 font-inter"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button size="lg" onClick={() => scrollToSection("contact")}>
              Book Your Ride
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button variant="outline" size="lg" onClick={() => scrollToSection("fleet")}>
              Browse Our Fleet
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Car Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-4xl"
        >
          <Image
            src="/assets/images/hero.jpg"
            alt="Luxury Sports Car"
            width={1200}
            height={600}
            priority
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
