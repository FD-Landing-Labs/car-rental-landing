"use client";

import { Car, Users, DoorOpen, Gauge } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function CarsPage() {
  const cars = [
    {
      id: 1,
      image: "/assets/images/cars/5.png",
      name: "Porsche 911 Carrera 2025",
      type: "Sports Car",
      seats: "5 Seater",
      doors: "4 Door",
      transmission: "Automatic",
    },
    {
      id: 2,
      image: "/assets/images/cars/2.png",
      name: "BMW M4 Competition 2024",
      type: "Sports Car",
      seats: "5 Seater",
      doors: "4 Door",
      transmission: "Automatic",
    },
    {
      id: 3,
      image: "/assets/images/cars/3.png",
      name: "Mercedes-Benz E-Class 2023",
      type: "Sports Car",
      seats: "5 Seater",
      doors: "4 Door",
      transmission: "Automatic",
    },
  ];

  return (
    <section id="fleet" className="bg-white px-4 md:px-14 py-16 md:py-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-black font-header text-3xl md:text-5xl tracking-tight">
            Find Your Perfect Ride
          </h2>
          <p className="max-w-lg font-inter text-gray-500 text-sm md:text-lg tracking-tighter leading-relaxed">
            Explore a handpicked collection of luxury and performance cars built
            for every journey. From sleek sedans to bold SUVs and electric
            innovators
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button size="lg" onClick={() => scrollToSection("top-picks")}>View Full Fleet</Button>
        </motion.div>
      </div>

      {/* Car Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group bg-gray-50 rounded-3xl p-4 flex flex-col border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
          >
            {/* Car Image */}
            <div className="relative h-48 md:h-56 w-full mb-6 overflow-hidden rounded-2xl">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Car Name */}
            <h3 className="text-gray-900 font-inter tracking-tighter text-lg md:text-xl font-medium mb-4">
              {car.name}
            </h3>

            {/* Specs Row */}
            <div className="flex flex-wrap gap-2 md:gap-4 mb-6 font-inter">
              <div className="flex items-center gap-1.5 text-gray-600">
                <Car size={16} className="text-gray-400" />
                <span className="text-xs md:text-sm">{car.type}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-600">
                <Users size={16} className="text-gray-400" />
                <span className="text-xs md:text-sm">{car.seats}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-600">
                <DoorOpen size={16} className="text-gray-400" />
                <span className="text-xs md:text-sm">{car.doors}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-600">
                <Gauge size={16} className="text-gray-400" />
                <span className="text-xs md:text-sm">{car.transmission}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button variant="secondary" fullWidth>
                  View Details
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button fullWidth onClick={() => scrollToSection("contact")}>Book Now</Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
