import './App.css';
import Header from './Components/Header/Header.js'
import Navbar from './Components/Header/Navbar.js';

function App() {
  return (
    <div class="mainContainer">
      <Header></Header>
      <Navbar></Navbar>
        <div class="mainContent">
            <div class="left-content"></div>
            <div class="middle-content"></div>
            <div class="right-content"></div>
        </div>
        <div class="footer"></div>
    </div>
  );
}

export default App;
