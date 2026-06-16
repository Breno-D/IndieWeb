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
              <div class="box"></div>
              <div class="box"></div>
              <div class="box"></div>
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
