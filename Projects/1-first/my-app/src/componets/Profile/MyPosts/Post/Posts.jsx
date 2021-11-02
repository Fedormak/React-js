import React from '@testing-library/react';
import stayle from './Post.module.css'

const Post = (props) => {
  return (
    <div className={stayle.item}>
      <img src='https://cdn.discordapp.com/attachments/768164977504157697/872160805146210374/Night_Room.png' alt='' />
      {props.message}
      <div>
        like-{props.likeCount} Dislike-{props.dislikeCount}
      </div>
    </div>

  );
}

export default Post