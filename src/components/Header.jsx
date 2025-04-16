import React, { useState } from 'react'
import darkLogo from '../assets/images/logo-dark-theme.svg'
import logo from '../assets/images/logo-light-theme.svg'
import moon from '../assets/images/icon-moon.svg'
import sun from '../assets/images/icon-sun.svg'



const Header = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === "dark"){
            setTheme("light"); 
            document.documentElement.classList.remove("dark");
        } else {
            setTheme("dark");
            document.documentElement.classList.add("dark")
        }
    }
  return (
    <header>
        <div className='flex justify-between items-center'>
            <a href=""><img src={theme === 'dark' ? darkLogo : logo} alt="logo" /></a>
            <button onClick={toggleTheme} className='bg-[#F2F2F7] dark:bg-[#2A2B37] w-[44px] h-[44px] flex items-center justify-center rounded-[8px]'><img src={theme === 'dark' ? sun : moon} alt="toggle theme" /></button>
        </div>
        <h1 className='my-[40px] md:my-[40px] lg:my-[48px] mx-auto text-center text-[40px] md:text-[64px] font-bold max-w-[510px] text-[#12131A] dark:text-[#F2F2F7]'>Analyze your text in real-time.</h1>
    </header>
  )
}

export default Header