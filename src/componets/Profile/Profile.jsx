import React from '@testing-library/react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profileinfo from './Profileinfo/Profileinfo';
import Preloader from '../common/Preloader/Preloader';

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  
  return (
    <div>
      <Profileinfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
      <MyPostsContainer/>
    </div>
  );
}

export default Profile