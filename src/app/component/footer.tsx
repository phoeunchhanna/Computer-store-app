'use client'
import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { MdMailOutline, MdLanguage, MdCopyright } from 'react-icons/md';

const socialLinks = [
  { icon: FaFacebookF, href: '#' },
  { icon: FaYoutube, href: '#' },
  { icon: FaTiktok, href: '#' },
  { icon: FaInstagram, href: '#' },
  { icon: FaTelegramPlane, href: '#' },
  { icon: MdMailOutline, href: '#' },
];

const FooterTop: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-400">About us</a>
          <a href="#" className="hover:text-gray-400">Support</a>
          <a href="#" className="hover:text-gray-400">Service</a>
        </div>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-white hover:text-gray-400 text-2xl">
              <link.icon />
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="Enter email address"
            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
          />
          <button className="bg-red-600 text-white px-6 py-2 rounded-md font-bold hover:bg-red-700 transition-colors">
            SIGN UP
          </button>
        </div>
      </div>
      <hr className="border-gray-700 my-8" />
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400 mt-6">
        <div className="flex items-center space-x-2">
          <MdLanguage />
          <span>Global | English</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms of Use Notice</a>
          <div className="flex items-center space-x-1">
            <MdCopyright />
            <span>Computers.all</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTop;