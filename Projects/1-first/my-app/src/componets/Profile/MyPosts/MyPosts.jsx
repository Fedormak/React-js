import React from '@testing-library/react';
import stayle from './MyPosts.module.css'
import Post from './Post/Posts';

const MyPosts = (props) => {

  let postsElement = props.posts.map( p => <Post messages={p.message} likesCount={p.likeCount} />)

  return (
    <div className={stayle.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>y
        </div>
      </div>
      <div className={stayle.posts}>
          { postsElement }
      </div>

    </div>
  );
}

export default MyPosts