"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book a car?",
    answer:
      "Booking is simple and fast. Browse our fleet online, choose your preferred car, and complete your reservation with secure payment. You can also contact our team directly via phone or WhatsApp for assistance.",
  },
  {
    question: "Can the car be delivered to my location?",
    answer:
      "Yes, we offer premium delivery services to your preferred location, whether it's your home, office, or the airport. Additional fees may apply based on distance.",
  },
  {
    question: "What is the minimum rental period?",
    answer:
      "Our minimum rental period is typically one day (24 hours). We also offer flexible weekly and monthly rental options to suit your needs.",
  },
  {
    question: "Is insurance included in the rental price?",
    answer:
      "Basic insurance is included with all rentals. We also offer comprehensive insurance packages for added peace of mind during your journey.",
  },
  {
    question: "What documents do I need to rent a car?",
    answer:
      "You'll need a valid driver's license, a government-issued ID or passport, and a credit card for the security deposit. International customers may need an International Driving Permit.",
  },
  {
    question: "Is there a security deposit required?",
    answer:
      "Yes, a security deposit is required for all rentals. The amount varies depending on the vehicle category and is refundable upon the safe return of the car.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-gray-50 py-16 md:py-24 px-4 md:px-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col gap-6"
        >
          <h2 className="font-header text-3xl md:text-5xl text-black leading-tight tracking-tight">
            Got questions? We&apos;ve got answers!
          </h2>
          <p className="font-inter text-gray-500 text-sm md:text-lg leading-relaxed md:max-w-sm tracking-tighter">
            Here are some of the most common questions about our luxury car rental service.
          </p>
        </motion.div>

        {/* Right Side - Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col"
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="flex flex-col space-y-3 w-full"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-0 rounded-xl overflow-hidden data-[state=open]:bg-[#285ff5] data-[state=closed]:bg-gray-100 transition-colors duration-300"
                >
                  <AccordionTrigger className="px-5 py-4 text-base md:text-xl font-inter tracking-tighter font-medium hover:no-underline cursor-pointer data-[state=open]:text-white data-[state=closed]:text-gray-900 [&>svg]:data-[state=open]:text-white [&>svg]:data-[state=closed]:text-gray-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 text-gray-300 text-sm md:text-base tracking-tighter font-inter leading-snug">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
