import { useParams, useNavigate } from 'react-router-dom';
import posts from "../../posts-blog";
import BlogPost from "./BlogPost";
import "../../Pages/index.css"

const POSTS_PER_PAGE = 5;

export default function BlogPage() {
  const { page } = useParams();
  const navigate = useNavigate();

  const currentPage = parseInt(page) || 1;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = posts.slice(start, start + POSTS_PER_PAGE);

  const goToPage = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };
  return (
    <div className="blog-page">
      {visiblePosts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}

      <div className="blog-pagination">
        {currentPage > 1 && (
          <button className='pagination-buttons' onClick={() => goToPage(currentPage === 2 ? "/blog" : `/blog/${currentPage - 1}`)}>
            ← Anterior
          </button>
        )}
        {currentPage < totalPages && (
          <button className='pagination-buttons' onClick={() => goToPage(`/blog/${currentPage + 1}`)}>
            Próxima →
          </button>
        )}
      </div>
    </div>
  );
}