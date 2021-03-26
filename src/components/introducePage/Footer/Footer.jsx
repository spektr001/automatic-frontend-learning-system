import React, { Component } from 'react';
import clsObj from './footer.module.scss'
import Logo from '../../../assets/images/open-box.png'

const moment = require('moment')


export class Footer extends Component {
    render() { 
        return ( 
            <footer className={clsObj.footer__Block}>
                <div className={clsObj.footerLogo__Block}>
                    <a className={clsObj.logoLink__btn}>
                        <img src={Logo} alt="Logo" className={clsObj.logoLink__img} />
                    </a>
                    <span className={clsObj.footerTitle__txt}>FrontEndBox</span>
                </div>
                <div className={clsObj.date__Block}>
                    <span className={clsObj.date__txt}>©2021-{moment().format('YYYY')}</span>
                </div>
            </footer>
         );
    }
}