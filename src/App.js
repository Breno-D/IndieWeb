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
                <p></p>
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
