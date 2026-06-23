import latestgamerelease from "../../posts-gj/latestrelease.js";
import './GameJam.css';

export default function LatestGameRelease() {
  const latest = latestgamerelease;
  return (
    <div className="gamejam-article">
      <h4>{latest.title}</h4>
      <img src={latest.cover} className="gamejam-banner"></img>
      <p>{latest.summary}</p>
      <p>Gênero: {latest.gamegender}</p>
      <iframe className='game-iframe' frameborder="0" src="https://itch.io/embed/4443160?linkback=true&amp;border_width=2&amp;bg_color=211832&amp;fg_color=ffffff&amp;link_color=F25912&amp;border_color=F25912" width="554" height="169"><a href={latest.iframe}>{latest.iframetitle}</a></iframe>
    </div>
  );
}