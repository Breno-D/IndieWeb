import './ambrosia.css'
import '../index.css'
import { Link } from 'react-router-dom';

import ambrosiaimg from './ambrosiacover.png';


import AmbrosiaPage from '../../Components/Ambrosia/AmbrosiaPage.js'
import Footer from '../../Components/Footer/Footer.js';

function Ambrosia() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <div className="mainContainerAmbrosia">
      <div className='headerambrosia'>
        <img className='img-headerAmbrosia' src={ambrosiaimg}></img>
      </div>
        <div className="mainContentAmbrosia">
            <div className="middlecontentambrosia">
                <AmbrosiaPage></AmbrosiaPage>
                <Link to='/' onClick={scrollToTop}><button className='ambrosiapagination-buttons'>Voltar ao Site</button></Link>
            </div>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Ambrosia;