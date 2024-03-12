import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const Projects = () => {

    const { apiResponse } = useLanguage();

    const apiProjects = apiResponse.projects;

    return (
        <div id="projects" className="px-8 text-left lg:px-32 place-content-between">
            <h2 className="font-bold text-black-heading dark:text-bluish-gray text-4xl mb-4">{apiProjects && apiProjects.title}</h2>
            <div className="flex flex-col gap-x-4 lg:gap-x-8 lg:flex-row place-content-between">
                <div className="pb-8 lg:pb-16">
                    <img src="./Rectangle-41.jpg" />
                    <h3 className="text-dark-purple dark:text-dark-mode-name text-2xl my-4 font-medium">Workintech</h3>
                    <p className="my-4 max-w-72 text-gray dark:text-white">{apiProjects && apiProjects.items[0].description}</p>
                    <div className="my-8">
                        <span className='mr-2 text-navy-blue px-4 py-2 border-2 border-navy-blue rounded-md dark:text-dark-logo-font dark:border-dark-logo-font dark:bg-dark-gray-button'>react</span>
                        <span className='mr-2 text-navy-blue px-4 py-2 border-2 border-navy-blue rounded-md dark:text-dark-logo-font dark:border-dark-logo-font dark:bg-dark-gray-button'>redux</span>
                        <span className='mr-2 text-navy-blue px-4 py-2 border-2 border-navy-blue rounded-md dark:text-dark-logo-font dark:border-dark-logo-font dark:bg-dark-gray-button'>axios</span>
                    </div>
                    <div className="flex place-content-between underline">
                        <a className="text-navy-blue dark:text-dark-mode-hire" href="https://github.com">Github</a>
                        <a className="text-navy-blue dark:text-dark-mode-hire" href="#">{apiProjects && apiProjects.viewSite}</a>
                    </div>
                </div>
                <div className="pb-8 lg:pb-16">
                    <img src="./Rectangle-42.jpg" />
                    <h3 className="text-dark-purple dark:text-dark-mode-name text-2xl my-4 font-medium">Random Jokes</h3>
                    <p className="mt-4 max-w-72 text-gray dark:text-white">{apiProjects && apiProjects.items[1].description}</p>
                    <div className="my-8">
                        <span className='mr-2 text-navy-blue px-4 py-2 border-2 border-navy-blue rounded-md dark:text-dark-logo-font dark:border-dark-logo-font dark:bg-dark-gray-button'>react</span>
                        <span className='mr-2 text-navy-blue px-4 py-2 border-2 border-navy-blue rounded-md dark:text-dark-logo-font dark:border-dark-logo-font dark:bg-dark-gray-button'>redux</span>
                        <span className='mr-2 text-navy-blue px-4 py-2 border-2 border-navy-blue rounded-md dark:text-dark-logo-font dark:border-dark-logo-font dark:bg-dark-gray-button'>axios</span>
                    </div>
                    <div className="flex place-content-between underline">
                        <a className="text-navy-blue dark:text-dark-mode-hire" href="https://github.com">Github</a>
                        <a className="text-navy-blue dark:text-dark-mode-hire" href="#">{apiProjects && apiProjects.viewSite}</a>
                    </div>
                </div>
                <div className="pb-8 lg:pb-16 ">
                    <img src="./Rectangle-43.jpg" />
                    <h3 className="text-dark-purple dark:text-dark-mode-name text-2xl my-4 font-medium">Journey</h3>
                    <p className="mt-4 max-w-72 text-gray dark:text-white">{apiProjects && apiProjects.items[2].description}</p>
                    <div className="my-8">
                        <span className='mr-2 text-navy-blue px-4 py-2 border-2 border-navy-blue rounded-md dark:text-dark-logo-font dark:border-dark-logo-font dark:bg-dark-gray-button'>react</span>
                        <span className='mr-2 text-navy-blue px-4 py-2 border-2 border-navy-blue rounded-md dark:text-dark-logo-font dark:border-dark-logo-font dark:bg-dark-gray-button'>redux</span>
                        <span className='mr-2 text-navy-blue px-4 py-2 border-2 border-navy-blue rounded-md dark:text-dark-logo-font dark:border-dark-logo-font dark:bg-dark-gray-button'>axios</span>
                    </div>
                    <div className="flex place-content-between underline">
                        <a className="text-navy-blue dark:text-dark-mode-hire" href="https://github.com">Github</a>
                        <a className="text-navy-blue dark:text-dark-mode-hire" href="#">{apiProjects && apiProjects.viewSite}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}