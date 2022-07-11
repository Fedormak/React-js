import React from '@testing-library/react'
import { NavLink } from 'react-router-dom';
import Frends from './frend/frend';
import stayle from './Navbar.module.css'

const Nav = (props) => {

    let state = props.Navbar

    let frendsElement = state.frends.map(frends => <Frends name={frends.name} ava={frends.ava} />)

    return (
        <div className={stayle.nav}>
            <div>
                <div className={stayle.item}>
                    <NavLink to='/profile' activeClassName={stayle.activelink}>Profile</NavLink>
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
                    <NavLink to='/find-users' activeClassName={stayle.activelink}>Find user</NavLink>
                </div>
                <div className={stayle.item}>
                    <NavLink to='/settings' activeClassName={stayle.activelink}>Settings</NavLink>
                </div>
                <div>
                    <div className={stayle.item}>
                        <h3>Frends Online</h3>
                        <div>{frendsElement}</div>
                    </div>
                </div>

            </div>
        </div>


    );
}

export default Nav