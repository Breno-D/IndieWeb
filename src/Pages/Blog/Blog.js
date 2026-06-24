import '../index.css';
import './blog.css';
import Header from '../../Components/Header/Header.js'
import Navbar from '../../Components/Header/Navbar.js';
import Leftbar from '../../Components/LeftBar/Leftbar.js';
import RightBar from '../../Components/RightBar/RightBar.js';
import BlogPreview from "../../Components/Blog/BlogPreview.js";
import GameJamPreview from "../../Components/GameJam/GameJamPreview.js";
import LatestGameRelease from "../../Components/GameJam/LatestGameRelease.js";
import BlogPage from '../../Components/Blog/BlogPage.js';

import Footer from '../../Components/Footer/Footer.js';

function Blog() {
  return (
    <div className="mainContainer">
      <Header></Header>
      <Navbar></Navbar>
        <div className="mainContent">
            <BlogPage></BlogPage>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Blog;