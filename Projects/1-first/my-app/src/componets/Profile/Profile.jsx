import React from '@testing-library/react';
import MyPosts from './MyPosts/MyPosts';
import s from'./Profile.module.css'

const Profile = () =>{
    return (
        <div>
          <div>
            <img className={s.img} src='https://klike.net/uploads/posts/2021-04/1618815701_51.jpg' alt='' />
          </div>
          <div>
            ava + description
          </div>
          <MyPosts />
        </div>
        );
      }

export default Profile