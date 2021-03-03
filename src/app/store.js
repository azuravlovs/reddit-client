import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../components/posts/posts.slice'



export default configureStore({
  reducer: {
    posts: postsReducer
  }
});
