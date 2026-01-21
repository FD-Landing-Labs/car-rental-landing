"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

// Animated counter component
function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animate(count, value, { duration: 2, ease: "easeOut" });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [count, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function About() {
  const stats = [
    { label: "Luxury Cars", value: 500, suffix: "+" },
    { label: "Road Assistance", value: 24, suffix: "/7" },
    { label: "Service Guarantee", value: 100, suffix: "%" },
    { label: "Pickup Locations", value: 60, suffix: "+" },
    { label: "Satisfied Clients", value: 800, suffix: "+" },
  ];

  return (
    <section className="bg-white pt-10 px-4 md:px-14">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 py-14">
        {/* Left Side - Headline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-4/12"
        >
          <h2 className="font-header text-3xl md:text-4xl text-black">
            Drive Luxury Live Freedom
          </h2>
        </motion.div>

        {/* Right Side - Description */}
        <div className="flex flex-col w-full md:w-8/12 gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-black md:text-3xl text-left text-md leading-tight tracking-tighter font-normal font-inter"
          >
            Experience premium car rentals crafted for comfort, performance, and
            style. Whether its a quick business trip or long{" "}
            <span className="text-gray-500">
              weekend getaway our fleet is designed to elevate your journey{" "}
            </span>{" "}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 border-t border-gray-300 pt-6 font-inter"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut",
                }}
                className="flex flex-col border-l border-gray-300 pl-4"
              >
                <span className="text-2xl md:text-4xl font-medium tracking-tighter">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs uppercase text-gray-500 font-medium tracking-wide font-inter mt-4">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
