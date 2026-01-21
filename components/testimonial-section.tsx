"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="px-4 md:px-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-xl"
          >
            <h2 className="font-header text-3xl md:text-5xl text-black leading-[1.1] mb-4 tracking-tight">
              Trusted by Thousands
            </h2>
            <p className="text-gray-500 text-sm md:text-lg tracking-tighter leading-relaxed font-inter">
              Real experiences from real drivers. See why thousands of customers
              trust us for comfort, quality, and reliability every time they hit
              the road.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="items-center gap-3 hidden md:flex"
          >
            <motion.button
              onClick={() => scroll("left")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </motion.button>
            <motion.button
              onClick={() => scroll("right")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </motion.div>
        </div>

        {/* Cards Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -4 }}
              className="min-w-[320px] md:min-w-[500px] bg-white rounded-2xl border border-gray-200 p-6 md:p-8 snap-start flex flex-col justify-between h-[320px] md:h-[350px] transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div>
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 text-gray-300 mb-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l-.007.006z" />
                </svg>
                <p className="text-gray-700 text-sm md:text-lg leading-relaxed font-inter tracking-tighter">
                  {item.text}
                </p>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
                <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src={item.profile}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="font-medium font-inter text-gray-900 text-xl tracking-tighter leading-none">
                    {item.name}
                  </h4>
                  <span className="text-gray-500 text-sm font-inter uppercase tracking-wider">
                    {item.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center items-center gap-3 mt-8 md:hidden"
        >
          <motion.button
            onClick={() => scroll("left")}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </motion.button>
          <motion.button
            onClick={() => scroll("right")}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
