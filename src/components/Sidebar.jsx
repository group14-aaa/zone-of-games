import { useContext, useState } from 'react';
import RawgGenreList from "./RawgGenreList";
import { ThemeContext } from '../context/ThemeContext';

// Import your logo image
import logoDark from '../../src/assets/images/logo-no-background.png';
import logoLight from '../../src/assets/images/logo-no-background.png';

const Sidebar = () => {
    const { theme } = useContext(ThemeContext);
    const [showGenres, setShowGenres] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleGenres = () => {
        setShowGenres(!showGenres);
    };

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    // Choose the appropriate logo based on the theme
    const logo = theme === 'dark' ? logoDark : logoLight;

    // Define colors for dark mode from CSS variables
    const darkModeColors = {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)',
        success: 'var(--color-success)',
        info: 'var(--color-info)',
        warn: 'var(--color-warn)',
        error: 'var(--color-error)',
        background: 'var(--color-background)',
    };

    return (
        <div className={`relative overflow-hidden ${isSidebarCollapsed ? 'w-32' : 'w-64'} transition-all duration-300 ease-in-out bg-${theme === 'dark' ? darkModeColors.background : 'gray-200'} text-${theme === 'dark' ? darkModeColors.text : 'gray-800'} ${theme === 'dark' ? 'shadow-pulse-orange' : ''}`}>
            {/* Toggle Sidebar Button */}
            <button onClick={toggleSidebar} className="absolute top-4 right-4 text-gray-500 focus:outline-none">
                {isSidebarCollapsed ? '>' : '<'}
            </button>

            {/* Sidebar Content */}
            <div className="flex flex-col h-full">
                {/* Sidebar Header with Logo */}
                <div className={`py-4 px-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-300'} flex justify-between items-center`}>
                    <img src={logo} alt="Logo" className="h-10" />
                </div>

                {/* Sidebar Navigation */}
                {!isSidebarCollapsed && (
                    <nav className="flex-grow">
                        <ul className="p-4">
                            <li className="py-2">
                                <a href="/" className={`hover:text-${theme === 'dark' ? 'gray-300' : 'gray-700'}`}>Home</a>
                            </li>
                            <li className="py-2">
                                <a href="/about" className={`hover:text-${theme === 'dark' ? 'gray-300' : 'gray-700'}`}>About</a>
                            </li>
                            <li className="py-2">
                                <a href="/contact" className={`hover:text-${theme === 'dark' ? 'gray-300' : 'gray-700'}`}>Contacts</a>
                            </li>
                        </ul>
                    </nav>
                )}

                {/* Rawg Genres Button */}
                {!isSidebarCollapsed && (
                    <div className="p-4">
                        <button className={`w-full py-2 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-300 text-gray-800'} text-left rounded-md hover:text-${theme === 'dark' ? 'gray-300' : 'gray-700'}`}
                                onClick={toggleGenres}>
                            Game Genres
                        </button>
                        {showGenres && (
                            <div className={`mt-2 max-h-40 overflow-y-auto ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                <RawgGenreList />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sidebar;