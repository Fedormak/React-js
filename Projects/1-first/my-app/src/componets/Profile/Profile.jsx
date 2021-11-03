import React from '@testing-library/react';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </div>
  );
}

export default Profile