import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [apiResponse, setApiResponse] = useState({});

  const switchLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
    console.log('Language switched: ', language);
  };

  const updateApiResponse = (data) => {
    setApiResponse(data);
  };

  /* 
  const fetchData = async () => {
    try {
      const languageFile = await import(`../mocks/${language}.json`);
      const response = await axios.post('https://reqres.in/api/workintech', languageFile);

      updateApiResponse(response.data.content);
    } catch (error) {
      console.error(`Error posting language file for ${language} or fetching data:`, error);
    }
  };
 

  useEffect(() => {
    fetchData();
  }, [language]);
   */

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, apiResponse, updateApiResponse }}>
      {children}
    </LanguageContext.Provider>
  );
};