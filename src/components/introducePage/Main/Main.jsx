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
                    <MotivationBlock animation=" wow bounceInDown" text="працювати" />
                    <MotivationBlock animation=" wow bounceInUp" text="в" animtime="2s" />
                    <MotivationBlock animation=" wow bounceInDown" text="веб" />
                </div>
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInDown" text="стати" />
                    <MotivationBlock animation=" wow bounceInUp" text="front-end" />
                    <MotivationBlock animation=" wow bounceInDown" text="розробником" />
                </div>
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInDown" text="вдосконалити" />
                    <MotivationBlock animation=" wow bounceInUp" text="свої" />
                    <MotivationBlock animation=" wow bounceInDown" text="знання" />
                </div>
                <MotivationBlock animation=" wow bounceInUp" text="Бажаєш?" blockType="title" />
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInDown" text="навчитися" />
                    <MotivationBlock animation=" wow bounceInUp" text="правильно" />
                    <MotivationBlock animation=" wow bounceInDown" text="програмувати" />
                </div>
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInDown" text="зрозуміти" />
                    <MotivationBlock animation=" wow bounceInUp" text="принцип" />
                    <MotivationBlock animation=" wow bounceInDown" text="технологій" />
                </div>
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInDown" text="стати" />
                    <MotivationBlock animation=" wow bounceInUp" text="майстром" />
                    <MotivationBlock animation=" wow bounceInDown" text="справи" />
                </div>
                <MotivationBlock animation=" wow bounceInUp" text="Але..." blockType="title" />
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInDown" text="відчуваєш" />
                    <MotivationBlock animation=" wow bounceInUp" text="себе" />
                    <MotivationBlock animation=" wow bounceInDown" text="невпевненим" />
                </div>
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInDown" text="не знаєш" />
                    <MotivationBlock animation=" wow bounceInUp" text="чи це" />
                    <MotivationBlock animation=" wow bounceInDown" text="твоє" />
                </div>
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInDown" text="не маєш" />
                    <MotivationBlock animation=" wow bounceInUp" text="багато часу" />
                    <MotivationBlock animation=" wow bounceInDown" text="на навчання" />
                </div>
                <MotivationBlock animation=" wow bounceInUp" text="Є саме те" blockType="title" />
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInDown" text="що" />
                    <MotivationBlock animation=" wow bounceInUp" text="тобі" />
                    <MotivationBlock animation=" wow bounceInDown" text="потрібно" />
                </div>
                    <MotivationBlock animation=" wow bounceInDown" text="FrontEndBox" textType="latin" />
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInDown" text="саме те" />
                    <MotivationBlock animation=" wow bounceInUp" text="що ти" />
                    <MotivationBlock animation=" wow bounceInDown" text="шукаєш" />
                </div>
                <MotivationBlock animation=" wow bounceInUp" text="Що це таке?" blockType="title" />
                    <MotivationBlock animation=" wow bounceInDown" text="FrontEndBox" textType="latin" />
                <div className={clsObj.motivRow__Block}>
                    <MotivationBlock animation=" wow bounceInDown" text="це абсолютно" />
                    <MotivationBlock animation=" wow bounceInUp" text="автоматизована" />
                    <MotivationBlock animation=" wow bounceInDown" text="система навчання" />
                </div>
                    <MotivationBlock animation=" wow bounceInDown" text="ніяких викладачів" />
                    <MotivationBlock animation=" wow bounceInUp" text="тільки ти," />
                    <MotivationBlock animation=" wow bounceInDown" text="твоє бажання вчитися і" />
                    <MotivationBlock animation=" wow flipInX" text="FrontEndBox" textType="latin" />
            </main>
        );
}