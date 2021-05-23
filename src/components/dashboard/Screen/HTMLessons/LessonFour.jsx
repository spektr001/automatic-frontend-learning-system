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

export function LessonFour() {

    useEffect(() => {
        const wow = new WOW({ live: false })
        wow.init()
    })

    const { firestore } = useContext(Context)
    const [lesson, loading] = useDocumentData(
        firestore.doc(langSwitcher('lessonsHTMLEng/lesson4', 'lessonsHTMLUa/lesson4'))
    )

    if (loading) {
        return (
            <div className={clsObj.lesson_Block}>
                <LinearProgress />
            </div>
        )
    }

    const code1 = `<element attribute="value">content</element>`

    

    const code2 = `<button>Click Me!</button>`

    const code3 = `<button onclick="myFunction()">Click Me!</button>

    <!--magic-->

    <script>
    function myFunction() {
       alert(">Click!<")
    }
    </script>
    
    <!--magic-->`

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
                        {code1}
                    </SyntaxHighlighter>
                </div>
                <h2 className={clsObj.lesson__subtitle}>{lesson.subtitle2}</h2>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.p4}
                </p>
                <h3 className={clsObj.lesson__subtitle + " wow fadeIn"}>{langSwitcher('Without attribute "onclick"', 'Без атрибуту "onclick"')}</h3>
                <div className={clsObj.lesson_Block__code}>
                    <SyntaxHighlighter className={clsObj.lesson__code} language="html" style={solarizedDark}>
                        {code2}
                    </SyntaxHighlighter>
                </div>
                <h3 className={clsObj.lesson__subtitle + " wow fadeIn"}>{langSwitcher('Result', 'Результат')}</h3>
                <div className={clsObj.lesson_Block__result}>
                <button>Click Me!</button>
                </div>
                <h3 className={clsObj.lesson__subtitle + " wow fadeIn"}>{langSwitcher('With attribute "onclick"', 'З атрибутом "onclick"')}</h3>
                <div className={clsObj.lesson_Block__code}>
                <SyntaxHighlighter className={clsObj.lesson__code} language="html" style={solarizedDark}>
                        {code3}
                    </SyntaxHighlighter>
                </div>
                <h3 className={clsObj.lesson__subtitle + " wow fadeIn"}>{langSwitcher('Result', 'Результат')}</h3>
                <div className={clsObj.lesson_Block__result}>
                    <button onClick={() => alert('>Click!<')} type="button">Click Me!</button>
                </div>
                <h2 className={clsObj.lesson__subtitle}>{langSwitcher('Conclusion', 'Висновок')}</h2>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.conclusion}
                </p>
                <h2 className={clsObj.lesson__subtitle}>{langSwitcher("If you want to know more", 'Якщо хочеш дізнатися більше')}</h2>
                <ul className={clsObj.lesson__link_list}>
                    <li><a className={clsObj.lesson__link} rel="noreferrer" target="_blank" href={langSwitcher('https://www.w3schools.com/tags/ref_attributes.asp', 'https://w3schoolsua.github.io/html/html_attributes.html')}>W3Schools</a></li>
                    <li><a className={clsObj.lesson__link} rel="noreferrer" target="_blank" href={langSwitcher('https://www.youtube.com/watch?v=uIWmPL91Dn4', 'https://www.youtube.com/watch?v=OOGpAXe8ZfE')}>YouTube</a></li>
                </ul>
                <Link to="/dashboard/HTML/lesson5"><button className={clsObj.lesson__next_btn}>{langSwitcher('Next lesson', 'Наступний урок')}</button></Link>
            </div>
        </div>
    );
}