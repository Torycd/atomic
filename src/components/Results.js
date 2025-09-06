import { useContext } from "react";
import { PostContext } from "../hooks/PostContext";


function Results() {
  const { posts } = useContext(PostContext);
  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
