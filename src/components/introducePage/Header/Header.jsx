import React from 'react';
import {animateScroll as scroll} from 'react-scroll'
import clsObj from './header.module.scss'
import { LogInBtn } from './LogInBtn';
import { UserBtn } from './UserBtn';


export function Header() {

    const handleClick = () => {
        scroll.scrollToTop()
      }

        return (
            <header className={clsObj.header__Block}>
                <div className={clsObj.headerLogo__Block}>
                    <a className={clsObj.logoLink__btn} onClick={handleClick}>
                        <img alt="Logo" className={clsObj.logoLink__img} />
                    </a>
                    <span className={clsObj.headerTitle__txt}>FrontEndBox</span>
                </div>
                {localStorage.length === 0 ? <LogInBtn /> : <UserBtn />} 
            </header>
        );
}