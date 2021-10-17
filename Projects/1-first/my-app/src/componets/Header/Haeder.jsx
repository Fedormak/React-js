import React from '@testing-library/react'
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <div>
                <img src='https://cdn.discordapp.com/attachments/823195581517791312/893175721177018399/Skyfall.png' alt='' />
            </div>
            <div className={s.logo}>
                
            </div>
        </div>
    );
}

export default Header