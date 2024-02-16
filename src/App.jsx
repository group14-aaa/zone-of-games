import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import '@fontsource/montserrat';

// Components
import PageLayout from "./components/PageLayout";
import Loading from "./components/Loading";

// Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const TopRatedGames = lazy(() => import('./pages/games/top'));
const DisplayGameInfo = lazy(() => import('./pages/games/DisplayGameInfo'));

const TopGamesStreaming = lazy(() => import(
   './pages/streams'
));
const DisplayMostViewedStreams = lazy(() => import(
   './pages/streams/DisplayMostViewedStreams'
));
const DisplayStreamsByGame = lazy(() => import(
   './pages/streams/DisplayStreamsByGame'
));
const ErrorPage = lazy(() => import('./pages/404'));

// Page path
const routes = [
   { path: "/", component: Home },
   { path: "/about", component: About },
   { path: "/Contact", component: Contact },
   { path: "/games/top", component: TopRatedGames },
   { path: "/games/:gId", component: DisplayGameInfo },
   { path: "/streams/", component: TopGamesStreaming },
   { path: "/streams/most-viewed", component: DisplayMostViewedStreams },
   { path: "/streams/:gameId", component: DisplayStreamsByGame },


   { path: "*", component: ErrorPage },
];

function App() {
   const [theme, setTheme] = useState(() =>
      localStorage.getItem("theme") || "dark");

   const getThemeClassName = () =>
      `${theme} ${theme === "dark" ? "bg-background" : "bg-background"}`;

   // Update document root class when theme changes
   useEffect(() => {
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
                        <div className={getThemeClassName()}>
                           <PageLayout>
                              <Suspense fallback={<Loading />} >
                                 <Component />
                              </Suspense>
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
