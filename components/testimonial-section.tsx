"use client";

import { useRef } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  location: string;
  profile: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "The entire booking experience was seamless. I picked up a BMW X7 for a weekend trip, and it felt brand new. Everything from the cleanliness to the pickup process was perfectly organized.",
    name: "Daniel Roberts",
    location: "London",
    profile: "/assets/images/profile4.jpeg",
  },
  {
    id: 2,
    text: "I was looking for a luxury car for a business meeting and found exactly what I needed here. The service was impeccable and the car was in pristine condition. Highly recommended!",
    name: "Sarah Jenkins",
    location: "New York",
    profile: "/assets/images/profile3.jpeg",
  },
  {
    id: 3,
    text: "Top notch service from start to finish. The team went above and beyond to ensure I had everything I needed. The car was a dream to drive. Will definitely be renting from here again.",
    name: "Michael Chen",
    location: "San Francisco",
    profile: "/assets/images/profile2.avif",
  },
  {
    id: 4,
    text: "An unforgettable experience. The car added so much to our special occasion. The booking process was straightforward and transparent. Five stars!",
    name: "Emily Davis",
    location: "Sydney",
    profile: "/assets/images/profile1.avif",
  },
  {
    id: 5,
    text: "Professionalism at its finest. The staff were courteous and the vehicle was spotless. A truly premium car rental service that I would suggest to anyone.",
    name: "James Wilson",
    location: "Manchester",
    profile: "/assets/images/doctor1.jpeg",
  },
];

export const TestimonialSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 420; // Approx card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className=" mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-header text-3xl md:text-5xl text-black leading-[1.1] mb-6 tracking-tight">
              Trusted by Thousands
            </h2>
            <p className="text-gray-500 text-md leading-relaxed max-w-md font-inter">
              Real experiences from real drivers. See why thousands of customers
              trust us for comfort, quality, and reliability every time they hit
              the road.
            </p>
          </div>

          <div className="items-center gap-4 hidden md:flex">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors duration-200 group"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Cards Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="min-w-[320px] md:min-w-[400px] bg-gray-50 rounded-2xl border border-gray-100 p-8 snap-start flex flex-col justify-between h-[400px] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <Image
                  src="/assets/images/quoatation-mark.png"
                  alt="Quote"
                  width={50}
                  height={50}
                  className="mb-6"
                />
                <p className="text-gray-800 text-sm md:text-lg  leading-relaxed font-inter">
                  {item.text}
                </p>
              </div>

              <div className="flex items-center gap-4   border-t border-gray-50">
                <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src={item.profile}
                    alt={item.name}
                    width={900}
                    height={900}
                    className="object-cover"
                    sizes="50px"
                  />
                </div>
                <div>
                  <h4 className="font-medium font-inter text-black text-base leading-none mb-1">
                    {item.name}
                  </h4>
                  <span className="text-gray-500 text-sm font-inter">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
