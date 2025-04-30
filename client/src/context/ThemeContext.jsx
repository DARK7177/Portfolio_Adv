import React, { createContext, useContext, useState, useEffect } from "react";

// Creating the context
const ThemeContext = createContext();

// Creating the provider Context 
export function ThemeSender({ children }) {
    const [theme, setTheme] = useState('light'); 

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
