export default function BlogPost({ post }) {
  return (
    <article className="blog-post box">
      <h2>{post.title}</h2>
      <time>{post.date}</time>
      {/* <p style={{ whiteSpace: "pre-line" }}>{post.content}</p> */}
        {post.content.map((block, index) => {
        if (block.type === "text") {
          return <p key={index}>{block.value}</p>;
        }
        if (block.type === "image") {
          return <img key={index} src={block.src} alt={block.alt} className="blog-inline-img" />;
        }
        return null;
      })}
    </article>
  );
}