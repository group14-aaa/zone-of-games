import React, { useEffect, useState } from "react";
import TopRatedGames from "../components/GetTopRatedGames";
import rawgApi from "../services/rawgApi";
function Home() {
   const [allGames, setAllGames] = useState();

   useEffect(() => {
      getAllGames();
   }, []);

   const getAllGames = () => {
      rawgApi.getAllGames.then((response) => {
         console.log(response.data);
      });
   };
   return (
      <div className="grid grid-cols-4">
         <div className="hidden md:block">Sidebar</div>
         <div className="col-span-4 md:col-span-3">
            <TopRatedGames />
         </div>
      </div>
   );
}

export default Home;
