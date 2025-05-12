import React from 'react';
import Header from './components/Header';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';

function ThemedApp() {
  const { theme } = useTheme();

  const backgroundStyle = {
    backgroundImage:
      theme === 'dark' ? "url('/public/Background.png')" : "url('/public/Background_light.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  }

  return (
    <div style={backgroundStyle}>
      <Header />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;
