import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreate, updateNewPostTextActionCreate } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';

// const MyPostsContainer = () => {

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().profilePage

//         let addPost = () => {

//         }

//         let onPostChange = (text) => {

//         }
//         return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
//           posts={state.posts}
//           newPostText={state.newPostText} />
//       }
//       }</StoreContext.Consumer>
//   )
// }

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreate())
    },
    onPostChange: (text) => {
      let action = updateNewPostTextActionCreate(text)
      dispatch(action)
    }
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer