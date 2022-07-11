import React from '@testing-library/react';
import stayle from'./Profileinfo.module.css'
import ProfileStatus from './ProfileStatus';
import userPhoto from "../../../asetss/img/ava2.png"

const Profileinfo = (props) =>{
    return (
        <div>
          <div>
            <img className={stayle.img} src='https://img1.akspic.ru/previews/1/4/8/1/5/151841/151841-gory-islandiya-priroda-pejzazhi_gor-gornyj_relef-550x310.jpg' alt='' />
          </div>
          <div className={stayle.descriptionBlock}>
              <div>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt='' className={stayle.ava}/>
              </div>
            <div className={stayle.fullName}> Имя: {props.profile.fullName} </div>
            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            
            <h3>Я в интернете:</h3>

            <ul className={stayle.contacts}>
              <li><a href={props.profile.contacts.facebook}>я в facebook</a></li>
              <li><a href={props.profile.contacts.website}>мой website</a></li>
              <li><a href={props.profile.contacts.vk}>я в vk</a></li>
              <li><a href={props.profile.contacts.twitter}>мой twitter</a></li>
              <li><a href={props.profile.contacts.instagram}>мой instagram</a></li>
              <li><a href={props.profile.contacts.youtube}>мой канал в youtube</a></li>
              <li><a href={props.profile.contacts.github}>мой github</a></li>
              <li><a href={props.profile.contacts.mainLink}>моя mainLink</a></li>
            </ul>
            
          </div>

        </div>
        );
      }

export default Profileinfo