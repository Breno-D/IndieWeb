import '../index.css';
import Header from '../../Components/Header/Header.js'
import Navbar from '../../Components/Header/Navbar.js';
import Leftbar from '../../Components/LeftBar/Leftbar.js';
import RightBar from '../../Components/RightBar/RightBar.js';
import BlogPreview from "../../Components/Blog/BlogPreview.js";
import GameJamPreview from "../../Components/GameJam/GameJamPreview.js";
import LatestGameRelease from "../../Components/GameJam/LatestGameRelease.js";
import GameJamPage from '../../Components/GameJam/GameJamPage.js';

import Footer from '../../Components/Footer/Footer.js';

function Jogos() {
  return (
    <div className="mainContainer">
      <Header></Header>
      <Navbar></Navbar>
        <div className="mainContent">
            <Leftbar></Leftbar>
            <GameJamPage></GameJamPage>
            <RightBar></RightBar>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Jogos;