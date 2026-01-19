"use client";

import { Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

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
    setActiveItem(item);
    if (item === "Car brands") {
      setIsBrandsOpen(!isBrandsOpen);
    } else {
      setIsBrandsOpen(false);
    }
  };

  return (
    <nav className="flex justify-between p-4 border-b items-center relative z-50 bg-white">
      <Link href="/">
        <span className="font-medium text-xl text-[#1a3edb]">Dream Drive</span>
      </Link>

      <div className="relative">
        <ul className="flex gap-1 bg-gray-100 text-[#1a3edb] p-1 border border-gray-300 rounded-full font-medium items-center">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleNavClick(item)}
              className={`cursor-pointer px-5 py-2 rounded-full transition-all duration-300 ease-in-out ${
                activeItem === item
                  ? "bg-white shadow-sm text-blue-700 font-medium scale-105"
                  : "hover:bg-gray-200/50 hover:text-blue-800"
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

        {/* Dropdown Menu */}
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

      <div className="flex items-center gap-2">
        <div className="flex items-center bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300 transition-colors">
          <Search size={15} />
        </div>
        <button className="bg-gray-200 border border-gray-300 font-medium text-[#1a3edb] px-4 py-2 rounded-full hover:bg-gray-300 transition-colors">
          Contact Us
        </button>
      </div>
    </nav>
  );
}
