import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import LogIn from '../../../assets/images/enter.png'
import clsObj from './header.module.scss'

export function LogInBtn() {

    const [modalOpen, setModal] = useState(false);
    const [isRedirect, setRedirect] = useState(false);
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = () => {
        if (name === "") {
            alert("Введи, будь-ласка, своє ім'я")
        } else {
            localStorage.setItem('name', name);
            setRedirect(true)
        }
    }

    const redirect = () => {
        if (isRedirect) {
            return (
                <Redirect to="/dashboard" />
            )
        }
    }

    return (
        <>
            <a className="user-block_add-btn" onClick={() => setModal(true) }>
                <img src={LogIn} alt="Login" className={clsObj.logIn__img} />
            </a>
            {redirect()}
            {modalOpen && (
                <div>
                    <div className={clsObj.modalFilter}>
                        <form onSubmit={handleSubmit} className={clsObj.modalFilter__Block}>
                            <p className={clsObj.modal_title}>Введи своє імя</p><br />
                            <label className={clsObj.modal_label}>Імя:
                                <input
                                    onChange={handleChange}
                                    className={clsObj.modal_input}
                                    type="text"
                                    name="name"
                                    value={name}
                                />
                            </label>
                            <div className={clsObj.modal_btn__Block}>
                                <button className={clsObj.modal_btn} type="submit">Підтвердити</button>
                                <button className={clsObj.modal_btn} onClick={() => setModal(false)}>Відмінити</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}