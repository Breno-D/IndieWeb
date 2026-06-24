import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import '../index.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Ambrosia from './Pages/Ambrosia/Ambrosia'
import Blog from './Pages/Blog/Blog';
import Jogos from './Pages/Jogos/Jogos';
import GameDevTutorial from './Pages/GameDevTutorial/GameDevTutorial';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ambrosia" element={<Ambrosia />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/game-dev" element={<GameDevTutorial />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
