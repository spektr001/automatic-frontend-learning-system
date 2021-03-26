import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import LogIn from '../../../assets/images/enter.png'
import clsObj from './header.module.scss'

export class LogInBtn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isRedirect: false
         }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({isRedirect: true})
    }

    redirect() {
        if (this.state.isRedirect) {
          return (
            <Redirect to="/dashboard" />
          )
        }
      }

    render() { 
        return ( 
            <div className={clsObj.headerNav__Block}>
                {this.redirect()}
                    <a className={clsObj.logIn__btn} onClick={this.handleClick}>
                        <img src={LogIn} alt="Login" className={clsObj.logIn__img} />
                    </a>
                </div>
         );
    }
}