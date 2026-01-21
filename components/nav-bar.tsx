"use client";

import { Search, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);

  const { scrollY } = useScroll();

  // Hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setIsNavHidden(true);
      setIsBrandsOpen(false);
    } else {
      setIsNavHidden(false);
    }
  });

  const navItems = [
    { label: "Home", hasDropdown: false },
    { label: "About Us", hasDropdown: false },
    { label: "Our Fleet", hasDropdown: false },
    { label: "Car Brands", hasDropdown: true },
    { label: "Our Services", hasDropdown: false },
    { label: "Lease To Own", hasDropdown: false },
  ];

  const carBrands = [
    "Tesla",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Porsche",
    "Lamborghini",
  ];

  const handleNavClick = (item: string) => {
    if (item === "Car Brands") {
      setIsBrandsOpen(!isBrandsOpen);
    } else {
      setActiveItem(item);
      setIsMobileMenuOpen(false);
      setIsBrandsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        animate={isNavHidden ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-between items-center px-4 md:px-14 h-20 bg-white/80 backdrop-blur-md border-b border-gray-100"
        >
          {/* Logo */}
          <Link href="/">
            <motion.span
              className="font-header font-semibold text-2xl text-gray-900 tracking-tight"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Dream Drive
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="relative hidden lg:block">
            <motion.ul
              className="flex items-center gap-1 bg-gray-100/80 backdrop-blur-sm p-1 rounded-full border border-gray-200/50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                  onClick={() => handleNavClick(item.label)}
                  className="relative"
                >
                  <motion.div
                    className={`cursor-pointer px-4 py-2 rounded-full text-sm tracking-tighter font-medium font-inter flex items-center gap-1.5 transition-colors relative z-10 ${activeItem === item.label
                      ? "text-white"
                      : "text-gray-700 hover:text-gray-900"
                      }`}
                    whileHover={{ scale: activeItem === item.label ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {/* Active background indicator */}
                    {activeItem === item.label && (
                      <motion.div
                        layoutId="activeNavBg"
                        className="absolute inset-0 bg-gray-900 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                    {item.hasDropdown && (
                      <motion.span
                        animate={{ rotate: isBrandsOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10"
                      >
                        <ChevronDown size={14} />
                      </motion.span>
                    )}
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>

            {/* Desktop Dropdown */}
            <AnimatePresence>
              {isBrandsOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  <div className="p-2">
                    {carBrands.map((brand, index) => (
                      <motion.div
                        key={brand}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        whileHover={{
                          backgroundColor: "rgb(239 246 255)",
                          x: 4,
                        }}
                        className="px-4 py-2.5 cursor-pointer rounded-xl text-sm font-inter font-medium text-gray-700 hover:text-blue-700"
                      >
                        {brand}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Right Actions */}
          <motion.div
            className="hidden lg:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.button
              className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Search size={18} />
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button>Contact Us</Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-full cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100">
                  <span className="font-header font-semibold text-xl text-gray-900">
                    Menu
                  </span>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={24} className="text-gray-700" />
                  </motion.button>
                </div>

                {/* Mobile Nav Items */}
                <div className="flex-1 overflow-y-auto px-6 py-6">
                  <nav className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                      >
                        <motion.div
                          onClick={() => handleNavClick(item.label)}
                          className={`flex items-center justify-between py-3.5 px-4 rounded-xl cursor-pointer font-inter font-medium transition-colors ${activeItem === item.label
                            ? "bg-gray-900 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                            }`}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>{item.label}</span>
                          {item.hasDropdown && (
                            <motion.span
                              animate={{ rotate: isBrandsOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown size={18} />
                            </motion.span>
                          )}
                        </motion.div>

                        {/* Mobile Nested Dropdown */}
                        <AnimatePresence>
                          {item.hasDropdown && isBrandsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 mt-2 space-y-1 bg-gray-50 rounded-xl p-2">
                                {carBrands.map((brand, brandIndex) => (
                                  <motion.div
                                    key={brand}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{
                                      opacity: 1,
                                      x: 0,
                                      transition: { delay: brandIndex * 0.05 },
                                    }}
                                    whileHover={{ x: 4 }}
                                    className="px-4 py-2.5 text-gray-600 hover:text-[#1a3edb] rounded-lg cursor-pointer font-inter text-sm"
                                  >
                                    {brand}
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Mobile Footer Actions */}
                <motion.div
                  className="px-6 py-6 border-t border-gray-100 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button size="lg" fullWidth>Contact Us</Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button variant="secondary" size="lg" fullWidth>
                      <Search size={18} />
                      <span>Search</span>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
