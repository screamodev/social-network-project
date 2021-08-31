import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // props.dispatch(onPostChangeActionCreator(text));
  };

  return (
    <>
      <div>My posts</div>
      <div>
        new Posts
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          ></textarea>
        </div>
        <button onClick={onAddPost}>Add post</button>
        <button>Remove</button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </>
  );
};

export default MyPosts;
