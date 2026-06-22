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
              <div className='box mainContent-box'></div>
              <div className='box mainContent-box'></div>
              <div className='box mainContent-box'></div>
              <div className='box mainContent-box'></div>
              <div className='box mainContent-box'></div>
              <div className='box mainContent-box'></div>
            </div>
            <RightBar></RightBar>
        </div>
        <div className="footer"></div>
    </div>
  );
}

export default App;
