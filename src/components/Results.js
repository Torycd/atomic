import { useContext } from "react";
import { PostContext } from "../App";

function Results({ posts }) {
  const { posts } = useContext(PostContext);
  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
