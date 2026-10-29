
import { useState } from "react";
import posts from "./posts.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || post.category === category)
  );

  return (
    <div className="container">
      <h1>My Blog</h1>

      <input
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>

      <div className="posts">
        {filteredPosts.length ? (
          filteredPosts.map((post) => (
            <div className="card" key={post.id}>
              <h2>{post.title}</h2>
              <small>{post.category}</small>
              <p>{post.description}</p>
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
