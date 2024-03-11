import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [apiResponse, setApiResponse] = useState({});

  const switchLanguage = () => {
    console.log('Language switched: ', language);
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'tr' : 'en'));
  };

  const updateApiResponse = (response) => {
    setApiResponse(response);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, apiResponse, updateApiResponse }}>
      {children}
    </LanguageContext.Provider>
  );
};