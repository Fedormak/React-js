import React from '@testing-library/react'
import stayle from './Header.module.css'

const Header = () => {
    return (
        <div className={stayle.header}>
            <div>
                <img src='https://cdn.discordapp.com/attachments/823195581517791312/893175721177018399/Skyfall.png' alt='' />
            </div>
            <div className={stayle.logo}>
                
            </div>
        </div>
    );
}

export default Header