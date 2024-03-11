import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add("dark");
        } else {
            body.classList.remove("dark");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        console.log('Toggling dark mode');
        setDarkMode(!darkMode);
    };

    return [darkMode, toggleDarkMode];
}
