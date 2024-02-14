import React from 'react'

const SinglePost = ({ post, remove }) => {
  return (
    <div className="post">
      <div className="post-content">
        <strong>
          {post.id} {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <button onClick={() => remove(post)}>Delete</button>
    </div>
  )
}

export default SinglePost
