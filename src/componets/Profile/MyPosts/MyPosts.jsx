import React from 'react';
import stayle from './MyPosts.module.css'
import Post from './Post/Posts';
import AddNewPost from './addPost/AddNewPost';
import { reduxForm } from 'redux-form';

const MyPosts = (props) => {
  let postsElement =
    props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} dislikeCount={p.dislikeCount} />)

  let addNewPost = (value) => {
    props.addPost(value.newPost)
  }

  return (
    <div className={stayle.postsBlock}>
      <h3>My posts</h3>
      
      <AddNewPostForm onSubmit={addNewPost}/>
      
      <div className={stayle.posts}>
        {postsElement}
      </div>

    </div>
  );
}

const AddNewPostForm = reduxForm({
  form:'newPostForm'
})(AddNewPost)

export default MyPosts