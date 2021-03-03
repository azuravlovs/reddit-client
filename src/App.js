import React, { useEffect } from 'react'	

import { useDispatch, useSelector } from 'react-redux'		

import { fetchPosts, postsSelector } from './components/posts/posts.slice'		

const App = () => {

  const dispatch = useDispatch()		
  const { posts, loading} = useSelector(postsSelector)

  useEffect(() => {
    dispatch(fetchPosts('https://www.reddit.com/r/wow.json'))
  }, [dispatch])

  console.log(posts)

  return (
    <section>
      <h1>Posts</h1>
      {loading ? <p>loading...</p> : posts.map((post, index) => <li key={index}>{post.data.title}</li>)}
    </section>
  )
}

export default App