import React, { useState, useEffect } from 'react';
import { WOW } from 'wowjs'
import { animateScroll as scroll } from 'react-scroll'
import clsObj from './header.module.scss'
import { LogInBtn } from './LogInBtn';
import { UserBtn } from './UserBtn';
import { Navbar } from '../../dashboard/Modals/Navbar'
import { Link } from 'react-router-dom';


export function Header() {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        const wow = new WOW({ live: false })
        wow.init()
    }, [])

    const handleClick = () => {
        if (localStorage.name === "") {
            scroll.scrollToTop()
        } else {
            setOpen(true)
        }
    }

    const updateState = (newValue) => { setOpen(newValue) }

    return (
        <>
            <header className={clsObj.header__Block}>
                <div className={clsObj.headerLogo__Block}>
                    <a className={clsObj.logoLink__btn + " wow bounceInLeft"} onClick={handleClick}>
                        <img alt="Logo" className={clsObj.logoLink__img} />
                    </a>
                    <Link to="/dashboard"><span className={clsObj.headerTitle__txt}>FrontEndBox</span></Link> 
                </div>
                {localStorage.name === "" ? <LogInBtn /> : <UserBtn />}
            </header>

            <Navbar navState={open} updateState={updateState} />
        </>
    );
}