import React, { useState, useEffect } from 'react';

// Components
import PageLayout from './components/PageLayout';

// Pages
import Home from './pages/Home';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');

  // Update document root class when theme changes
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme === 'dark' ? 'bg-background' : 'bg-background'} h-[100vh]`}>
        <PageLayout>
          <Home />
        </PageLayout>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
