import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/index";

import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let addNewPost = (formData) => {
    props.addPost(formData.newPostText);
    console.log(formData);
  };

  return (
    <div>
      <div>My posts</div>
      <div>
        new Posts
        <PostFormRedux onSubmit={addNewPost} />
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          placeholder="Whats up?"
          name="newPostText"
          validate={[required, maxLength10]}
        />
      </div>
      <button>Add post</button>
      {/* <button>Remove</button> */}
    </form>
  );
};

const PostFormRedux = reduxForm({
  form: "post",
})(PostForm);

export default MyPosts;
