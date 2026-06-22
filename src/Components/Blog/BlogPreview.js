import posts from "../../posts-blog";

export default function BlogPreview() {
  const latest = posts[0];
  return (
    <div className="blog-preview">
      <h4>{latest.title}</h4>
      <p>{latest.date}</p>
      <p>{latest.summary}</p>
      <a href="#blog">Ver todos os posts →</a>
    </div>
  );
}