import React from '@testing-library/react';
import stayle from'./Profileinfo.module.css'

const Profileinfo = () =>{
    return (
        <div>
          <div>
            <img className={stayle.img} src='https://klike.net/uploads/posts/2021-04/1618815701_51.jpg' alt='' />
          </div>
          <div className={stayle.descriptionBlock}>
            ava + description
          </div>

        </div>
        );
      }

export default Profileinfo