import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Context
import { ThemeContext } from "./context/ThemeContext";

// Components
import PageLayout from "./components/PageLayout";

// Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const GamePage = lazy(() => import('./pages/games/GamePage'));
const TopRatedGames = lazy(() => import('./pages/games/top'));
const Streams = lazy(() => import('./pages/streams'));
const ViewStreams = lazy(() => import('./pages/streams/ViewStreams'));
const ErrorPage = lazy(() => import('./pages/404'));

// Page path
const routes = [
   { path: "/", component: Home },
   { path: "/about", component: About },
   { path: "/Contact", component: Contact },
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
