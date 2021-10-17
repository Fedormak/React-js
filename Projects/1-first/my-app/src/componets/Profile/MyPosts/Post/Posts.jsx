import React from '@testing-library/react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://cdn.discordapp.com/attachments/768164977504157697/872160805146210374/Night_Room.png' alt='' />
      {props.message}
      <div>
        like- {props.like}
      </div>
    </div>

  );
}

export default Post