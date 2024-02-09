import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <footer className={`flex items-center justify-center bg-${theme === 'dark' ? 'slate-800' : 'slate-200'} text-${theme === 'dark' ? 'white' : 'gray-800'} border-t-2 border-accent p-3`}>
            <p className="text-sm font-bold">Made with ❤️ by Mihai, Chris, Anjal, and Adam.</p>
        </footer>
    );
}

export default Footer;