import './App.css';
import Header from './Components/Header/Header.js'
import Navbar from './Components/Header/Navbar.js';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  return (
    <div class="mainContainer">
      <Header></Header>
      <Navbar></Navbar>
        <div class="mainContent">
            <div class="left-content">
              <div class="box img-box">
                <img class="img-highlight" src="https://picsum.photos/id/237/200/300"></img>
              </div>
              <div class="box">
                <h4 class="left-about-title">Oláá</h4>
                <p class="left-about-paragraph">Meu nome é breno e este é o meu cantinho para guardar todas as minhas coisas, meu doces, meus jogos e as game jams que participo :D</p>
              </div>
              <div class="box">
                <h3>BOTÃO DO SITE</h3>
                <div class="site-button-container"><a href="https://zhongvie.neocities.org/"><img src="https://file.garden/Zq0xOX6Iv3i3b1te/Neocities/sylvieButton.gif" alt="zhongvie button" loading="lazy" /></a>
                <textarea>
                  <a href="https://zhongvie.neocities.org/"><img src="https://file.garden/Zq0xOX6Iv3i3b1te/Neocities/sylvieButton.gif" alt="zhongvie button" loading="lazy" /></a>
                </textarea></div>
              </div>
              <div class="box"></div>
            </div>
            <div class="middle-content"></div>
            <div class="right-content">
              <div class="calendar-div">
                <Calendar />
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

            </div>
        </div>
        <div class="footer"></div>
    </div>
  );
}

export default App;
