import React from 'react';
import stayle from './MyPosts.module.css'
import Post from './Post/Posts';

const MyPosts = (props) => {

  let postsElement =
    props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} dislikeCount={p.dislikeCount} />)

  let newPostElement = React.createRef()

  let addPost = () => {
    debugger
    props.addPost()
  }

  let onPostChange = () => {
    debugger
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div className={stayle.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} 
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
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