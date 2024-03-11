import React from "react"

export const Header = ({ darkMode, toggleDarkMode }) => {
    return (
        <header className={`flex ${darkMode ? 'bg-dark-bg' : 'bg-white'} p-8`} >
        <div className={`flex items-center space-x-2`}>
      <div
        className={`relative w-10 h-5 flex items-center cursor-pointer transition-colors duration-300 rounded-full ${
          darkMode ? 'bg-toggle-gray' : 'bg-toggle-purple'
        }`}
        onClick={toggleDarkMode}
      >
        <div
          className={`absolute w-3 h-3 rounded-full transition-transform duration-300 bg-yellow`}
          style={{ transform: darkMode ? 'translateX(30%)' : 'translateX(200%)', }}
        ></div>
        {darkMode && (
          <div className="absolute w-2.5 h-2.5 rounded-full bg-toggle-gray left-2 transition-opacity duration-400 ease-in"></div>
        )}
      </div>
      <span className={`${darkMode ? 'text-light-mode' : 'text-gray-dark'}`}>
        {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
      </span>
    </div>
        </header>
    )
}