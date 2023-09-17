// src/components/Home.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
