import React, { useState, useEffect } from "react";

// Context
import { ThemeContext } from "./context/ThemeContext";

// Components
import PageLayout from "./components/PageLayout";


// Pages
import Home from "./pages/Home";

function App() {
   const [theme, setTheme] = useState("dark");

   // Update document root class when theme changes
   useEffect(() => {
      setTheme(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");
      document.documentElement.className = theme;
   }, [theme]);

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         <div className={`${theme} ${theme === "dark" ? "bg-background" : "bg-background"} min-h-[100vh]`}>
            <PageLayout>
               <Home />
              
            </PageLayout>
         </div>
      </ThemeContext.Provider>
   );
}

export default App;