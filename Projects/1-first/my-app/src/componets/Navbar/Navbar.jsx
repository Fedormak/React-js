import React from '@testing-library/react'
import { NavLink } from 'react-router-dom';
import stayle from './Navbar.module.css'

const Nav = () => {
    return (
        <div className={stayle.nav}>
            <div className={stayle.item}>
                <NavLink to='/pofile' activeClassName={stayle.activelink}>Profile</NavLink>
            </div>
            <div className={stayle.item}>
                <NavLink to='/dialogs' activeClassName={stayle.activelink}>Message</NavLink>
            </div>
            <div className={`${stayle.item} ${stayle.active}`}>
                <NavLink to='/news' activeClassName={stayle.activelink}>News</NavLink>
            </div>
            <div className={stayle.item}>
                <NavLink to='/music' activeClassName={stayle.activelink}>Music</NavLink>
            </div>
            <div className={stayle.item}>
                <NavLink to='/settings' activeClassName={stayle.activelink}>Settings</NavLink>
            </div>
        </div>
    );
}

export default Nav