export default function GameJamPost({ post }) {
  return (
    <article className="gamejam-post">
      <h2>{post.title}</h2>
      <img src={post.cover}></img>
      <time>{post.date}</time>
      <p style={{ whiteSpace: "pre-line" }}>{post.content}</p>
    </article>
  );
}