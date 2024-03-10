import useLocalStorage from "./useLocalStorage";

export const useDarkMode = () => {
const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

const toggleDarkMode = () => {
setDarkMode(!darkMode)
};

return [darkMode, toggleDarkMode];
}
