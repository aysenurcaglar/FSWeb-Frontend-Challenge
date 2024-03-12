import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const Skills = () => {

    const { apiResponse } = useLanguage();

    const apiSkills = apiResponse.skills;

    return (
        <div id="skills" className="px-8 text-left lg:px-32 place-content-between">
            <h2 className="font-bold text-black-heading dark:text-bluish-gray text-4xl mb-4">{apiSkills?.title}</h2>
            <div className="flex flex-col gap-x-4 lg:gap-x-8 lg:flex-row">
                <div className="pb-8 lg:pb-16">
                    <h3 className="text-dark-purple dark:text-dark-mode-name text-2xl mb-4 font-medium">Javascript</h3>
                    <p className="text-gray dark:text-white">{apiSkills?.items[0].description}</p>
                </div>
                <div className="pb-8 lg:pb-16">
                    <h3 className="text-dark-purple dark:text-dark-mode-name text-2xl mb-4 font-medium">React.Js</h3>
                    <p className="text-gray dark:text-white">{apiSkills?.items[1].description}</p>
                </div>
                <div className="pb-8 lg:pb-16">
                    <h3 className="text-dark-purple dark:text-dark-mode-name text-2xl mb-4 font-medium">Node.Js</h3>
                    <p className="text-gray dark:text-white">{apiSkills?.items[2].description}</p>
                </div>
            </div>
            <div className="h-[1px] bg-lilac mb-8 lg:mb-16"></div>
        </div>
    )
}