import React, { useEffect } from 'react';
import { WOW } from 'wowjs'
import clsObj from '../screen.module.scss'
import langSwitcher from '../../../languageSwitcher'

export function SelectionScreen() {

    useEffect(() => {
        const wow = new WOW({ live: false })
        wow.init()
    })

    return (
        <div className={clsObj.selection_Block}>
            <button className={clsObj.selection__btn + " wow bounceInLeft"}><span className={clsObj.selection__txt}>{langSwitcher("Take a test", "Пройти тест")}</span></button>
            <button className={clsObj.selection__btn + " wow bounceInRight"}><span className={clsObj.selection__txt}>{langSwitcher("Choose a topic yourself", "Вибрати тему самостійно")}</span></button>
            <button className={clsObj.selection__btn + " wow bounceInLeft"}><span className={clsObj.selection__txt}>{langSwitcher("Start from very begining", "Почати з самого початку")}</span></button>
        </div>
    )
}