import { useState } from 'react';
import './App.css'
import { Header } from './components/Header'
import { Introduction } from './components/Introduction';
import { Skills } from './components/Skills';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <div className={`App lg:px-16 dark:bg-dark-bg bg-white}`}>
      <Header />
      <Introduction />
      <Router>
        <Route>
          <Skills />
        </Route>
        <Profile />
        <Route>
          <Projects />
        </Route>
      </Router>
      <Footer />
    </div>
  )
}

export default App
