import { createContext, useContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import axios from 'axios';
import { toast } from 'react-toastify';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('language', 'en');
  const [apiResponse, setApiResponse] = useLocalStorage('whygodwhy', {});
  const [loading, setLoading] = useState(true);

  const updateApiResponse = (data) => {
    setApiResponse(data);
  };

  
  const fetchData = async () => {
    try {

      //const notif = toast.loading(apiResponse.notifications.pending);

      const languageFile = await import(`../mocks/${language}.json`);

      // await new Promise(resolve => setTimeout(resolve, 1000));

      const response = await axios.post('https://reqres.in/api/workintech', languageFile);

      console.log('API Response:', response.data);
      updateApiResponse(response.data);
      //toast.update(notif, { render: apiResponse.notifications.success, type: "success", isLoading: false, autoClose: 2000 });
    } catch (error) {
      console.error(`Error posting language file for ${language} or fetching data:`, error);
      //toast.update(notif, { render: apiResponse.notifications.error, type: "error", isLoading: false, autoClose: 2000 });
    } finally {
      setLoading(false);
    }
  };
 

  useEffect(() => {
    fetchData();
  }, [language]);

  console.log('apiResponse:', apiResponse);

  const switchLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  if (loading) {
    return <div>Loading...</div>
  }


  return (
    <LanguageContext.Provider value={{ language, switchLanguage, apiResponse, updateApiResponse }}>
      {children}
    </LanguageContext.Provider>
  );
};