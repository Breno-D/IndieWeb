import './ambrosia.css'
import '../index.css'
import { Link } from 'react-router-dom';


import AmbrosiaPage from '../../Components/Ambrosia/AmbrosiaPage.js'
import Footer from '../../Components/Footer/Footer.js';

function Ambrosia() {
  return (
    <div className="mainContainerAmbrosia">
      <img className='img-headerAmbrosia' src='https://picsum.photos/200/300'></img>
        <div className="mainContentAmbrosia">
            <div className="middlecontentambrosia">
                <AmbrosiaPage></AmbrosiaPage>
                <Link to='/'><button className='pagination-buttons'>Voltar ao Site</button></Link>
            </div>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Ambrosia;