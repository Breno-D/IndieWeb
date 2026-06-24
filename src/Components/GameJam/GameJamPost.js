import './GameJam.css'

export default function GameJamPost({ post }) {
  const iframesrc = `${post.iframesrc}?linkback=true&border_width=2&bg_color=211832&fg_color=ffffff&link_color=F25912&border_color=F25912`;
  return (
    <article className="gamejam-post box mainContent-box">
      <h2>{post.title}</h2>
      <img className='gamejam-banner' src={post.cover}></img>
      <time>{post.date}</time>
      <p style={{marginBottom: "0px"}}>Gênero: {post.gamegender}</p>
      <p style={{ whiteSpace: "pre-line" }}>{post.content}</p>
      <a href={post.videolink}>{post.videotext}</a>
      <iframe className='game-iframe' frameborder="0" src={iframesrc} width="554" height="169"><a href={post.iframe}>{post.iframetitle}</a></iframe>
    </article>
  );
}