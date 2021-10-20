import React from '@testing-library/react';
import s from './MyPosts.module.css'
import Post from './Post/Posts';

const MyPosts = () => {

  let postsData = [
    { massage: 'Hi, how are you?', likeCount: 12},
    { massage: "It's my first post", likeCount: 11}
]

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message={postsData [0] .massage} like={postsData[0] .likeCount} />
        <Post message={postsData [1] .massage} like={postsData [1] .likeCount} />
      </div>

    </div>
  );
}

export default MyPosts