import React from '@testing-library/react'
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Nav = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to='/pofile' activeClassName={s.activelink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activelink}>Message</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/news' activeClassName={s.activelink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activelink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activelink}>Settings</NavLink>
            </div>
        </div>
    );
}

export default Nav