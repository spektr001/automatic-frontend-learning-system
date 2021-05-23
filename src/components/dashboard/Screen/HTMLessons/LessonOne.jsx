import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { WOW } from 'wowjs'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { LinearProgress } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Context } from '../../../../index'
import langSwitcher from '../../../languageSwitcher';
import clsObj from './lessons.module.scss'

export function LessonOne() {

    useEffect(() => {
        const wow = new WOW({ live: false })
        wow.init()
    })

    const { firestore } = useContext(Context)
    const [lesson, loading] = useDocumentData(
        firestore.doc(langSwitcher('lessonsHTMLEng/lesson1', 'lessonsHTMLUa/lesson1'))
    )

    if (loading) {
        return (
            <div className={clsObj.lesson_Block}>
                <LinearProgress />
            </div>
        )
    }

    const code = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`

    return (
        <div className={clsObj.lesson_Block}>
            <h1 className={clsObj.lesson_title}>{lesson.title}</h1>
            <div className={clsObj.lesson__txt_Block}>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.p1}
                </p>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.p2}
                </p>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.p3}
                </p>
                <div className={clsObj.lesson_Block__code}>
                    <SyntaxHighlighter className={clsObj.lesson__code} language="html" style={solarizedDark}>
                        {code}
                    </SyntaxHighlighter>
                </div>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.p4}
                </p>
                <h2 className={clsObj.lesson__subtitle}>{langSwitcher('Conclusion', 'Висновок')}</h2>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.conclusion}
                </p>
                <h2 className={clsObj.lesson__subtitle}>{langSwitcher("If you didn't catch that", 'Якщо ти раптом не зрозумів')}</h2>
                <ul className={clsObj.lesson__link_list}>
                    <li><a className={clsObj.lesson__link} rel="noreferrer" target="_blank" href={langSwitcher('https://en.wikipedia.org/wiki/HTML', 'https://uk.wikipedia.org/wiki/HTML')}>{langSwitcher('Wikipedia', 'Вікіпедія')}</a></li>
                    <li><a className={clsObj.lesson__link} rel="noreferrer" target="_blank" href={langSwitcher('https://www.youtube.com/watch?v=u0OeZfIfBRI', 'https://www.youtube.com/watch?v=jwZYK23hdMg')}>YouTube</a></li>
                </ul>
                <Link to="/dashboard/HTML/lesson2"><button className={clsObj.lesson__next_btn}>{langSwitcher('Next lesson', 'Наступний урок')}</button></Link>
            </div>
        </div>
    );
}