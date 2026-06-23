import posts from "../../posts-blog";
import BlogPost from "./BlogPost";

export default function BlogPage() {
  return (
    <div className="blog-page">
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}