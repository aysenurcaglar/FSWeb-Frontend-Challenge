import { useState } from 'react';
import './App.css'
import { Header } from './components/Header'
import { Skills } from './components/Skills';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();


  return (
    <div className={`App ${darkMode ? 'bg-dark-bg' : 'bg-white'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
