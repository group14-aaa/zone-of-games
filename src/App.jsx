import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Context
import { ThemeContext } from "./context/ThemeContext";

// Components
import PageLayout from "./components/PageLayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from './pages/contact';
import Streams from "./pages/streams/";
import GamePage from "./pages/games/GamePage";
import TopRatedGames from "./pages/games/top";
import ViewStreams from "./pages/streams/ViewStreams";
import ErrorPage from "./pages/404";

// Page path
const routes = [
   { path: "/", component: Home },
   { path: "/about", component: About },
   // { path: '/Contact', component: Contact },
   { path: "/streams/", component: Streams },
   { path: "/games/top", component: TopRatedGames },
   { path: "/games/:gId", component: GamePage },
   { path: "/streams/:gameId", component: ViewStreams },
   { path: "*", component: ErrorPage },
];

function App() {
   const [theme, setTheme] = useState("dark");

   // Update document root class when theme changes
   useEffect(() => {
      setTheme(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");
      document.documentElement.className = theme;
   }, [theme]);

   return (
      <Router>
         <Routes>
            {routes.map(({ path, component: Component }, index) => (
               <Route
                  key={path}
                  path={path}
                  element={
                     <ThemeContext.Provider value={{ theme, setTheme }}>
                        <div className={`${theme} ${theme === "dark" ? "bg-background" : "bg-background"} min-h-[100vh]`}>
                           <PageLayout>
                              {index === 0 ? (
                                 <Suspense
                                    fallback={
                                       <div className="flex items-center justify-center h-screen">
                                          <div role="status">
                                             <span className="text-text">Loading....</span>
                                          </div>
                                       </div>
                                    }
                                 >
                                    <Component />
                                 </Suspense>
                              ) : (
                                 <div key={path} className="h-full">
                                    <Suspense
                                       fallback={
                                          <div className="flex items-center justify-center h-screen">
                                             <div role="status">
                                                <span className="text-text">Loading....</span>
                                             </div>
                                          </div>
                                       }
                                    >
                                       <Component />
                                    </Suspense>
                                 </div>
                              )}
                           </PageLayout>
                        </div>
                     </ThemeContext.Provider>
                  }
               />
            ))}
         </Routes>
      </Router>
   );
}
export default App;
