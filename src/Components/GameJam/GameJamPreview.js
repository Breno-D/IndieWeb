import posts from "../../posts-gj";
import './GameJam.css';

export default function GameJamPreview() {
  const latest = posts[0];
  const itchsrc = `${posts[0].iframesrc}?linkback=true&border_width=2&bg_color=211832&fg_color=ffffff&link_color=F25912&border_color=F25912`
  return (
    <div className="gamejam-article">
      <h4>{latest.title}</h4>
      <img src={latest.cover} className="gamejam-banner"></img>
      <p>{latest.summary}</p>
      <p>Gênero: {latest.gamegender}</p>
      <a href="/jogos">Ler mais Sobre</a>
      <iframe className='game-iframe' frameborder="0" src={itchsrc} width="554" height="169"><a href={latest.iframe}>{latest.iframetitle}</a></iframe>
    </div>
  );
}