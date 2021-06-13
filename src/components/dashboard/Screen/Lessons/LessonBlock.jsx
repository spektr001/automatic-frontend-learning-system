import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { WOW } from 'wowjs'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { LinearProgress } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Context } from '../../../../index'
import langSwitcher from '../../../languageSwitcher';
import clsObj from './lessons.module.scss'
import { TestModal } from '../../Modals/TestModal';

export function LessonBlock(props) {

    useEffect(() => {
        const wow = new WOW({ live: false })
        wow.init()
    }, [])

    const [modal, setModal] = useState(false)
    const { firestore } = useContext(Context)
    const [lesson, loading] = useDocumentData(
        firestore.doc(langSwitcher('lessons' + props.theme + 'Eng/lesson' + props.lesson, 'lessons' + props.theme + 'Ua/lesson' + props.lesson))
    )

    const updateTestState = (newValue) => { setModal(newValue) }

    if (loading) {
        return (
            <div className={clsObj.lesson_Block}>
                <LinearProgress />
            </div>
        )
    }

    const lessonMap = []

    let s = 0
    let p = 0
    let c = -1
    let r = -1

    for (let [index, value] of props.map.entries()) {
        lessonMap.push(
            value === 's' ? <h2 key={index} className={clsObj.lesson__subtitle}>{lesson['subtitle' + [++s]]}</h2> : null,
            value === 'p' ? <p key={index} className={clsObj.lesson__txt + " wow fadeIn"}>{lesson['p' + [++p]]}</p> : null,
            value === 'c'
                ? <div key={index}>
                    <h3 className={clsObj.lesson__subtitle + " wow fadeIn"}>{props.codes[++c].lang.toUpperCase()}</h3>
                    <div className={clsObj.lesson_Block__code}>
                        <SyntaxHighlighter className={clsObj.lesson__code} language={props.codes[c].lang} style={solarizedDark}>
                            {props.codes[c].code}
                        </SyntaxHighlighter>
                    </div>
                </div>
                : null,
            value === 'r'
                ? <div key={index}>
                    <h3 className={clsObj.lesson__subtitle + " wow fadeIn"}>{langSwitcher('Result', 'Результат')}</h3>
                    <div className={clsObj.lesson_Block__result}>
                        {props.results[++r]}
                    </div>
                </div>
                : null
        )
    }

    return (
        <>
        <div className={localStorage.theme === 'dark' ? clsObj.lesson_Block_dark : clsObj.lesson_Block}>
            <h1 className={clsObj.lesson_title}>{lesson.title}</h1>
            <div className={clsObj.lesson__txt_Block}>
                {lessonMap}
                <h2 className={clsObj.lesson__subtitle}>{langSwitcher('Conclusion', 'Висновок')}</h2>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.conclusion}
                </p>
                <h2 className={clsObj.lesson__subtitle}>{langSwitcher("If you want to know more", 'Якщо хочеш дізнатися більше')}</h2>
                <ul className={clsObj.lesson__link_list}>
                    <li><a className={clsObj.lesson__link} rel="noreferrer" target="_blank" href={langSwitcher(props.textEng, props.textUa)}>{langSwitcher('Article', 'Стаття')}</a></li>
                    <li><a className={clsObj.lesson__link} rel="noreferrer" target="_blank" href={langSwitcher(props.videoEng, props.videoUa)}>YouTube</a></li>
                </ul>
                {props.theme == 'JS' && props.lesson == 4
                ? <button className={clsObj.lesson__next_btn} onClick={() => setModal(true)}>{langSwitcher("Take a test", "Пройти тест")}</button>
                : <Link to={"/dashboard/" + [props.theme == 'HTML' && props.lesson == 4 ? 'CSS' : props.theme == 'CSS' && props.lesson == 4 ? 'JS' : props.theme] + "/lesson" + [props.lesson + 1 >= 5 ? 1 : props.lesson + 1]}><button className={clsObj.lesson__next_btn}>{langSwitcher('Next lesson', 'Наступний урок')}</button></Link>}
            </div>
        </div>

        <TestModal testState={modal} updateTestState={updateTestState} />
        </>
    );
}