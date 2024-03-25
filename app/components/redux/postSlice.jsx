import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "First Blog", content: "Content 1" },
  { id: "2", title: "second Blog", content: "Content 2" }
];

const postSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    postAdded(state,action){
        state.push(action.payload)
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const {postAdded} = postSlice.actions

export default postSlice.reducer