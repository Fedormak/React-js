import React from '@testing-library/react';
import s from './MyPosts.module.css'
import Post from './Post/Posts';

const MyPosts = () => {

  let posts = [
    { massage: 'Hi, how are you?', likeCount: 12},
    { massage: "It's my first post", likeCount: 16},
    { massage: "it-world", likeCount: 110},
    { massage: "It's so funny", likeCount: 1},
    { massage: "It's my friend", likeCount: 10},
]

  let postsElement = posts
  .map ( p => <Post message={p.massage} like={p.likeCount} />)

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
          { postsElement }
      </div>

    </div>
  );
}

export default MyPosts