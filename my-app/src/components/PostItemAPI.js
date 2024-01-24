import React from 'react'
import css from './css/Content.module.css'

function PostItemAPI(props) {
  return (
    props.savedPosts.map(post => {
        return (
            <div className={css.SearchItem} key={post.id}>
                <h2>{post.tags}</h2>
                <p>Image by: {post.user}</p>
                <img src={post.userImageURL} alt={post.tags}></img>
            </div>
        )
    })
  )
}

export default PostItemAPI