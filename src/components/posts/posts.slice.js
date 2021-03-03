import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  posts: [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: state => {
      state.loading = true
    },
    getPostsSuccess: (state, { payload }) => {
      state.posts = payload
      state.loading = false
      state.hasErrors = false
    },
    getPostsFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

export const { getPosts, getPostsSuccess, getPostsFailure } = postsSlice.actions

export const postsSelector = state => state.posts

export default postsSlice.reducer

export function fetchPosts(url) {
  return async dispatch => {
    dispatch(getPosts())

    try {
      const response = await fetch(url)
      const data = await response.json()
      const posts = data.data.children

      dispatch(getPostsSuccess(posts))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }
}