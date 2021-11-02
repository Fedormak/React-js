import React from '@testing-library/react';
import stayle from './MyPosts.module.css'
import Post from './Post/Posts';

const MyPosts = (props) => {

  let postsElement = 
      props.posts.map( p => <Post message={p.message} likeCount={p.likeCount} dislikeCount={p.dislikeCount}/>)

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