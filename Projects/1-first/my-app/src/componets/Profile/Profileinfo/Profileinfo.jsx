import React from '@testing-library/react';
import s from'./Profileinfo.module.css'

const Profileinfo = () =>{
    return (
        <div>
          <div>
            <img className={s.img} src='https://klike.net/uploads/posts/2021-04/1618815701_51.jpg' alt='' />
          </div>
          <div className={s.descriptionBlock}>
            ava + description
          </div>

        </div>
        );
      }

export default Profileinfo