import React, { useContext } from "react";

// Components
import { ThemeContext } from "../context/ThemeContext";

// Images
import logo from "./../assets/images/logo-no-background.png";

// Icons
import { IoSearchSharp } from "react-icons/io5";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaHome, FaInfoCircle, FaAddressBook } from "react-icons/fa";

const Header = () => {
   const { theme, setTheme } = useContext(ThemeContext);

   return (
      <div className="flex items-center p-3 border-b-2 border-accent">
         <img src={logo} width={100} height={50} alt="Logo image" />
         <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
            <IoSearchSharp />
            <input type="text" placeholder="Search Games..." className="px-2 bg-transparent outline-none w-full" />
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
            </div>
         </div>
         <button
            onClick={() => {
               const newTheme = theme === "light" ? "dark" : "light";
               setTheme(newTheme);
               localStorage.setItem("theme", newTheme);
            }}
            className="bg-slate-200 text-black p-1 rounded-full cursor-pointer"
         >
            {theme === "light" ? <MdDarkMode className="text-[25px]" /> : <MdLightMode className="text-[25px]" />}
         </button>
      </div>
   );
};

export default Header;
