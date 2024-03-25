import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "../redux/postSlice";

const AddPost = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onSavePostClicked = () => {
   
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
    }
    setTitle("");
    setContent("");
  };

  const onContentChanged = (e) => {
    setContent(e.target.value);
  };
  const onTitletChanged = (e) => {
    setTitle(e.target.value);
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form action="">
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          value={title}
          onChange={onTitletChanged}
          className="border border-blue-800"
        />
        <label htmlFor="postContent">Content</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={onContentChanged}
          className="border border-blue-800"
        />
        <button 
        type="button"
        onClick={onSavePostClicked}>Save Post</button>
      </form>
    </section>
  );
}

export default AddPost;
