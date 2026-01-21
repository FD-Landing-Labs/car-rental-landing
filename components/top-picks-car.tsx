"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const toppicks = [
  {
    id: 1,
    image: "/assets/images/cars/7.png",
    name: "GMC Hummer EV",
    specs: "Edition 1 (1000 hp, AWD)",
    distance: "120m",
    walkTime: "4 min",
    rating: 4.7,
    reviews: 109,
    price: 34.59,
  },
  {
    id: 2,
    image: "/assets/images/cars/2.png",
    name: "BMW i8 Coupe",
    specs: "eDrive (369 hp, AWD)",
    distance: "250m",
    walkTime: "8 min",
    rating: 4.0,
    reviews: 87,
    price: 29.99,
  },
  {
    id: 3,
    image: "/assets/images/cars/3.png",
    name: "Mercedes E-Class",
    specs: "E 450 4MATIC (362 hp, AWD)",
    distance: "180m",
    walkTime: "5 min",
    rating: 4.9,
    reviews: 142,
    price: 28.50,
  },
  {
    id: 5,
    image: "/assets/images/cars/8.png",
    name: "Cadillac Escalade",
    specs: "6.2L V8 Platinum (420 hp, 4WD)",
    distance: "320m",
    walkTime: "10 min",
    rating: 4.6,
    reviews: 64,
    price: 24.00,
  },
  {
    id: 6,
    image: "/assets/images/cars/4.png",
    name: "BMW M4 Competition",
    specs: "3.0L Twin-Turbo (503 hp, RWD)",
    distance: "140m",
    walkTime: "5 min",
    rating: 4.7,
    reviews: 156,
    price: 36.75,
  },
];

export default function TopPicksCar() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="px-4 md:px-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            <h2 className="text-3xl md:text-5xl font-header text-black tracking-tight">
              Top Picks This Week
            </h2>
            <p className="max-w-lg font-inter text-gray-500 text-sm md:text-lg tracking-tighter leading-relaxed">
              Explore our most rented and loved cars handpicked for
              performance and elegance
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:block"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button size="lg">View All Cars</Button>
          </motion.div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toppicks.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl aspect-[4/3] cursor-pointer">
                {/* Car Image - Full Background */}
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Top Info Row */}
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 font-inter text-sm">
                  <div className="flex items-center gap-2">
                    {/* Distance */}
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <MapPin size={14} className="text-gray-600" />
                      <span className="font-medium text-gray-900">{car.distance}</span>
                      <span className="text-gray-500">({car.walkTime})</span>
                    </div>
                    {/* Rating */}
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-medium text-gray-900">{car.rating}</span>
                      <span className="text-gray-500">({car.reviews})</span>
                    </div>
                  </div>
                  {/* Favorite Button */}
                  <motion.button
                    onClick={() => toggleFavorite(car.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full"
                  >
                    <Heart
                      size={18}
                      className={`transition-colors ${favorites.includes(car.id)
                        ? "text-red-500 fill-red-500"
                        : "text-gray-400 hover:text-gray-600"
                        }`}
                    />
                  </motion.button>
                </div>

                {/* Car Info - Bottom Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-lg md:text-xl font-inter font-medium tracking-tighter text-white">
                        {car.name}
                      </h3>
                      <p className="text-sm text-white/70 font-inter tracking-tighter">
                        {car.specs}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl md:text-2xl font-semibold text-white font-inter tracking-tighter">
                        ${car.price.toFixed(2)}
                      </span>
                      <span className="text-white/70 text-sm font-inter tracking-tighter">/ hour</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 md:hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button fullWidth size="lg">View All Cars</Button>
        </motion.div>
      </div>
    </section>
  );
}
