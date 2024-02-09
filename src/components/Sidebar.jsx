//import fontstyles into react for nav icons
import { faHome, faInfoCircle, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { useContext, useState } from 'react';
import RawgGenreList from "./RawgGenreList";
import { ThemeContext } from '../context/ThemeContext';

// Import your logo image
import logoDark from '../../src/assets/images/logo-no-background.png';
import logoLight from '../../src/assets/images/logo-no-background.png';

const Sidebar = () => {
    const { theme } = useContext(ThemeContext);
    const [showGenres, setShowGenres] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

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
    <div className={`relative overflow-hidden ${isSidebarCollapsed ? 'w-32' : 'w-64'} transition-all duration-300 ease-in-out bg-${theme === 'dark' ? darkModeColors.background : 'gray-200'} text-${theme === 'dark' ? darkModeColors.text : 'gray-800'} ${theme === 'dark' ? 'shadow-pulse-orange' : ''} rounded-md flex flex-col ${isSidebarCollapsed ? '' : 'h-full'}`}>
        {/* Toggle Sidebar Button */}
        <button onClick={toggleSidebar} className="absolute top-4 right-4 text-gray-500 focus:outline-none">
            {isSidebarCollapsed ? '>' : '<'}
        </button>

        {/* Sidebar Content */}
        <div className={`flex flex-col rounded-md flex-grow`}>
            {/* Sidebar Header with Logo */}
            <div className={`py-4 px-6 ${theme === 'dark' ? 'bg-black' : 'bg-gray-300'} flex justify-between items-center`}>
                <img src={logo} alt="Logo" className="h-10" />
            </div>

            {/* Sidebar Navigation */}
            {!isSidebarCollapsed && (
                <nav className="flex-grow">
                    <ul className="p-4">
                        <li className="py-2">
                            <a href="/" className={`flex items-center hover:text-${theme === 'dark' ? 'gray-300' : 'gray-700'}`}>
                                <FontAwesomeIcon icon={faHome} className="mr-2" />
                                Home
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="/about" className={`flex items-center hover:text-${theme === 'dark' ? 'gray-300' : 'gray-700'}`}>
                                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                                About
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="/contact" className={`flex items-center hover:text-${theme === 'dark' ? 'gray-300' : 'gray-700'}`}>
                                <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
                                Contacts
                            </a>
                        </li>
                        {/* Game Genres Button (Displayed only when Sidebar is open) */}
                        <li className="py-2">
                            <button className={`w-full py-2 ${theme === 'dark' ? 'bg-black text-white shadow-orange' : 'bg-gray-300 text-gray-800 shadow-orange'} text-left rounded-md hover:text-${theme === 'dark' ? 'gray-300' : 'gray-700'}`}
                                    onClick={toggleGenres}
                                    style={{ padding: '0.5rem' }}>
                                Game Genres
                            </button>
                            {showGenres && (
                                <div className={`mt-2 overflow-y-auto ${theme === 'dark' ? 'bg-black text-white shadow-orange' : 'bg-gray-200 text-gray-800 shadow-orange'} rounded-md`}>
                                    <RawgGenreList />
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    </div>
);
}

export default Sidebar;