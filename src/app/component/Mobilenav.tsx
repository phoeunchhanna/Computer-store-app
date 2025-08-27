// components/Mobilenav.tsx
"use client";

import React, { useState } from "react";

export const Mobilenav: React.FC = () => { // Changed to named export
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu open/close state.
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Dropdown state for Laptops
  const [laptopDropdown, setLaptopDropdown] = useState(false);

  const navigateTo = (path: string) => {
    window.location.href = path; 
    setIsOpen(false); 
  };

  return (
    <>
      {/* Mobile header bar */}
      <div className="md:hidden w-full flex items-center justify-between px-3 py-2 bg-black border-b border-red-900">
        {/* Hamburger menu button */}
        <button
          onClick={toggleMenu}
          className="text-white hover:text-blue-200 focus:outline-none p-2 rounded-md"
          aria-label="Toggle navigation"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Logo */}
        <span className="ml-2 mr-2">
          {/* Example logo: replace with your logo if needed */}
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" strokeWidth="2" />
          </svg>
        </span>
        {/* Search bar */}
        <div className="flex-1 mx-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full bg-neutral-800 text-white pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        {/* Cart icon */}
        <a href="/cart" className="relative text-white hover:text-blue-200 transition-colors ml-2">
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </a>
        {/* Logout icon */}
        <button
          onClick={() => navigateTo("/logout")}
          className="text-white hover:text-red-400 transition-colors ml-2"
          aria-label="Logout"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
          </svg>
        </button>
      </div>
      {/* Sidebar menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-200"
            onClick={toggleMenu}
            aria-label="Close menu overlay"
          />
          {/* Sidebar */}
          <aside className="fixed top-0 left-0 h-full w-64 max-w-[90vw] bg-neutral-900 text-white z-50 flex flex-col shadow-2xl animate-slide-in">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-700">
              <span className="text-lg font-bold tracking-wide">PC</span>
              <button
                onClick={toggleMenu}
                className="text-white hover:text-blue-200 focus:outline-none p-2 rounded-md"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Menu items */}
            <nav className="flex-1 overflow-y-auto">
              <ul className="py-2 px-2 space-y-1">
                <li>
                  <button onClick={() => navigateTo("/")} className="flex items-center w-full px-4 py-2 rounded hover:bg-neutral-800 transition-colors">
                    <span className="mr-3">
                      {/* Home icon */}
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v11a1 1 0 01-1 1h-3m-6 0h6" /></svg>
                    </span>
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("/brands")}
                    className="flex items-center w-full px-4 py-2 rounded hover:bg-neutral-800 transition-colors">
                    <span className="mr-3">
                      {/* Brands icon */}
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 01-8 0M12 3v4m0 0C7.03 7 2 8.5 2 12c0 2.21 2.69 4 6 4s6-1.79 6-4c0-3.5-5.03-5-10-5z" /></svg>
                    </span>
                    Brands
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLaptopDropdown((open) => !open)}
                    className="flex items-center w-full px-4 py-2 rounded hover:bg-neutral-800 transition-colors justify-between"
                    aria-expanded={laptopDropdown}
                    aria-controls="laptop-submenu"
                  >
                    <span className="flex items-center">
                      {/* Laptop icon */}
                      <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M4 8v8a2 2 0 002 2h8a2 2 0 002-2V8" /></svg>
                      Laptops
                    </span>
                    <svg className={`h-4 w-4 ml-2 transition-transform ${laptopDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {laptopDropdown && (
                    <ul id="laptop-submenu" className="ml-8 mt-1 space-y-1">
                      <li>
                        <button onClick={() => navigateTo("/laptops/gaming")}
                          className="flex items-center w-full px-4 py-2 rounded hover:bg-neutral-800 transition-colors text-sm">
                          Gaming Laptops
                        </button>
                      </li>
                      <li>
                        <button onClick={() => navigateTo("/laptops/business")}
                          className="flex items-center w-full px-4 py-2 rounded hover:bg-neutral-800 transition-colors text-sm">
                          Business Laptops
                        </button>
                      </li>
                      <li>
                        <button onClick={() => navigateTo("/laptops/student")}
                          className="flex items-center w-full px-4 py-2 rounded hover:bg-neutral-800 transition-colors text-sm">
                          Student Laptops
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button onClick={() => navigateTo("/desktops")}
                    className="flex items-center w-full px-4 py-2 rounded hover:bg-neutral-800 transition-colors">
                    <span className="mr-3">
                      {/* Desktop icon */}
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17h4.5M4 6h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" /></svg>
                    </span>
                    Desktop
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("/keyboards")}
                    className="flex items-center w-full px-4 py-2 rounded hover:bg-neutral-800 transition-colors">
                    <span className="mr-3">
                      {/* Keyboard icon */}
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="8" x="2" y="8" rx="2" /><path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01" /></svg>
                    </span>
                    Keyboards
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("/mouse")}
                    className="flex items-center w-full px-4 py-2 rounded hover:bg-neutral-800 transition-colors">
                    <span className="mr-3">
                      {/* Mouse icon */}
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="12" height="18" x="6" y="3" rx="6" /><path d="M12 3v6" /></svg>
                    </span>
                    Mouse
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("/tables")}
                    className="flex items-center w-full px-4 py-2 rounded hover:bg-neutral-800 transition-colors">
                    <span className="mr-3">
                      {/* Table icon */}
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="8" x="2" y="8" rx="2" /><path d="M2 12h20" /></svg>
                    </span>
                    Tables
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("/accessories")}
                    className="flex items-center w-full px-4 py-2 rounded hover:bg-neutral-800 transition-colors">
                    <span className="mr-3">
                      {/* Accessories icon */}
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                    </span>
                    Accessories
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("/settings")}
                    className="flex items-center w-full px-4 py-2 rounded hover:bg-neutral-800 transition-colors">
                    <span className="mr-3">
                      {/* Settings icon */}
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>
                    </span>
                    Settings
                  </button>
                </li>
              </ul>
            </nav>
            {/* Logout button at the bottom */}
            <div className="mt-auto border-t border-neutral-700 p-2">
              <button
                onClick={() => navigateTo("/logout")}
                className="flex items-center w-full px-4 py-2 rounded hover:bg-neutral-800 transition-colors border border-red-400 text-red-300 font-semibold"
              >
                <span className="mr-3">
                  {/* Logout icon */}
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" /></svg>
                </span>
                logout
              </button>
            </div>
          </aside>
        </>
      )}
    </>
  );
}