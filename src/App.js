import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import colors from './themes';
import Navbar from './components/navbar/Navbar';
import ThemeSwitch from './components/themeSwitch/ThemeSwitch';
import Home from './components/pages/home/Home';
import Error from './components/pages/error/Error';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className="App" style={{ ...colors[theme], ...colors.default }}>
      <header className="header">
        <Navbar />
      </header>
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer/>
      <ThemeSwitch {...{ theme, setTheme }} />
    </div>
  );
}

export default App;
