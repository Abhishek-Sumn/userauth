'use client'
import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../redux/postSlice";
import AddPost from './AddPost'

const Blog = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article key={post} className="border border-blue-100 m-4">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  ));

  return (
    <div>
      <div>Blog</div>
      {renderedPosts}
      <AddPost/>
    </div>
  );
};

export default Blog;
