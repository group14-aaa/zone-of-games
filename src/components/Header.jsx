import React, { useContext, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import _debounce from "debounce";
import { ThemeContext } from "../context/ThemeContext";
import whiteLogo from "./../assets/images/zog-logo-white.png";
import blackLogo from "./../assets/images/zog-logo-black.png";
import { IoSearchSharp, IoCloseOutline } from "react-icons/io5";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaHome, FaInfoCircle, FaAddressBook } from "react-icons/fa";
import rawgApi from "../services/rawgApi";

const Header = () => {
   const { theme, setTheme } = useContext(ThemeContext);
   const logoSrc = theme === "dark" ? whiteLogo : blackLogo;
   const [gameList, setGameList] = useState([]);
   const [openMenu, setOpenMenu] = useState(false);
   const location = useLocation();
   const [activeIndex, setActiveIndex] = useState(0);
   const [searchQuery, setSearchQuery] = useState("");
   const [filteredGames, setFilteredGames] = useState([]);
   const [showSuggestions, setShowSuggestions] = useState(false);
   const [selectedSuggestion, setSelectedSuggestion] = useState(0);


   useEffect(() => {
      // Determine the active index based on the pathname
      const getActiveIndex = () => {
         switch (location.pathname) {
            case "/":
               return 0;
            case "/about":
               return 1;
            case "/contact":
               return 2;
            default:
               return 0;
         }
      };
      // Set the active index based on the current location
      setActiveIndex(getActiveIndex());
   }, [location]); // Re-run the effect when the location changes

   const fetchGameList = async () => {
      try {
         if (searchQuery.trim() !== "") {
            const response = await rawgApi.getSearchAllGames(searchQuery);
            setGameList(response?.data?.results || []);
         } else {
            setGameList([]);
         }
      } catch (error) {
         console.error("Error fetching game list:", error);
      }
   };

   const debouncedFetchGameList = _debounce(fetchGameList, 300);

   useEffect(() => {
      debouncedFetchGameList();
      return debouncedFetchGameList.cancel;
   }, [searchQuery]);

   useEffect(() => {
      const filtered = gameList.filter((game) =>
         game.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredGames(filtered);
      setShowSuggestions(searchQuery !== "" && filtered.length > 0);
   }, [searchQuery, gameList]);

   const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
   };

   const handleSuggestionClick = (gameName) => {
      setSearchQuery(gameName);
      setShowSuggestions(false);
   };

   const handleEnterPress = (event, gameId) => {
      if (event.key === "Enter" && searchQuery.trim() !== "" && filteredGames.length > 0) {
         window.location.href = `/games/${gameId}`;
      }
   };

   const handleArrowKeyPress = (event) => {
      if (event.key === "ArrowDown" && selectedSuggestion < filteredGames.length - 1) {
         setSelectedSuggestion(selectedSuggestion + 1);
      } else if (event.key === "ArrowUp" && selectedSuggestion > 0) {
         setSelectedSuggestion(selectedSuggestion - 1);
      }
   };

   const handleSearchSubmit = (gameId) => {
      if (searchQuery.trim() !== "" && filteredGames.length > 0) {
         window.location.href = `/games/${gameId}`;
      }
   };

   return (
      <div className="flex items-center p-3 border-b-2 border-accent">
         <a href="/">
            <img
               className="hover:scale-125 transition duration-200 ease-in-out ml-1"
               src={logoSrc}
               width={100}
               height={50}
               alt="Logo image"
            />
         </a>

         <div className="flex bg-slate-200 p-2 w-screen mx-5 rounded-full items-center relative">
            <IoSearchSharp />
            <input
               required
               type="text"
               placeholder="Search Games..."
               className="px-2 bg-transparent outline-none w-full"
               value={searchQuery}
               onChange={handleSearchChange}
               onKeyDown={(event) => {
                  handleArrowKeyPress(event);
                  handleEnterPress(event, filteredGames.length > 0 ? filteredGames[selectedSuggestion].id : "");
               }}
            />
            {showSuggestions && (
               <div className="absolute top-full left-0 w-3/4 bg-white rounded-xl z-10 mt-2">
                  {filteredGames.map((game, index) => (
                     <div
                        key={game.id}
                        className={`p-3 border-b border-gray-200 rounded-xl hover:bg-accent cursor-pointer ${index === selectedSuggestion ? "bg-accent text-white" : ""
                           }`}
                        onClick={() => {
                           handleSuggestionClick(game.name);
                           handleSearchSubmit(game.id);
                        }}
                     >
                        {game.name}
                     </div>
                  ))}
               </div>
            )}
            {/* Search button/icon */}
            <div
               className={`cursor-pointer ml-2 ${searchQuery.trim() === "" || filteredGames.length === 0 ? "cursor-not-allowed" : ""}`}
               onClick={(event) => {
                  event.preventDefault();
                  handleSearchSubmit(filteredGames.length > 0 ? filteredGames[selectedSuggestion].id : "");
               }}
            >
               <svg
                  className={`w-6 h-6 text-accent hover:text-accent-dark transition duration-200 ${searchQuery.trim() === "" || filteredGames.length === 0 ? "text-gray-500" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M5 12h14M12 5l7 7-7 7"
                  />
               </svg>
            </div>
         </div>
         <button
            onClick={() => setOpenMenu(!openMenu)}
            className="inline-flex items-center p-2 md:hidden text-text hover:bg-accent hover:text-white rounded-md px-3 py-2 text-sm font-bold cursor-pointer"
         >
            <svg
               className="w-6 h-6"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth="2"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
               />
            </svg>
         </button>

         <div
            className={`fixed rounded-xl top-0 w-max right-0 z-50 py-5 pr-10 dark:bg-primary bg-white shadow-md md:hidden ${openMenu ? "block" : "hidden"
               }`}
         >
            <button
               onClick={() => setOpenMenu(false)}
               className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
               <IoCloseOutline className="text-2xl font-bold" />
            </button>
            <ul className="space-y-2">
               <li>
                  <Link
                     to="/"
                     alt= "Home Page"
                     title= "Go back home"
                     className={`flex items-center text-text hover:bg-accent hover:text-white rounded-md px-3 py-2 text-sm font-bold ${activeIndex === 0 ? "border-b-4 border-accent" : ""
                        }`}
                     aria-current="page"
                  >
                     <FaHome className="mr-2" />
                     Home
                  </Link>
               </li>
               <li>
                  <Link
                     to="/about"
                     alt= "About Page"
                     title="About Page"
                     className={`flex items-center text-text hover:bg-accent hover:text-white rounded-md px-3 py-2 text-sm font-bold ${activeIndex === 1 ? "border-b-4 border-accent" : ""
                        }`}
                  >
                     <FaInfoCircle className="mr-2" />
                     About
                  </Link>
               </li>
               <li>
                  <Link
                     to="/contact"
                     alt= "Contact Page"
                     title="Contact Page"
                     className={`flex items-center text-text hover:bg-accent hover:text-white rounded-md px-3 py-2 text-sm font-bold ${activeIndex === 2 ? "border-b-4 border-accent" : ""
                        }`}
                  >
                     <FaAddressBook className="mr-2" />
                     Contact
                  </Link>
               </li>

               <button
                  onClick={() => {
                     const newTheme = theme === "light" ? "dark" : "light";
                     setTheme(newTheme);
                     localStorage.setItem("theme", newTheme);
                  }}
                  className="flex items-center bg-slate-200 text-black px-3 py-1 ml-2 rounded-full cursor-pointer"
               >
                  {theme === "light" ? (
                     <MdDarkMode className="text-[25px]" />
                  ) : (
                     <MdLightMode className="text-[25px]" />
                  )}
                  <span className="text-sm dark:text-black pl-2 font-bold text-text">
                     {theme === "light" ? "Dark" : "Light"}
                  </span>
               </button>
            </ul>
         </div>

         <div className="hidden md:block">
            <div className="flex space-x-5">
               <a
                  href="/"
                  className={`flex items-center text-text hover:bg-accent hover:text-white rounded-md px-3 py-2 text-sm font-bold ${activeIndex === 0 ? "border-b-4 border-accent" : ""
                     }`}
                  aria-current="page"
               >
                  <FaHome className="mr-2" />
                  Home
               </a>
               <a
                  href="/about"
                  className={`flex items-center text-text hover:bg-accent hover:text-white rounded-md px-3 py-2 text-sm font-bold ${activeIndex === 1 ? "border-b-4 border-accent" : ""
                     }`}
               >
                  <FaInfoCircle className="mr-2" />
                  About
               </a>
               <a
                  href="/contact"
                  className={`flex items-center text-text hover:bg-accent hover:text-white rounded-md px-3 py-2 text-sm font-bold ${activeIndex === 2 ? "border-b-4 border-accent" : ""
                     }`}
               >
                  <FaAddressBook className="mr-2" />
                  Contact
               </a>
               <button
                  onClick={() => {
                     const newTheme = theme === "light" ? "dark" : "light";
                     setTheme(newTheme);
                     localStorage.setItem("theme", newTheme);
                  }}
                  className="bg-slate-200 dark:text-white hover:scale-125 transition duration-200 ease-in-out bg-transparent cursor-pointer"
               >
                  {theme === "light" ? (
                     <MdDarkMode className="text-[30px]" />
                  ) : (
                     <MdLightMode className="text-[30px] mr-1" />
                  )}
               </button>
            </div>
         </div>
      </div>
   );
};

export default Header;
