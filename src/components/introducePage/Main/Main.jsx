import React, { useEffect } from 'react';
import clsObj from './main.module.scss'
import { MotivationBlock } from './MotivationBlock';

export function Main() {

    useEffect(() => {
        const emptyItem = ""
        localStorage.setItem("name", emptyItem)
        localStorage.setItem("lang", emptyItem)
        localStorage.setItem("achiv1", emptyItem)
        localStorage.setItem("achiv2", emptyItem)
        localStorage.setItem("achiv3", emptyItem)
        localStorage.setItem("achiv4", emptyItem)
        localStorage.setItem("theme", "light")
        localStorage.setItem("avatar", "/static/media/user.7ffa5473.png")
        }, [])
        
        return (
            <main className={clsObj.main__Block}>
                <MotivationBlock animation=" wow bounceInUp" text="Мрієш?" blockType="title" />
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInLeft" text="працювати" />
                    <MotivationBlock animation=" wow bounceInDown" text="в" animtime="2s" />
                    <MotivationBlock animation=" wow bounceInRight" text="веб" />
                </div>
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInLeft" text="стати" />
                    <MotivationBlock animation=" wow bounceInDown" text="front-end" />
                    <MotivationBlock animation=" wow bounceInRight" text="розробником" />
                </div>
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInLeft" text="вдосконалити" />
                    <MotivationBlock animation=" wow bounceInDown" text="свої" />
                    <MotivationBlock animation=" wow bounceInRight" text="знання" />
                </div>
                <MotivationBlock animation=" wow bounceInUp" text="Бажаєш?" blockType="title" />
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInLeft" text="навчитися" />
                    <MotivationBlock animation=" wow bounceInDown" text="правильно" />
                    <MotivationBlock animation=" wow bounceInRight" text="програмувати" />
                </div>
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInLeft" text="зрозуміти" />
                    <MotivationBlock animation=" wow bounceInDown" text="принцип" />
                    <MotivationBlock animation=" wow bounceInRight" text="технологій" />
                </div>
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInLeft" text="стати" />
                    <MotivationBlock animation=" wow bounceInDown" text="майстром" />
                    <MotivationBlock animation=" wow bounceInRight" text="справи" />
                </div>
                <MotivationBlock animation=" wow bounceInUp" text="Але..." blockType="title" />
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInLeft" text="відчуваєш" />
                    <MotivationBlock animation=" wow bounceInDown" text="себе" />
                    <MotivationBlock animation=" wow bounceInRight" text="невпевненим" />
                </div>
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInLeft" text="не знаєш" />
                    <MotivationBlock animation=" wow bounceInDown" text="чи це" />
                    <MotivationBlock animation=" wow bounceInRight" text="твоє" />
                </div>
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInLeft" text="не маєш" />
                    <MotivationBlock animation=" wow bounceInDown" text="багато часу" />
                    <MotivationBlock animation=" wow bounceInRight" text="на навчання" />
                </div>
                <MotivationBlock animation=" wow bounceInUp" text="Є саме те" blockType="title" />
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInLeft" text="що" />
                    <MotivationBlock animation=" wow bounceInDown" text="тобі" />
                    <MotivationBlock animation=" wow bounceInRight" text="потрібно" />
                </div>
                    <MotivationBlock animation=" wow bounceInRight" text="FrontEndBox" textType="latin" />
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInLeft" text="саме те" />
                    <MotivationBlock animation=" wow bounceInDown" text="що ти" />
                    <MotivationBlock animation=" wow bounceInRight" text="шукаєш" />
                </div>
                <MotivationBlock animation=" wow bounceInUp" text="Що це таке?" blockType="title" />
                    <MotivationBlock animation=" wow bounceInLeft" text="FrontEndBox" textType="latin" />
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInLeft" text="це абсолютно" />
                    <MotivationBlock animation=" wow bounceInDown" text="автоматизована" />
                    <MotivationBlock animation=" wow bounceInRight" text="система навчання" />
                </div>
                    <MotivationBlock animation=" wow bounceInDown" text="ніяких викладачів" />
                    <MotivationBlock animation=" wow bounceInLeft" text="тільки ти," />
                    <MotivationBlock animation=" wow bounceInRight" text="твоє бажання вчитися і" />
                    <MotivationBlock animation=" wow flipInX" text="FrontEndBox" textType="latin" />
            </main>
        );
}