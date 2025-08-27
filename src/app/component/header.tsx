'use client'
import React, { useState, useRef } from "react";

export const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    return (
        <header className="hidden md:flex flex-col bg-black text-white sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-6 py-5">
                {/* Logo */}
                <div className="h-8 w-8 bg-white rounded-full"></div>
                {/* Nav Menu */}
                <nav className="flex items-center space-x-10 text-sm font-medium">
                    <a href="/" className="hover:text-gray-300">Home</a>
                    <a href="/brands" className="hover:text-gray-300">Brands</a>
                    <div
                        className="relative"
                        ref={dropdownRef}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(true)}
                        onFocus={() => setDropdownOpen(true)}
                        onBlur={(e) => {
                            // Only close if focus moves outside the dropdown
                            if (!e.currentTarget.contains(e.relatedTarget)) {
                                setDropdownOpen(false);
                            }
                        }}
                        tabIndex={0}
                    >
                        <button
                            className="hover:text-gray-300 flex items-center gap-1 focus:outline-none"
                            aria-haspopup="true"
                            aria-expanded={dropdownOpen}
                        >
                            Laptops
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-20" role="menu">
                                <a href="/laptops/gaming" className="block px-4 py-2 hover:bg-gray-100" tabIndex={0} role="menuitem" onClick={() => setDropdownOpen(false)}>Gaming Laptops</a>
                                <a href="/laptops/business" className="block px-4 py-2 hover:bg-gray-100" tabIndex={0} role="menuitem" onClick={() => setDropdownOpen(false)}>Business Laptops</a>
                                <a href="/laptops/student" className="block px-4 py-2 hover:bg-gray-100" tabIndex={0} role="menuitem" onClick={() => setDropdownOpen(false)}>Student Laptops</a>
                            </div>
                        )}
                    </div>
                    <a href="/desktops" className="hover:text-gray-300">Desktop</a>
                    <a href="/keyboards" className="hover:text-gray-300">Keyboards</a>
                    <a href="/mouse" className="hover:text-gray-300">Mouse</a>
                    <a href="/tables" className="hover:text-gray-300">Tables</a>
                    <a href="/accessories" className="hover:text-gray-300">Accessories</a>
                </nav>

                {/* Right Icons */}
                <div className="flex items-center space-x-5">
                    {/* Search Icon */}
                    <button className="hover:text-gray-300">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>

                    {/* Cart Icon */}
                    <a href="/cart" className="relative hover:text-gray-300">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                            3
                        </span>
                    </a>

                    {/* User/Login Icon */}
                    <a href="/login" className="hover:text-gray-300">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3a3 3 0 110 6 3 3 0 010-6zm0 14c-2.67 0-5.2-1.31-6.71-3.36.03-2.01 4.47-3.12 6.71-3.12 2.24 0 6.68 1.11 6.71 3.12C17.2 17.69 14.67 19 12 19z" />
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
};
