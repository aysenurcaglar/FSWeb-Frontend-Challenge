import React from "react";
import github from '../assets/github.svg';
import LinkedIn from '../assets/LinkedIn.svg';
import githubDark from '../assets/githubDark.svg';
import LinkedInDark from '../assets/LinkedInDark.svg';
import { useDarkMode } from "../contexts/DarkModeContext";
import { useLanguage } from "../contexts/LanguageContext";


export const Introduction = () => {

    const { darkMode } = useDarkMode();
    const {apiResponse} = useLanguage();

    const intro = apiResponse.introduction;

    const footer = document.getElementById('footer');

    return (
        <div className="p-8 flex flex-col lg:flex-row gap-x-8 lg:gap-x-16 lg:py-16 lg:px-32 place-content-between">
            <div className="text-left">
                <p className="mb-8 text-dark-purple dark:text-dark-mode-name">————— Almila Su</p>
                <h1 className="font-bold text-black-heading dark:text-bluish-gray lg:text-6xl">{intro && intro.role1}</h1>
                <h1 className="font-bold text-black-heading dark:text-bluish-gray lg:text-6xl">{intro && intro.role2}</h1>
                <p className="mt-8 text-gray text-wrap dark:text-white lg:max-w-lg">{intro && intro.description}</p>
                <nav className="flex flex-wrap place-content-evenly lg:place-content-between mt-8">
                    <a href="#" onClick={() => { footer.scrollIntoView({ behavior: "smooth" }) }} className={'text-white bg-navy-blue m-2 lg:m-0 h-14 pt-4 px-6 lg:pl-10 w-30 lg:w-36 border border-navy-blue rounded-md dark:text-black-heading dark:bg-dark-mode-hire'}>{intro && intro.hireMe}</a>
                    <a href="#" className={'text-navy-blue m-2 lg:m-0 pt-4 px-4 h-14 lg:pl-6 w-30 lg:w-36 border border-navy-blue rounded-md dark:text-dark-mode-hire dark:border-dark-mode-hire dark:bg-dark-gray-button'}>{darkMode ? (<img src={githubDark} className="inline mr-2" />) : (<img src={github} className="inline mr-2" />)}Github</a>
                    <a href="#" className={'text-navy-blue m-2 lg:m-0 pt-4 px-4 h-14 lg:pl-6 w-30 lg:w-36 border border-navy-blue rounded-md dark:text-dark-mode-hire dark:border-dark-mode-hire dark:bg-dark-gray-button'}>{darkMode ? (<img src={LinkedInDark} className="inline mr-2" />) : (<img src={LinkedIn} className="inline mr-2" />)}LinkedIn</a>
                </nav>
            </div>
            <img className="rounded-2xl mt-8 lg:mt-0" src="../image1.jpg" />
        </div>
    )
}