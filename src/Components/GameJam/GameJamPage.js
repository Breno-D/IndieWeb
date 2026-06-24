import posts from "../../posts-gj";
import GameJamPost from "./GameJamPost";

export default function GameJamPage() {
  return (
    <div className="gamejam-page middle-content">
      {posts.map(post => (
        <GameJamPost key={post.id} post={post} />
      ))}
    </div>
  );
}