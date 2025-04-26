import React, { createContext, useContext, useState, useEffect } from "react";
// Creating the context
const ThemeContext = createContext();

// Creating the provider Context 
export function ThemeSender({ prop }) {
    const [theme, setTheme] = useState('light'); //Default theme state 

    // Changing between themes
    const toggleTheme = () => {
        setTheme((prev) => (prev === ' light' ? 'dark' : 'light'));
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return (
        <>
            <ThemeCOntext.Provider value={{theme,toggleTheme}} >
                {prop}
            </ThemeCOntext.Provider>
        </>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}