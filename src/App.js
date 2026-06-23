import './App.css';
import Header from './Components/Header/Header.js'
import Navbar from './Components/Header/Navbar.js';
import Leftbar from './Components/LeftBar/Leftbar.js';
import RightBar from './Components/RightBar/RightBar.js';
import BlogPreview from "./Components/Blog/BlogPreview";
import GameJamPreview from "./Components/GameJam/GameJamPreview.js";
import LatestGameRelease from "./Components/GameJam/LatestGameRelease.js";

function App() {
  return (
    <div className="mainContainer">
      <Header></Header>
      <Navbar></Navbar>
        <div className="mainContent">
            <Leftbar></Leftbar>
            <div className="middle-content">
              <div className='box mainContent-box'>
                <h3>Introdução do Site</h3>
                <p>Bem vindo ao meu cantinho</p>
                <p>Esse site surgiu majoritariamente após ser inspirado ao assistir <a className='text-link' href='https://www.youtube.com/watch?v=tkUgOT22F5s' target='blank'>A Web Revival: the Internet didn't die, you're just not on it</a>, esse vídeo me fez querer criar uma pagina tal qual as várias que eu visitava na minha infância perto dos anos 2000, e o rabbithole que eu cai de vários vídeos sobre IndieWeb depois só consolidaram essa minha vontade e me fizeram começar a produzir!</p>
                <p>Como eu não sou a pessoa mais letrada sobre design, sou apenas um programador, o design desse site é apenas um agregado ou uma homenagens de alguns dos sites que visitei na jornada de criar esse meu cantinho :D</p>
              </div>
              <div className='box mainContent-box'>
                <h3>Sobre Mim</h3>
                <div className='home-about'>
                  <img  src='https://picsum.photos/seed/picsum/200/300'></img>
                  <div className='home-about-text'>
                    <p>Eu sou um programador - programo de tudo, mas minha especialidade é desenvolvimento de jogos - e confeiteiro amador!</p>
                    <p>Para falar a verdade eu nunca criei uma página minha na antiga geocities, apesar de ter visitado vários sites da antiag internet na minha infância</p>
                    <p>Você pode ler mais sobre mim nesse <a href='MYLINK/ABOUT'>link</a></p>
                  </div>
                  
                </div>
              </div>
              <div className='box mainContent-box'>
                <h3>Última Game Jam</h3>
                  <GameJamPreview></GameJamPreview>
              </div>
              <div className='box mainContent-box'>
                <h3>Blog</h3>
                <BlogPreview></BlogPreview>
              </div>
              <div className='box mainContent-box'>
                <h3>Último Jogo Lançado</h3>
                <LatestGameRelease></LatestGameRelease>
              </div>
              <div className='box mainContent-box'>
                <h3>Galeria de Comidinhas</h3>
                <div className='food-carrousel'>
                  <img src='https://picsum.photos/200'></img>
                  <img src='https://picsum.photos/200'></img>
                  <img src='https://picsum.photos/200'></img>
                  <img src='https://picsum.photos/200'></img>
                  <img src='https://picsum.photos/200'></img>
                  <img src='https://picsum.photos/200'></img>
                </div>
              </div>
            </div>
            <RightBar></RightBar>
        </div>
        <div className="footer"></div>
    </div>
  );
}

export default App;