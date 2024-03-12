import { createContext, useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import axios from 'axios';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('lang', 'en');
  const [apiResponse, setApiResponse] = useLocalStorage('res', {});

  const switchLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
    console.log('Language switched: ', language);
  };

  const updateApiResponse = (data) => {
    setApiResponse(data);
  };

  
  const fetchData = async () => {
    try {
      const languageFile = await import(`../mocks/${language}.json`);
      const response = await axios.post('https://reqres.in/api/workintech', languageFile);

      console.log('API Response:', response.data);
      updateApiResponse(response.data);
    } catch (error) {
      console.error(`Error posting language file for ${language} or fetching data:`, error);
    }
  };
 

  useEffect(() => {
    fetchData();
  }, [language]);

  console.log('apiResponse:', apiResponse);


  return (
    <LanguageContext.Provider value={{ language, switchLanguage, apiResponse, updateApiResponse }}>
      {children}
    </LanguageContext.Provider>
  );
};