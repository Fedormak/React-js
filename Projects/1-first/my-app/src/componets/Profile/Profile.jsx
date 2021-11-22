import React from '@testing-library/react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = () => {
  return (
    <div>
      <Profileinfo />
      <MyPostsContainer/>
    </div>
  );
}

export default Profile