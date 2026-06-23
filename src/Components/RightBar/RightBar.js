import './RightBar.css';
import'../../Pages/index.css';
import Calendar from './Calendar.js';
import FactOfTheDay from './FactOfTheDay.js';
import Changelog from './Changelog.js';

import powered from './Images/poweredbycoffee.gif';
import freeinternet from './Images/internetfree.gif';
import candy from './Images/candy.gif';
import classicgaming from './Images/classicgaming.gif';
import emulate from './Images/emulate.gif';
import glinks from './Images/glinks.gif'
import linux from './Images/linux_powered.gif';
import piracy from './Images/piracy.gif';

function RightBar() {
  return (
    <div className="right-content">
        <div className="calendar-div box">
            <Calendar />
        </div>
        <div className="box buttons-box">
            <h3>Botões</h3>
            <div className="buttons-div">
                <a href="https://88x31.lol" target='blank'> 
                    <img src="https://88x31.lol/counter7.gif"
                    alt="88x31 - Visitor counter" width="88" height="31" />
                </a>
                <a href="https://demonicpedigree.com/freebies/index.php?page=buttons" target='blank'>
                    <img src={powered} alt='Powered by Coffe' width="88" height="31" />
                </a>
                <iframe src="//incr.easrng.net/badge?key=asuraid" style={{background:'url(//incr.easrng.net/bg.gif)', border:'none'}}  title="increment badge" width="88" height="31"></iframe>
                <a href='https://indieweb.org/' target='blank'><img src={freeinternet}></img></a>
                <a href='#AMBROSIA'><img src={candy}></img></a>
                <a href='https://breno-d.itch.io/' target='blank'><img src={glinks}></img></a>
                <a href='https://emulation.gametechwiki.com/index.php/ROM_%26_ISO_sites' target='blank'><img src={emulate}></img></a>
                <a href='https://zorin.com/os/download/' target='blank'><img src={linux}></img></a>
                <a href='https://www.classic-gaming.net/' target='blank'><img src={classicgaming}></img></a>
                <a href='https://emubrowser.com/' target='blank'><img src={piracy}></img></a>
            </div>
        </div>
        <div className="box highlight-art-box">
            <h3>Arte Recente</h3>
                <img src='https://picsum.photos/200/300?grayscale' className='highlight-art'></img>
        </div>
        <div className="box">
            <h3>Fato do Dia</h3>
                <FactOfTheDay></FactOfTheDay>
        </div>
        <div className="box">
            <Changelog></Changelog>
        </div>
    </div>
  );
}

export default RightBar;
