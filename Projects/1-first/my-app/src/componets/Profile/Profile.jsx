import React from '@testing-library/react';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} addPost={props.addPost} updateNewpostText={props.updateNewpostText}/>
    </div>
  );
}

export default Profile