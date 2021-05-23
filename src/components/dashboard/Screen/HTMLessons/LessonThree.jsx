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

export function LessonThree() {

    useEffect(() => {
        const wow = new WOW({ live: false })
        wow.init()
    })

    const { firestore } = useContext(Context)
    const [lesson, loading] = useDocumentData(
        firestore.doc(langSwitcher('lessonsHTMLEng/lesson3', 'lessonsHTMLUa/lesson3'))
    )

    if (loading) {
        return (
            <div className={clsObj.lesson_Block}>
                <LinearProgress />
            </div>
        )
    }

    const code1 = `<!DOCTYPE html>
    <html>
        <head>

        </head>
    <body>
    
    <div>
      <h2>This is a heading in a div element</h2>
      <p>This is some text in a div element.</p>
    </div>
    
    </body>
    </html>`

    const code2 = `<!DOCTYPE html>
    <html>
    
       <head>

       </head>
        
       <body>
         <form action="/action_page.php" method="get">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"><br><br>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname"><br><br>
            <input type="submit" value="Submit">
     </form> 
       </body>
        
    </html>`

    const code3 = `<!DOCTYPE html>
    <html>
    
       <head>

       </head>
        
       <body>
            <button type="button">Click Me!</button> 
       </body>
        
    </html>`

    return (
        <div className={clsObj.lesson_Block}>
            <h1 className={clsObj.lesson_title}>{lesson.title}</h1>
            <div className={clsObj.lesson__txt_Block}>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.p1}
                </p>
                <h2 className={clsObj.lesson__subtitle}>{lesson.subtitle1}</h2>
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
                <h3 className={clsObj.lesson__subtitle + " wow fadeIn"}>{langSwitcher('Result', 'Результат')}</h3>
                <div className={clsObj.lesson_Block__result}>
                    <div>
                        <h2>This is a heading in a div element</h2>
                        <p>This is some text in a div element.</p>
                    </div>
                </div>
                <h2 className={clsObj.lesson__subtitle}>{lesson.subtitle2}</h2>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.p4}
                </p>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.p5}
                </p>
                <div className={clsObj.lesson_Block__code}>
                    <SyntaxHighlighter className={clsObj.lesson__code} language="html" style={solarizedDark}>
                        {code2}
                    </SyntaxHighlighter>
                </div>
                <h3 className={clsObj.lesson__subtitle + " wow fadeIn"}>{langSwitcher('Result', 'Результат')}</h3>
                <div className={clsObj.lesson_Block__result}>
                    <form method="get">
                        <label htmlFor="fname">First name:</label>
                        <input type="text" id="fname" name="fname" /><br /><br />
                        <label htmlFor="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" /><br /><br />
                        <input onClick={() => alert(langSwitcher('The form has been submitted!', 'Форму відправлено!'))} type="submit" value="Submit" />
                    </form>
                </div>
                <h2 className={clsObj.lesson__subtitle}>{lesson.subtitle3}</h2>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.p6}
                </p>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.p7}
                </p>
                <div className={clsObj.lesson_Block__code}>
                    <SyntaxHighlighter className={clsObj.lesson__code} language="html" style={solarizedDark}>
                        {code3}
                    </SyntaxHighlighter>
                </div>
                <h3 className={clsObj.lesson__subtitle + " wow fadeIn"}>{langSwitcher('Result', 'Результат')}</h3>
                <div className={clsObj.lesson_Block__result}>
                    <button onClick={() => alert(langSwitcher('>Click!<', '>Клік!<'))} type="button">Click Me!</button>
                </div>
                <h2 className={clsObj.lesson__subtitle}>{langSwitcher('Conclusion', 'Висновок')}</h2>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.conclusion}
                </p>
                <h2 className={clsObj.lesson__subtitle}>{langSwitcher("If you want to know more", 'Якщо хочеш дізнатися більше')}</h2>
                <ul className={clsObj.lesson__link_list}>
                    <li><a className={clsObj.lesson__link} rel="noreferrer" target="_blank" href={langSwitcher('https://www.w3schools.com/TAGS/tag_comment.asp', 'https://html-css.co.ua/dovidnuk-html-tags/')}>{langSwitcher('W3Schools', 'Довідник HTML тегів')}</a></li>
                    <li><a className={clsObj.lesson__link} rel="noreferrer" target="_blank" href={langSwitcher('https://www.youtube.com/watch?v=dmovVa0jseU', 'https://www.youtube.com/watch?v=LRA-Y3Kzb6w&t=365s')}>YouTube</a></li>
                </ul>
                <Link to="/dashboard/HTML/lesson4"><button className={clsObj.lesson__next_btn}>{langSwitcher('Next lesson', 'Наступний урок')}</button></Link>
            </div>
        </div>
    );
}