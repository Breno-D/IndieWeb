export default function BlogPost({ post }) {
  return (
    <article className="blog-post box">
      <h2>{post.title}</h2>
      <time>{post.date}</time>
      <p style={{ whiteSpace: "pre-line" }}>{post.content}</p>
    </article>
  );
}