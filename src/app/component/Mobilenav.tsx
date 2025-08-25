// components/Mobilenav.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Mobilenav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (path: string) => {
    router.push(path);
    setIsOpen(false); // Close menu after navigation
  };

  return (
    <div className="md:hidden flex items-center space-x-4"> {/* Added flex and space-x for icon alignment */}
      {/* Shopping Cart Icon (visible in header on mobile) */}
      <a href="/cart" className="relative text-white hover:text-blue-200 transition-colors">
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
          3 {/* Example cart item count */}
        </span>
      </a>

      {/* Mobile Menu Button (Hamburger/Close Icon) */}
      <button
        onClick={toggleMenu}
        className="text-white hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white p-2 rounded-md"
        aria-label="Toggle navigation"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation and Search */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-700 text-white shadow-lg z-50">
          <div className="p-4 border-b border-blue-600"> {/* Search bar container */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full p-2 pl-10 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <button
                onClick={() => navigateTo("/laptops")}
                className="w-full text-left px-4 py-2 hover:bg-blue-600 rounded transition-colors font-semibold"
              >
                Laptops
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("/desktops")}
                className="w-full text-left px-4 py-2 hover:bg-blue-600 rounded transition-colors font-semibold"
              >
                Desktops
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("/components")}
                className="w-full text-left px-4 py-2 hover:bg-blue-600 rounded transition-colors font-semibold"
              >
                Components
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("/accessories")}
                className="w-full text-left px-4 py-2 hover:bg-blue-600 rounded transition-colors font-semibold"
              >
                Accessories
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("/sale")}
                className="w-full text-left px-4 py-2 hover:bg-blue-600 rounded transition-colors font-semibold text-red-300"
              >
                Sale!
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Mobilenav;
