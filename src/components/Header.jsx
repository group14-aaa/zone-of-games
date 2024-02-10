import React, { useContext } from "react";
//import fontstyles into react for nav icons
import { faHome, faInfoCircle, faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Components
import { ThemeContext } from "../context/ThemeContext";

// Images
import logo from "./../assets/images/logo-no-background.png";
import logoDark from "../../src/assets/images/logo-no-background.png";
import logoLight from "../../src/assets/images/logo-no-background.png";

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
         <div className="hidden sm:mr-6 sm:block">
            <div className="flex space-x-4">
               <a href="/" className="flex items-center text-text hover:bg-navItemColor hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                  <FontAwesomeIcon icon={faHome} className="mr-2" />
                  Home
               </a>
               <a href="#" className="flex items-center text-text hover:bg-navItemColor hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  About
               </a>
               <a href="#" className="flex items-center text-text hover:bg-navItemColor hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
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
