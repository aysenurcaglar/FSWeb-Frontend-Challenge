import React, { useState } from 'react';

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex items-center space-x-2 ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div
        className={`relative w-10 h-5 flex items-center cursor-pointer transition-colors duration-300 rounded-full ${
          darkMode ? 'bg-toggle-gray' : 'bg-toggle-purple'
        }`}
        onClick={handleToggle}
      >
        <div
          className={`absolute w-3 h-3 rounded-full transition-transform duration-300 bg-yellow`}
          style={{ transform: darkMode ? 'translateX(30%)' : 'translateX(200%)', }}
        ></div>
      </div>
      <span className={`${darkMode ? 'text-light-mode' : 'text-gray-dark'}`}>
        {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
      </span>
    </div>
  );
};

export default ToggleButton;
