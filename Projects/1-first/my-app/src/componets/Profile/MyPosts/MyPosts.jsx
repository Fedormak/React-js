import React from 'react';
import stayle from './MyPosts.module.css'
import Post from './Post/Posts';

const MyPosts = (props) => {

  let postsElement =
    props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} dislikeCount={p.dislikeCount} />)

  let newPostElement = React.createRef()

  let addPost = () => {
    // props.addPost
    props.dispatch({ type: 'ADD-POST' })
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.updateNewPostText
    let action = { type: 'APPDATE-NEW-POST-TEXT', newText: text}
    props.dispatch(action)
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