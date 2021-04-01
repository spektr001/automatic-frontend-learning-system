import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import LogIn from '../../../assets/images/enter.png'
import clsObj from './header.module.scss'

export class LogInBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            isRedirect: false,
            name: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    redirect() {
        if (this.state.isRedirect) {
            return (
                <Redirect to="/dashboard" />
            )
        }
    }

    handleChange(e) {
        const name = e.target.name
        this.setState({ [name]: e.target.value });
    }

    handleSubmit() {
        localStorage.setItem('name', this.state.name);
        this.setState({ isRedirect: true })
    }

    render() {
        return (
            <>
                <a className="user-block_add-btn" onClick={() => this.setState({ modalOpen: true })}>
                    <img src={LogIn} alt="Login" className={clsObj.logIn__img} />
                </a>
                {this.redirect()}
                {this.state.modalOpen && (
                    <div>
                        <div className={clsObj.modalFilter}>
                            <form onSubmit={this.handleSubmit} className={clsObj.modalFilter__Block}>
                                <p className={clsObj.modal_title}>Введи своє ім'я</p><br />
                                <label className={clsObj.modal_label}>Імя:
                                <input
                                        onChange={this.handleChange}
                                        className={clsObj.modal_input}
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                    />
                                </label>
                                <div className={clsObj.modal_btn__Block}>
                                    <button className={clsObj.modal_btn} type="submit">Підтвердити</button>
                                    <button className={clsObj.modal_btn} onClick={() => this.setState({ modalOpen: false })}>Відмінити</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </>
        );
    }
}