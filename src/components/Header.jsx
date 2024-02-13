import React, { useContext, useState } from "react";

// Components
import { ThemeContext } from "../context/ThemeContext";

// Images
import logo from "./../assets/images/logo-no-background.png";

// Icons
import { IoSearchSharp, IoCloseOutline } from "react-icons/io5";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaHome, FaInfoCircle, FaAddressBook } from "react-icons/fa";

const Header = () => {
   const { theme, setTheme } = useContext(ThemeContext);
   const [openMenu, setOpenMenu] = useState(false);

   return (
      <div className="flex items-center p-3 border-b-2 border-accent">
         <img src={logo} width={100} height={50} alt="Logo image" />
         <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
            <IoSearchSharp />
            <input type="text" placeholder="Search Games..." className="px-2 bg-transparent outline-none w-full" />
         </div>
         <button
            onClick={() => setOpenMenu(!openMenu)}
            className="inline-flex items-center p-2 sm:hidden text-text hover:bg-accent hover:text-white rounded-md px-3 py-2 text-sm font-bold cursor-pointer"
         >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
         </button>

         <div className={`fixed rounded top-0 right-0 z-50 h-200 bg-white py-3 px-4 shadow-md sm:hidden ${openMenu ? "block" : "hidden"}`} style={{ width: "200px" }}>
            <button onClick={() => setOpenMenu(false)} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
               <IoCloseOutline className="text-lg" />
            </button>
            <ul className="space-y-2 text-right">
               <li>
                  <a href="/" className="flex items-center text-text hover:bg-accent hover:text-white rounded-md px-3 py-2 text-sm font-bold" aria-current="page">
                     <FaHome className="mr-2" />
                     Home
                  </a>
               </li>
               <li>
                  <a href="/about" className="flex items-center text-text hover:bg-accent hover:text-white rounded-md px-3 py-2 text-sm font-bold">
                     <FaInfoCircle className="mr-2" />
                     About
                  </a>
               </li>
               <li>
                  <a href="/contact" className="flex items-center text-text hover:bg-accent hover:text-white rounded-md px-3 py-2 text-sm font-bold">
                     <FaAddressBook className="mr-2" />
                     Contact
                  </a>
               </li>
               <button
                  onClick={() => {
                     const newTheme = theme === "light" ? "dark" : "light";
                     setTheme(newTheme);
                     localStorage.setItem("theme", newTheme);
                  }}
                  className="bg-slate-200 text-black p-1 mr-2 rounded-full cursor-pointer"
               >
                  {theme === "light" ? <MdDarkMode className="text-[25px]" /> : <MdLightMode className="text-[25px]" />}
               </button>
            </ul>
         </div>

         <div className="hidden sm:mr-5 sm:block">
            <div className="flex space-x-4">
               <a href="/" className="flex items-center text-text hover:bg-accent hover:text-white rounded-md px-3 py-2 text-sm font-bold" aria-current="page">
                  <FaHome className="mr-2" />
                  Home
               </a>
               <a href="/about" className="flex items-center text-text hover:bg-accent hover:text-white rounded-md px-3 py-2 text-sm font-bold">
                  <FaInfoCircle className="mr-2" />
                  About
               </a>
               <a href="/contact" className="flex items-center text-text hover:bg-accent hover:text-white rounded-md px-3 py-2 text-sm font-bold">
                  <FaAddressBook className="mr-2" />
                  Contact
               </a>
               <button
                  onClick={() => {
                     const newTheme = theme === "light" ? "dark" : "light";
                     setTheme(newTheme);
                     localStorage.setItem("theme", newTheme);
                  }}
                  className="bg-slate-200 text-black p-1 mr-2 rounded-full cursor-pointer"
               >
                  {theme === "light" ? <MdDarkMode className="text-[25px]" /> : <MdLightMode className="text-[25px]" />}
               </button>
            </div>
         </div>
      </div>
   );
};

export default Header;
