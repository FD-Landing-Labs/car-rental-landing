"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const toppicks = [
  {
    id: 1,
    image: "/assets/images/bmw-side.png",
    name: "BMW R8",
  },
  {
    id: 2,
    image: "/assets/images/audi-side.jpg",
    name: "Audi WT8",
  },
  {
    id: 3,
    image: "/assets/images/benz-side.png",
    name: "Benz S600",
  },
  {
    id: 4,
    image: "/assets/images/ferrari-side.jpg",
    name: "Ferrari 488",
  },
  {
    id: 5,
    image: "/assets/images/Nissan.png",
    name: "Nissan",
  },
];

export default function TopPicksCar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const isMobile = window.innerWidth < 768;
      // On desktop, we show 3 cards (approx), so we scroll by roughly 1/3 of view
      // We need to account for the gap in the calculation or just use clientWidth / 3
      const scrollAmount = isMobile
        ? scrollRef.current.clientWidth
        : scrollRef.current.clientWidth / 3;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className=" px-4 md:px-4">
        {/* Header with Nav Buttons */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="flex flex-col gap-4 max-w-2xl">
              <span className="text-3xl md:text-5xl font-header text-black tracking-tight leading-[1.1]">
                Top Picks This Week
              </span>
              <p className="w-full md:w-4/5 text-gray-500 md:text-lg text-sm leading-relaxed font-inter">
                Explore our most rented and loved cars handpicked for
                performance and elegance
              </p>
            </div>

            {/* Navigation Buttons for Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <button className="bg-[#1a3edb] hover:bg-blue-800 text-white font-medium text-sm px-6 py-3 rounded-full transition-colors flex items-center justify-center gap-2">
                View All Cars
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Cars Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-  0 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {toppicks.map((car) => (
            <div
              key={car.id}
              // calc(100% / 3) for 3 items, minus gap adjustment
              // Using min-w-[calc(33.333%-16px)] assuming 24px (gap-6) total distributed
              className="min-w-full md:min-w-[calc(33.333%-16px)] snap-start group"
            >
              {/* Card - Image and Name only */}
              <div className="bg-gray-50 rounded-3xl p-6 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:bg-white border border-transparent hover:border-gray-100">
                <div className="relative w-full aspect-[16/10] mb-6">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-md md:text-lg font-header font-medium text-black">
                  {car.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-4 flex md:hidden justify-center w-full">
          <button className="bg-[#1a3edb] hover:bg-blue-800 text-white font-medium text-sm w-full px-6 py-3 rounded-full transition-colors flex items-center justify-center gap-2">
            View All Cars
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop Scroll Buttons (Bottom) */}
        <div className="hidden md:flex justify-center mt-8 gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center hover:bg-gray-400 transition-colors duration-200 group"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center hover:bg-gray-400 transition-colors duration-200 group"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
}
