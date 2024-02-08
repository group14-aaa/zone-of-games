import { useContext, useState } from 'react';
import RawgGenreList from "./RawgGenreList";
import { ThemeContext } from '../context/ThemeContext';

// Import your logo image
import logoDark from '../../src/assets/images/logo-no-background.png';
import logoLight from '../../src/assets/images/logo-no-background.png';

const Sidebar = () => {
    const { theme } = useContext(ThemeContext);
    const [showGenres, setShowGenres] = useState(false);

    const toggleGenres = () => {
        setShowGenres(!showGenres);
    };

    // Choose the appropriate logo based on the theme
    const logo = theme === 'dark' ? logoDark : logoLight;

    return (
        <div className={`flex flex-col w-64 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}>
            {/* Sidebar Header with Logo */}
            <div className={`py-4 px-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-300'}`}>
                <img src={logo} alt="Logo" className="h-10" />
            </div>

            {/* Sidebar Navigation */}
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

            {/* Rawg Genres Button */}
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

            
        </div>
    );
}

export default Sidebar;