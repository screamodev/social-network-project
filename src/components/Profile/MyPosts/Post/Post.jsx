import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://citaty.info/files/portraits/67069.jpg" />
      {props.message}
      <div>
        <span>Like {props.likeCount}</span>
      </div>
    </div>
  )
}

export default Post;