import React from '@testing-library/react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPostsContainer store={props.store}/>
    </div>
  );
}

export default Profile