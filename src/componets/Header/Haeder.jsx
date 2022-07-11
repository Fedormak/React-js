import React from '@testing-library/react'
import { NavLink } from 'react-router-dom';
import stayle from './Header.module.css'

const Header = (props) => {
   debugger
    return (
        <div className={stayle.header}>
            <img src='https://cdn.discordapp.com/attachments/823195581517791312/893175721177018399/Skyfall.png' alt='' className={stayle.skyfall}/>
            <div className={stayle.loginBlock}>
                { props.isAuth 
                    ? <div>{props.login} - <button onClick={props.Logout}>Log out</button></div>
                    : <NavLink to={'/login'} className={stayle.login}>Login</NavLink> }
            </div>
        </div>
    );
}

export default Header