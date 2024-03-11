import useLocalStorage from "./useLocalStorage";

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

    const toggleDarkMode = () => {
        console.log('Toggling dark mode');
        setDarkMode(!darkMode)
    };

    return [darkMode, toggleDarkMode];
}
