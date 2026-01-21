"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, Car, CalendarDays, Settings, CreditCard, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    id: 1,
    icon: Search,
    title: "Browse",
    fullTitle: "Browse Cars",
    description: "Explore our premium collection of luxury and performance vehicles tailored to your taste.",
    color: "#3b82f6",
    image: "/assets/images/cars/8.png",
  },
  {
    id: 2,
    icon: Car,
    title: "Choose",
    fullTitle: "Choose Your Ride",
    description: "Select the perfect car that matches your style, needs and budget from our curated fleet.",
    color: "#8b5cf6",
    image: "/assets/images/cars/2.png",
  },
  {
    id: 3,
    icon: CalendarDays,
    title: "Schedule",
    fullTitle: "Set Your Date",
    description: "Pick your preferred duration, date and convenient pickup location near you.",
    color: "#10b981",
    image: "/assets/images/cars/3.png",
  },
  {
    id: 4,
    icon: Settings,
    title: "Customize",
    fullTitle: "Add Preferences",
    description: "Customize your experience with extras like GPS, child seat, insurance or a personal driver.",
    color: "#f59e0b",
    image: "/assets/images/cars/4.png",
  },
  {
    id: 5,
    icon: CreditCard,
    title: "Confirm",
    fullTitle: "Confirm Booking",
    description: "Secure your reservation instantly with our easy and safe online payment system.",
    color: "#ef4444",
    image: "/assets/images/cars/5.png",
  },
  {
    id: 6,
    icon: KeyRound,
    title: "Drive",
    fullTitle: "Pick Up & Drive",
    description: "Collect your car from the location and enjoy the journey ahead. It's that simple!",
    color: "#06b6d4",
    image: "/assets/images/cars/6.png",
  },
];

export default function ProccessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);

    setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  };

  const activeStep = processSteps[activeIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="px-4 md:px-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="font-header text-3xl md:text-5xl text-black leading-[1.1] mb-4 tracking-tight">
              How It Works
            </h2>
            <p className="text-gray-500 text-sm md:text-lg max-w-sm font-inter leading-relaxed tracking-tighter">
              Experience a seamless rental process designed to get you on the road in minutes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:block"
          >
            <Button size="lg">Start Booking</Button>
          </motion.div>
        </div>

        {/* Mobile Layout - Single Card View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:hidden"
        >
          <div
            className="relative rounded-3xl overflow-hidden h-[400px]"
            style={{
              backgroundImage: `url(${activeStep.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "white" }}
                  >
                    <ActiveIcon className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-white/60 text-sm tracking-wider uppercase font-inter">
                    Step {String(activeStep.id).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3 className="text-white font-inter tracking-tighter text-xl mb-2">
                    {activeStep.fullTitle}
                  </h3>
                  <p className="text-white/80 text-sm font-inter leading-snug tracking-tighter">
                    {activeStep.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Step Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {processSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-gray-900"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Mobile CTA */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6"
          >
            <Button size="lg" fullWidth>Start Booking</Button>
          </motion.div>
        </motion.div>

        {/* Desktop Layout - Expandable Panels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex gap-4 h-[500px]"
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={step.id}
                onClick={() => handleStepClick(index)}
                animate={{
                  flex: isActive ? 4 : 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative rounded-3xl overflow-hidden cursor-pointer group"
                style={{ minWidth: isActive ? "auto" : "70px" }}
              >
                {/* Background */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"
                  style={{
                    backgroundImage: `url(${step.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Overlay Gradient */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                      : "bg-gradient-to-t from-black/60 via-black/30 to-black/10"
                  }`}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  {/* Collapsed State */}
                  {!isActive && (
                    <div className="flex flex-col items-center gap-3">
                      <span
                        className="text-white text-lg font-medium font-header"
                        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                      >
                        {step.title}
                      </span>
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm"
                        style={{ border: "2px solid #fff" }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  )}

                  {/* Expanded State */}
                  {isActive && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm"
                          style={{ backgroundColor: "white", boxShadow: `0 0 20px ${step.color}50` }}
                        >
                          <Icon className="w-6 h-6 text-black" />
                        </div>
                        <span className="text-white/60 text-sm tracking-wider uppercase font-inter">
                          Step {String(step.id).padStart(2, "0")}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-white font-inter tracking-tighter text-xl mb-2">
                          {step.fullTitle}
                        </h3>
                        <p className="text-white/80 text-base font-inter leading-snug max-w-md tracking-tighter">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover indicator */}
                {!isActive && (
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Desktop Step Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex justify-center gap-2 mt-8"
        >
          {processSteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => handleStepClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-gray-900"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
