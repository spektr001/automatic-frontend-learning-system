import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { WOW } from 'wowjs'
import clsObj from '../screen.module.scss'
import langSwitcher from '../../../languageSwitcher'
import { Navbar } from '../../Modals/Navbar';
import { TestModal } from '../../Modals/TestModal';

export function SelectionScreen() {

    const [open, setOpen] = useState(false)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        const wow = new WOW({ live: false })
        wow.init()
    }, [])

    const updateState = (newValue) => { setOpen(newValue) }
    const updateTestState = (newValue) => { setModal(newValue) }

    return (
        <>
            <div className={clsObj.selection_Block}>
                <button className={clsObj.selection__btn + " wow bounceInLeft"} onClick={() => setModal(true)}>
                    <span className={clsObj.selection__txt}>{langSwitcher("Take a test", "Пройти тест")}</span>
                </button>
                <button className={clsObj.selection__btn + " wow bounceInRight"} onClick={() => setOpen(true)}>
                    <span className={clsObj.selection__txt} >{langSwitcher("Choose a topic yourself", "Вибрати тему самостійно")}</span>
                </button>
                <Link to='/dashboard/begining' className={clsObj.selection__btn + " wow bounceInLeft"}>
                    <span className={clsObj.selection__txt}>{langSwitcher("Start from very begining", "Почати з самого початку")}</span>
                </Link>
            </div>

            <Navbar navState={open} updateState={updateState} />
            <TestModal testState={modal} updateTestState={updateTestState} />
        </>
    )
}