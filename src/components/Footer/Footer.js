import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer text-gray-300 pt-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 px-28">
          <div className="flex items-center mb-4 lg:mb-0">
            <NavLink to="/" className="text-3xl font-bold">
              <span className="text-[#e4d804]">Mov</span>Flix
            </NavLink>
          </div>
          <nav className="flex flex-wrap justify-center lg:justify-end items-center">
            <a href="/" className="px-3 py-2 hover:text-[#e4d804]">
              HOME
            </a>
            <a href="/movie" className="px-3 py-2 hover:text-[#e4d804]">
              MOVIE
            </a>
            <a href="/tv-show" className="px-3 py-2 hover:text-[#e4d804]">
              TV SHOW
            </a>
            <a href="/pricing" className="px-3 py-2 hover:text-[#e4d804]">
              PRICING
            </a>
            <div className="relative flex items-center w-[18rem] max-w-sm mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Find Favorite Movie"
                className="w-full p-3 pl-4 text-[0.9rem] rounded-full bg-gray-800 border border-none text-white focus:outline-none "
              />
              <button className="absolute border-l-2 right-0 top-0 bottom-0 px-4 py-2 bg-gray-800 border border-none rounded-full flex items-center justify-center text-[#e4d804]">
                <IoSearch />
              </button>
            </div>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-gray-800 pt-8 px-28">
          <nav className="flex flex-wrap justify-center lg:justify-start mb-4 lg:mb-0">
            <a href="/faq" className="mr-6 hover:text-[#e4d804]">
              FAQ
            </a>
            <a href="/help" className="mr-6 hover:text-[#e4d804]">
              HELP CENTER
            </a>
            <a href="/terms" className="mr-6 hover:text-[#e4d804]">
              TERMS OF USE
            </a>
            <a href="/privacy" className="hover:text-[#e4d804]">
              PRIVACY
            </a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#e4d804]">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-[#e4d804]">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-[#e4d804]">
              <FaPinterestP size={20} />
            </a>
            <a href="#" className="hover:text-[#e4d804]">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className=" bg-[#171B22] flex flex-col lg:flex-row mt-5 justify-center items-center h-20">
        <p className="text-sm mb-4 lg:mb-0">
          Copyright © 2021. All Rights Reserved By Movfix
        </p>
      </div>
    </footer>
  );
}
