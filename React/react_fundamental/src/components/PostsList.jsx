import React from 'react'
import SinglePost from './SinglePost'

const PostsList = ({ posts, remove }) => {
  if (!posts) {
    return <div>No posts...</div>
  }
  return (
    <div>
      {posts.map((post) => (
        <SinglePost key={post.id} post={post} remove={remove} />
      ))}
    </div>
  )
}

export default PostsList
