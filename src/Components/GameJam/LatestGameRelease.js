import latestgamerelease from "../../posts-gj/latestrelease.js";
import downloadsteam from "../../posts-gj/Images/downloadsteam.png"
import './GameJam.css';

export default function LatestGameRelease() {
  const latest = latestgamerelease;
  return (
    <div className="gamejam-article">
      <h4>{latest.title}</h4>
      <img src={latest.cover} className="gamejam-banner latest-banner"></img>
      <p style={{ whiteSpace: "pre-line" }}>{latest.content}</p>
      <p>Gênero: {latest.gamegender}</p>
      <a href={latest.iframe} target="blank"><img className="downloadbutton" src={downloadsteam}></img></a>
    </div>
  );
}