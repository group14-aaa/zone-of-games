import React, { useContext } from "react";

// Components
import { ThemeContext } from "../context/ThemeContext";

// Images
import logo from "./../assets/images/logo-no-background.png";

// Icons
import { IoSearchSharp } from "react-icons/io5";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Header = () => {
   const { theme, setTheme } = useContext(ThemeContext);

   return (
      <div className="flex items-center p-3 border-b-2 border-accent">
         <img src={logo} width={100} height={50} alt="Logo image" />
         <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
            <IoSearchSharp />
            <input type="text" placeholder="Search Games..." className="px-2 bg-transparent outline-none w-full" />
         </div>
         <div className="hidden sm:mx-6 sm:block">
            <div className="flex space-x-4">
               <a href="/" className="text-text hover:bg-navItemColor hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                  Home
               </a>
               <a href="#" className="text-text hover:bg-navItemColor hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  About
               </a>
               <a href="#" className="text-text hover:bg-navItemColor hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Contact
               </a>
            </div>
         </div>
         <div>
            {theme === "light" ? (
               <MdDarkMode
                  className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
                  onClick={() => {
                     setTheme("dark");
                     localStorage.setItem("theme", "dark");
                  }}
               />
            ) : (
               <MdLightMode
                  className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
                  onClick={() => {
                     setTheme("light");
                     localStorage.setItem("theme", "light");
                  }}
               />
            )}
         </div>
      </div>
   );
};

export default Header;
