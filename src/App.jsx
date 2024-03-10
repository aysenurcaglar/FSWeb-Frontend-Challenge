import { useState } from 'react';
import './App.css'
import { Header } from './components/Header'
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();


  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}

export default App
