import React from "react";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useLanguage } from "../contexts/LanguageContext";

export const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const { switchLanguage, apiResponse } = useLanguage();

    const apiHeader = apiResponse?.header;

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className='flex flex-col justify-between py-4 px-8 lg:py-8 lg:px-32'>
            <div className='flex items-center space-x-2 ml-auto mb-8'>
                <div
                    className='relative w-10 h-5 flex items-center cursor-pointer transition-colors duration-300 rounded-full bg-toggle-purple dark:bg-toggle-gray'
                    onClick={toggleDarkMode}
                >
                    <div
                        className='absolute w-3 h-3 rounded-full transition-transform duration-300 bg-yellow'
                        style={{ transform: darkMode ? 'translateX(30%)' : 'translateX(200%)', }}
                    ></div>
                    {darkMode && (
                        <div className="absolute w-2.5 h-2.5 rounded-full bg-toggle-gray left-2"></div>
                    )}
                </div>

                <span className='dark:text-light-mode text-gray-dark font-medium tracking-wider'>
                    {darkMode ? apiHeader?.lightMode : apiHeader?.darkMode}
                </span>

                <span className="text-gray-dark">|</span>

                <a href="#" onClick={switchLanguage}>
                <span className='dark:text-lilac text-toggle-purple font-medium tracking-wider'>{apiHeader.language}</span>
                </a>
            </div>

            <div className='flex items-center'>
                <div
                    className='h-10 w-10 rounded-full flex items-center justify-center bg-logo-lilac dark:bg-toggle-purple mr-auto'
                >
                    <span className='dark:text-dark-logo-font text-logo-purple transform rotate-45'>A</span>
                </div>
                <nav className="flex items-center space-x-4 lg:space-x-16 ml-auto">
                    <a href="#" onClick={() => scrollToSection('skills')} className='text-gray-dark'>{apiHeader?.skills}</a>
                    <a href="#" onClick={() => scrollToSection('projects')} className='text-gray'>{apiHeader?.projects}</a>
                    <a href="#" onClick={() => scrollToSection('footer')} className='text-navy-blue px-4 py-2 border border-navy-blue rounded-md dark:bg-white'>{apiHeader?.hireMe}</a>
                </nav>
            </div>
        </header>
    )
}