import './App.css';
import Header from './Components/Header/Header.js'
import Navbar from './Components/Header/Navbar.js';
import Leftbar from './Components/LeftBar/Leftbar.js';
import RightBar from './Components/RightBar/RightBar.js';


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
              </div>
              <div className='box mainContent-box'>
                <h3>Última Game Jam</h3>
              </div>
              <div className='box mainContent-box'>
                <h3>Blog</h3>
              </div>
              <div className='box mainContent-box'>
                <h3>Último Jogo Lançado</h3>
              </div>
              <div className='box mainContent-box'>
                <h3>Galeria de Comidinhas</h3>
              </div>
            </div>
            <RightBar></RightBar>
        </div>
        <div className="footer"></div>
    </div>
  );
}

export default App;
