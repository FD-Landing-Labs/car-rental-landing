"use client";

import { Search, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Our fleet",
    "Car brands",
    "Our services",
    "Lease to own",
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
    if (item === "Car brands") {
      setIsBrandsOpen(!isBrandsOpen);
    } else {
      setActiveItem(item);
      setIsMobileMenuOpen(false); // Close mobile menu on selection
      setIsBrandsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between p-4 border-b items-center z-50 bg-white h-20">
        <Link href="/">
          <span className="font-medium text-lg md:text-xl text-[#1a3edb]">
            Dream Drive
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="relative hidden md:block">
          <ul className="flex gap-1 bg-gray-100 text-[#1a3edb] p-1 border border-gray-300 rounded-full font-medium items-center">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => handleNavClick(item)}
                className={`cursor-pointer px-5 py-2 rounded-full transition-all duration-300 ease-in-out ${
                  activeItem === item
                    ? "bg-white shadow-sm text-blue-700 font-medium scale-105"
                    : "hover:bg-gray-200/50 hover:text-blue-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  {item}
                  {item === "Car brands" && (
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-300 ${isBrandsOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Desktop Dropdown Menu */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ease-out origin-top ${
              isBrandsOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="p-2 grid grid-cols-1 gap-1">
              {carBrands.map((brand) => (
                <div
                  key={brand}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer rounded-xl text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300 transition-colors ">
            <Search size={15} />
          </div>
          <button className="bg-gray-200 border border-gray-300 font-medium text-[#1a3edb] px-4 py-2 rounded-full hover:bg-gray-300 cursor-pointer transition-colors">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[#1a3edb] hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out pt-24 px-6 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col  overflow-y-auto max-h-[calc(100vh-100px)]">
          {navItems.map((item) => (
            <div
              key={item}
              className="border-b border-gray-100 last:border-none"
            >
              <div
                className={`flex justify-between items-center py-4 text-lg font-medium cursor-pointer ${
                  activeItem === item ? "text-[#1a3edb]" : "text-gray-700"
                }`}
                onClick={() => handleNavClick(item)}
              >
                {item}
                {item === "Car brands" && (
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${isBrandsOpen ? "rotate-180" : ""}`}
                  />
                )}
              </div>

              {/* Mobile Nested Dropdown */}
              {item === "Car brands" && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${isBrandsOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"}`}
                >
                  <div className="bg-gray-50 rounded-xl p-2 grid gap-1">
                    {carBrands.map((brand) => (
                      <div
                        key={brand}
                        className="px-4 py-2 text-gray-600 hover:text-[#1a3edb] hover:bg-white rounded-lg transition-colors cursor-pointer"
                      >
                        {brand}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="mt-6 flex flex-col gap-4 pb-4">
            <button className="w-full bg-[#1a3edb] text-white py-3 cursor-pointer rounded-full font-medium hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
}
