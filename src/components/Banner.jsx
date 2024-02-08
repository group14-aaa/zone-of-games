import React, { useEffect } from "react";

function Banner(gameBanner) {
   useEffect(() => {
      console.log(gameBanner);
   }, []);
   return <div></div>;
}

export default Banner;
