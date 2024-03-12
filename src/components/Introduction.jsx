import React from "react";
import github from '../assets/github.svg';
import LinkedIn from '../assets/LinkedIn.svg';
import githubDark from '../assets/githubDark.svg';
import LinkedInDark from '../assets/LinkedInDark.svg';
import { useDarkMode } from "../contexts/DarkModeContext";


export const Introduction = () => {

    const { darkMode } = useDarkMode();

    const footer = document.getElementById('footer');

    return (
        <div className="p-8 flex flex-col lg:flex-row gap-x-8 lg:gap-x-16 lg:py-16 lg:px-32 place-content-between">
            <div className="text-left">
                <p className="mb-8 text-dark-purple dark:text-dark-mode-name">————— Almila Su</p>
                <h1 className="font-bold text-black-heading dark:text-bluish-gray lg:text-6xl">Creative thinker</h1>
                <h1 className="font-bold text-black-heading dark:text-bluish-gray lg:text-6xl">Minimalism lover</h1>
                <p className="mt-8 text-gray text-wrap dark:text-white lg:max-w-lg">Hi, I’m Almila. I’m a full-stack developer. If you are looking for a Developer to craft solid and scalable frontend products with great user experiences, let’s shake hands.</p>
                <nav className="flex flex-wrap items-center space-x-4 mt-8">
                    <a href="#" onClick={() => {footer.scrollIntoView({behavior: "smooth"})}} className={'text-white bg-navy-blue pl-10 pt-4 h-14 w-24 lg:w-36 border border-navy-blue rounded-md dark:text-black-heading dark:bg-dark-mode-hire'}>Hire me</a>
                    <a href="#" className={'text-navy-blue pl-6 pt-4 h-14 w-24 lg:w-36 border border-navy-blue rounded-md dark:text-dark-mode-hire dark:border-dark-mode-hire dark:bg-dark-gray-button'}>{darkMode ? (<img src={githubDark} className="inline mr-2"/>) : (<img src={github} className="inline mr-2"/>)}Github</a>
                    <a href="#" className={'text-navy-blue pl-6 pt-4 h-14 w-24 lg:w-36 border border-navy-blue rounded-md dark:text-dark-mode-hire dark:border-dark-mode-hire dark:bg-dark-gray-button'}>{darkMode ? (<img src={LinkedInDark} className="inline mr-2"/>) : (<img src={LinkedIn} className="inline mr-2"/>)}LinkedIn</a>
                </nav>
            </div>
            <img className="rounded-2xl mt-8 lg:mt-0" src="../image1.jpg" />
        </div>
    )
}