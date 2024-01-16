import React from 'react'
import css from "./css/Content.module.css";

function PostItem(props) {
  return (
    props.savedPosts.map(post => {
        return (
            <div className={css.SearchItem}>
                <h2>{post.title}</h2>
                <p>{post.name}</p>
                <img src={post.image}></img>
                <p>{post.description}</p>
            </div>
        )
    })
  )
}

export default PostItem