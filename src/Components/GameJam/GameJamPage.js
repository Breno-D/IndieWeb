import posts from "../../posts-gj";
import GameJamPost from "./GameJamPost";

export default function GameJamPage() {
  return (
    <div className="gamejam-page">
      {posts.map(post => (
        <GameJamPost key={post.id} post={post} />
      ))}
    </div>
  );
}