// src/components/Post.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      });
  }, [id]);

  return (
    <div>
      <h1>Post</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
