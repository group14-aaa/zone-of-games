import React, { useEffect, useState, useCallback } from "react";

// Components
import CollapsibleSection from "./CollapsibleSection";

// API
import rawgApi from "../services/rawgApi";

const RawgGenreList = ({ onGenreSelect, onGenreName }) => {
   // State for genre list from RAWG Api
   const [genreList, setGenreList] = useState([]);
   const [displayedGenres, setDisplayedGenres] = useState(10);
   const [activeIndex, setActiveIndex] = useState(0);

   useEffect(() => {
      // Fetch genre list when component mounts
      fetchRawgGenreList();
   }, []);

   // Get genre list from RAWG Api
   const fetchRawgGenreList = async () => {
      try {
         const response = await rawgApi.getGenreList;

         setGenreList(response.data.results);
      } catch (error) {
         console.error("Error fetching genre list:", error);
      }
   };

   const handleShowMore = useCallback(() => {
      setDisplayedGenres(displayedGenres + 5);
   }, [displayedGenres]);

   const handleShowLess = useCallback(() => {
      setDisplayedGenres(Math.max(displayedGenres - 5, 5));
   }, [displayedGenres]);

   return (
      <div className="bg-secondary p-5 rounded-md shadow-md">
         {/* Collapsible Genres Section */}
         <CollapsibleSection title="Genres">
            {genreList.slice(0, displayedGenres).map((item, index) => (
               // Each genre item
               <div
                  key={item.id}
                  onClick={() => {
                     setActiveIndex(index);
                     onGenreSelect(item.id);
                     onGenreName(item.name);
                  }}
                  className={`flex gap-2 items-center mb-2 mt-3 px-2 py-2 cursor-pointer hover:bg-accent hover:text-white group rounded-lg ${activeIndex === index ? "bg-accent" : ""}`}
               >
                  {/* Genre image */}
                  <img
                     src={item.image_background}
                     alt={`Genre ${item.name} background`}
                     className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-110 transition-all ease-out duration-300 ${activeIndex === index ? "scale-110" : ""}`}
                  />

                  {/* Genre name */}
                  <h3 className={`text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${activeIndex === index ? "font-bold text-white" : ""}`}>{item.name}</h3>
               </div>
            ))}

            <div className="flex justify-between mt-4">
               <button onClick={handleShowMore} className="bg-primary text-text px-4 py-2 rounded-md hover:bg-success hover:opacity-90 transition duration-150 ease-in-out">
                  Show More
               </button>
               {displayedGenres > 5 && (
                  <button onClick={handleShowLess} className="bg-primary text-text px-4 py-2 rounded-md hover:bg-error hover:opacity-90 transition duration-150 ease-in-out">
                     Show Less
                  </button>
               )}
            </div>
         </CollapsibleSection>
      </div>
   );
};

export default RawgGenreList;
