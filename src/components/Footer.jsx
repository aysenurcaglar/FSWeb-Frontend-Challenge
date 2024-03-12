import React from "react";

export const Footer = () => {
    return (
        <footer id="footer" className="bg-gray-light dark:bg-dark-footer-bg w-full p-8 lg:py-16 lg:px-32">
            <h2 className="font-bold text-black-heading dark:text-bluish-gray text-left text-4xl max-w-md">Let’s work together on your next product.</h2>
            <div className="flex flex-col lg:flex-row pt-16 pb-8">
                <a className="text-mail-red dark:text-lilac text-left mb-16 lg:mb-0 mr-auto" href="mailto:example@example.com">👉 <span className="underline">example@example.com</span></a>
                <nav className="flex items-center space-x-4 lg:space-x-8 ml-auto">
                    <a href="#" className='text-black-heading dark:text-dark-mode-hire'>Personal Blog</a>
                    <a href="#" className='text-green dark:text-dark-mode-green'>Github</a>
                    <a href="#" className='text-linkedin-blue dark:dark-mode-linkedin'>LinkedIn</a>
                </nav>
            </div>
        </footer>
    )
}