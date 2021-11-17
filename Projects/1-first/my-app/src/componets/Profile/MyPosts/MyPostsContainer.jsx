import React from 'react';
import StoreContext from '../../../StoreContext';
import { addPostActionCreate, updateNewPostTextActionCreate } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().profilePage

        let addPost = () => {
          store.dispatch(addPostActionCreate())
        }

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreate(text)
          store.dispatch(action)
        }
        return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
            posts={state.posts}
            newPostText={state.newPostText} />
      }
      }</StoreContext.Consumer>
  )
}

export default MyPostsContainer