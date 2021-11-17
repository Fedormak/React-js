import React from '@testing-library/react'
import { NavLink } from 'react-router-dom';
import StoreContext from '../../StoreContext';
import Frends from './frend/frend';
import stayle from './Navbar.module.css'

const Nav = (props) => {
    

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState().navbar

                let frendsElement = state.frends.map(frends => <Frends name={frends.name} ava={frends.ava}/>)
                return (
                <div className={stayle.nav}>
                    <div>
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
                    <div className={stayle.item}>
                        <h3>Frends</h3>
                        {frendsElement}
                    </div>
                </div>)
            }
            }
        </StoreContext.Consumer>
    );
}

export default Nav