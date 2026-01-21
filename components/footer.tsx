"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const navLinks = [
    { label: "How It Works", href: "#" },
    { label: "Our Fleet", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-gray-950 pt-8 pb-12 px-4 md:px-14">
      {/* CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-gray-900 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden"
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-900/20 pointer-events-none" />

        <div className="relative z-10">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="text-gray-400 text-xs uppercase tracking-widest font-inter">✦ Contact Us</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-inter text-2xl md:text-4xl leading- tracking-tighter max-w-lg mb-12"
          >
            <span className="text-white font-medium">Ready to hit the road?</span>{" "}
            <span className="text-gray-500">
              Rent your dream car today or reach out to learn more.
            </span>
          </motion.h2>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-gray-400 text-xs uppercase tracking-widest font-inter mb-2">Get in touch:</p>
              <Link
                href="mailto:hello@dreamdrive.com"
                className="text-white text-lg md:text-xl font-inter tracking-tight flex items-center gap-2 hover:text-gray-400 transition-colors group"
              >
                hello@dreamdrive.com
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Navigation Links */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-6 md:gap-10"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 text-sm md:text-base font-inter hover:text-white transition-colors tracking-tighter"
                >
                  {link.label}
                </Link>
              ))}
            </motion.nav>
          </div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="relative">
        {/* Gradient Glow Effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-t from-white/20 via-gray-500/10 to-transparent blur-3xl pointer-events-none" />

        {/* Large Brand Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center py-12 "
        >
          <h2 className="font-header text-5xl md:text-8xl lg:text-[24vh] text-white tracking-tighter text-center">
            Dream Drive
          </h2>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800/50"
        >
          <p className="text-gray-500 text-xs font-inter uppercase tracking-widest">
            © 2026 Dream Drive. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-500 text-xs font-inter hover:text-white transition-colors uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
