import React, { Component } from 'react';
import {animateScroll as scroll} from 'react-scroll'
import clsObj from './header.module.scss'
import { LogInBtn } from './LogInBtn';


export class Header extends Component {
    constuctor() {
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
       scroll.scrollToTop()
    }

    render() {
        return (
            <header className={clsObj.header__Block}>
                <div className={clsObj.headerLogo__Block}>
                    <a className={clsObj.logoLink__btn} onClick={this.handleClick}>
                        <img alt="Logo" className={clsObj.logoLink__img} />
                    </a>
                    <span className={clsObj.headerTitle__txt}>FrontEndBox</span>
                </div>
                <LogInBtn />
            </header>
        );
    }
}