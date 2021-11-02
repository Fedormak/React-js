import React from '@testing-library/react';
import stayle from './MyPosts.module.css'
import Post from './Post/Posts';

const MyPosts = () => {

<<<<<<< HEAD
  let postsElement = 
      props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} dislikeCount={p.dislikeCount}/>)
=======
  let posts = [
    { message: 'Hi, how are you?', likeCount: 12},
    { message: "It's my first post", likeCount: 16},
    { message: "it-world", likeCount: 110},
    { message: "It's so funny", likeCount: 1},
    { message: "It's my friend", likeCount: 10},
]

  let postsElement = posts
  .map ( p => <Post message={p.message} like={p.likeCount} />)
>>>>>>> parent of a7c64f5 (lessen 30)

  return (
    <div className={stayle.postsBlock}>
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
      <div className={stayle.posts}>
          { postsElement }
      </div>

    </div>
  );
}

export default MyPosts