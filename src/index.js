import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import "@fontsource/work-sans"; 
import "@fontsource-variable/fraunces/index.css";

// import '../index.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Ambrosia from './Pages/Ambrosia/Ambrosia'
import Blog from './Pages/Blog/Blog';
import Jogos from './Pages/Jogos/Jogos';
import GameDevTutorial from './Pages/GameDevTutorial/GameDevTutorial';
import reportWebVitals from './reportWebVitals';

// npm run deploy to update githubpages
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ambrosia" element={<Ambrosia />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:page" element={<Blog />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/jogos/:page" element={<Jogos />} />
        <Route path="/game-dev" element={<GameDevTutorial />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
reportWebVitals();
