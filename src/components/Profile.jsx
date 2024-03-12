import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const Profile = () => {
    
    const { apiResponse } = useLanguage();

    const apiProfile = apiResponse.profile;
    const info = apiProfile.basicInformation;
    const about = apiProfile.aboutMe;

    if (!apiResponse || Object.keys(apiResponse).length === 0) {
        // Handle loading state (e.g., show loading spinner)
        return <div>Loading...</div>;
      }

    return (
        <div className="px-8 text-left lg:px-32">
            <h2 className="font-bold text-black-heading dark:text-bluish-gray text-4xl mb-4">{apiProfile?.title}</h2>
            <div className="flex flex-col gap-x-4 lg:gap-x-8 lg:flex-row">
                <div className="pb-8 lg:pb-16">
                    <h3 className="text-dark-purple dark:text-dark-mode-name text-2xl font-medium">{info?.title}</h3>
                    <div className="flex flex-row place-content-between">
                        <div className="max-w-xs flex flex-col text-black-heading dark:text-white font-bold mr-4 lg:mr-8">
                            <p className="my-4">{info?.items[0].label}</p>
                            <p className="my-4">{info?.items[1].label}</p>
                            <p className="my-4">{info?.items[2].label}</p>
                            <p className="my-4">{info?.items[3].label}</p>
                        </div>
                        <div className="max-w-xs flex flex-col text-black-heading dark:text-white mr-4 lg:mr-8">
                            <p className="my-4">{info?.items[0].value}</p>
                            <p className="my-4">{info?.items[1].value}</p>
                            <p className="my-4">{info?.items[2].value}</p>
                            <p className="my-4">{info?.items[3].value}</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-lg pb-8 lg:pb-16">
                    <h3 className="text-dark-purple dark:text-dark-mode-name text-2xl mb-4 font-medium">{about?.title}</h3>
                    <p className="text-gray dark:text-white mb-4">{about?.paragraphs[0]}</p>
                    <p className="text-gray dark:text-white">{about?.paragraphs[1]}</p>
                </div>
            </div>
            <div className="h-[1px] bg-lilac mb-8 lg:mb-16"></div>
        </div>
    )
}