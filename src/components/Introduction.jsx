import React from "react";

export const Introduction = () => {
    return (
        <div className="p-8 flex flex-col lg:flex-row lg:p-16 place-content-between">
            <div className="text-left lg:mr-16">
                <p className="mb-8 text-dark-purple dark:text-dark-mode-name">————— Almila Su</p>
                <h1 className="font-bold text-black-heading dark:text-bluish-gray lg:text-6xl">Creative thinker</h1>
                <h1 className="font-bold text-black-heading dark:text-bluish-gray lg:text-6xl">Minimalism lover</h1>
                <p className="mt-8 text-gray text-wrap dark:text-white lg:max-w-lg">Hi, I’m Almila. I’m a full-stack developer. If you are looking for a Developer to craft solid and scalable frontend products with great user experiences, let’s shake hands.</p>
                <nav className="flex items-center space-x-4 mt-8">
                    <a href="#" className={'text-white bg-navy-blue px-4 py-2 border border-navy-blue rounded-md dark:text-black-heading dark:bg-dark-mode-hire'}>Hire me</a>
                    <a href="#" className={'text-navy-blue px-4 py-2 border border-navy-blue rounded-md dark:text-dark-mode-hire dark:border-dark-mode-hire dark:bg-dark-gray-button'}>Github</a>
                    <a href="#" className={'text-navy-blue px-4 py-2 border border-navy-blue rounded-md dark:text-dark-mode-hire dark:border-dark-mode-hire dark:bg-dark-gray-button'}>LinkedIn</a>
                </nav>
            </div>
            <img className="rounded-2xl mt-8 lg:mt-0" src="../public/image1.jpg" />
        </div>
    )
}