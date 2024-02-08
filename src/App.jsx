import React, { useState, useEffect } from 'react';

// Components
import PageLayout from './components/PageLayout';
import { getGamesByGenre } from './services/rawgApi';
import TopRatedGames from './components/GetTopRatedGames';

// Pages
import Home from './pages/Home';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');
  const [games, setGames] = useState([]);

  // Update document root class when theme changes
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // useEffect(() => {
  //   getGamesByGenre('action')
  //     .then((gamesData) => {
  //       setGames(gamesData);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching games:', error);
  //     });
  // }, []);

  //  // Log games data only once when the component mounts
  //  console.log('Games in App component:', games);




  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme === 'dark' ? 'bg-background' : 'bg-background'} h-[100vh]`}>
        <PageLayout>
          <Home />
        </PageLayout>
    <TopRatedGames />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
