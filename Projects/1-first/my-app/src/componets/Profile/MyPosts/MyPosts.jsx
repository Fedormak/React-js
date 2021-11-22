import React from 'react';
import stayle from './MyPosts.module.css'
import Post from './Post/Posts';

const MyPosts = (props) => {
  let postsElement =
    props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} dislikeCount={p.dislikeCount} />)

  let newPostText = props.newPostText

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = (event) => {
    let text = event.target.value;
    props.onPostChange(text)
  }

  return (
    <div className={stayle.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange }
            value={newPostText} placeholder='Enter your message'/>
        </div>
        <div>
          <button onClick={ onAddPost }>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={stayle.posts}>
        {postsElement}
      </div>

    </div>
  );
}

export default MyPosts