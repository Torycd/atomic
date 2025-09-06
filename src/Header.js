import { useContext } from "react";
import Results from "./components/Results";
import SearchPosts from "./components/SearchPosts";
import { PostContext } from "./hooks/PostContext";

function Header() {
  const { posts, onClearPosts } = useContext(PostContext);
  //   console.log(x);
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
