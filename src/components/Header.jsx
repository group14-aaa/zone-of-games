import React, { useContext, useEffect, useState } from 'react';

// Components
import { ThemeContext } from '../context/ThemeContext';

// Images
import logo from './../assets/images/logo-no-background.png'

// Icons
import { IoSearchSharp } from "react-icons/io5";
import { MdLightMode, MdDarkMode } from "react-icons/md";


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        console.log(theme);
    }, [])

    return (
        <div className='flex items-center p-3'>
            <img src={logo} width={120} height={60} alt='Logo image' />
            <div className='flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center'>
                <IoSearchSharp />
                <input type='text' placeholder='Search Games...' className='px-2 bg-transparent outline-none w-full' />
            </div>
            <div>
                {theme === 'light' ?
                    <MdDarkMode
                        className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
                        onClick={() => setTheme('dark')} /> :
                    <MdLightMode
                        className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
                        onClick={() => setTheme('light')} />}
            </div>
        </div>
    );
}

export default Header;
