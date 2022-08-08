import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ThemeContext from './context/ThemeContext';
import colors from './themes';
import Navbar from './components/navbar/Navbar';
import ThemeSwitch from './components/themeSwitch/ThemeSwitch';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" style={colors[theme]}>
        <header>
          <Navbar />
        </header>
        <Routes></Routes>
        <ThemeSwitch {...{theme, setTheme}}/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
