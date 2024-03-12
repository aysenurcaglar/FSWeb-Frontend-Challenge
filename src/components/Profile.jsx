import React from "react";

export const Profile = () => {
    return (
        <div className="px-8 text-left lg:px-16">
            <h2 className="font-bold text-black-heading dark:text-bluish-gray text-4xl mb-4">Profile</h2>
            <div className="flex flex-col gap-x-4 lg:gap-x-8 lg:flex-row">
                <div className="pb-8 lg:pb-16">
                    <h3 className="text-dark-purple dark:text-dark-mode-name text-2xl mb-4 font-medium">Basic Information</h3>
                    <div className="flex flex-row place-content-between">
                        <div className="max-w-xs flex flex-col text-black-heading dark:text-white font-bold mr-4 lg:mr-8">
                            <p className="my-4">Date of Birth</p>
                            <p className="my-4">City of Residence</p>
                            <p className="my-4">Educational Background</p>
                            <p className="my-4">Preferred Role</p>
                        </div>
                        <div className="max-w-xs flex flex-col text-black-heading dark:text-white mr-4 lg:mr-8">
                            <p className="my-4">24.03.1996</p>
                            <p className="my-4">Ankara</p>
                            <p className="my-4">Hacettepe Unv. Biology Bachelor's degree, 2016</p>
                            <p className="my-4">Frontend, UI</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg pb-8 lg:pb-16">
                    <h3 className="text-dark-purple dark:text-dark-mode-name text-2xl mb-4 font-medium">About Me</h3>
                    <p className="text-gray dark:text-white mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                    <p className="text-gray dark:text-white">Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>
                </div>
            </div>
            <div className="h-[1px] bg-lilac mb-8 lg:mb-16"></div>
        </div>
    )
}