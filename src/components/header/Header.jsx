import React, { Component } from 'react';
import classesObj from './header.module.scss'
import Logo from '../../assets/images/logo.png'
import LogIn from '../../assets/images/enter.png'

export class Header extends Component {
    render() { 
        return ( 
            <header id="header" className={classesObj.header__Block}>
                <div className={classesObj.headerLogo__Block}>
                <a className={classesObj.logoLink__btn} href="#">
                    <img src={Logo} alt="Logo" className={classesObj.logoLink__img}/>
                    </a>
                    <span className={classesObj.headerName__txt}>FrontEndBox</span>
                    </div>
                    <div className={classesObj.headerNav__Block}>
                        <a className={classesObj.logIn__btn} href="#">
                            <img src={LogIn} alt="Login" className={classesObj.logIn__img}/>
                        </a>
                </div>
            </header>
         );
    }
}