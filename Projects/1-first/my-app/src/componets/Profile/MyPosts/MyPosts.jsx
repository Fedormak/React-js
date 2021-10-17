import React from '@testing-library/react';
import s from './MyPosts.module.css'
import Post from './Post/Posts';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' like="200"/>
        <Post message="It's my first post" like="10"/>
      </div>

    </div>
  );
}

export default MyPosts