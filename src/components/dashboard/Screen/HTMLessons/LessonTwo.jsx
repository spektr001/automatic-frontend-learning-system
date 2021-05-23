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

export function LessonTwo() {

    useEffect(() => {
        const wow = new WOW({ live: false })
        wow.init()
    })

    const { firestore } = useContext(Context)
    const [lesson, loading] = useDocumentData(
        firestore.doc(langSwitcher('lessonsHTMLEng/lesson2', 'lessonsHTMLUa/lesson2'))
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
          <title>Heading Example</title>
       </head>
        
       <body>
          <h1>This is heading 1</h1>
          <h2>This is heading 2</h2>
          <h3>This is heading 3</h3>
          <h4>This is heading 4</h4>
          <h5>This is heading 5</h5>
          <h6>This is heading 6</h6>
       </body>
        
    </html>`

    const code2 = `<!DOCTYPE html>
    <html>
    
       <head>
          <title>Paragraph Example</title>
       </head>
        
       <body>
          <p>Here is a first paragraph of text.</p>
          <p>Here is a second paragraph of text.</p>
          <p>Here is a third paragraph of text.</p>
       </body>
        
    </html>`

    const code3 = `<!DOCTYPE html>
    <html>
    
       <head>
          <title>Line Break  Example</title>
       </head>
        
       <body>
          <p>Hello<br />
             You delivered your assignment ontime.<br />
             Thanks<br />
             Mahnaz</p>
       </body>
        
    </html>`

    const code4 = `<!DOCTYPE html>
    <html>
    
       <head>
          <title>Link Example</title>
       </head>
        
       <body>
          <a href="https://www.anothersite.com">Click for visit site!</a> 
       </body>
        
    </html>`

    const code5 = `<!DOCTYPE html>
    <html>
    
       <head>
          <title>Image Example</title>
       </head>
        
       <body>
          <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">  
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
                <h2 className={clsObj.lesson__subtitle}>{lesson.subtitle1}</h2>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.p4}
                </p>
                <div className={clsObj.lesson_Block__code}>
                    <SyntaxHighlighter className={clsObj.lesson__code} language="html" style={solarizedDark}>
                        {code1}
                    </SyntaxHighlighter>
                </div>
                <h3 className={clsObj.lesson__subtitle + " wow fadeIn"}>{langSwitcher('Result', 'Результат')}</h3>
                <div className={clsObj.lesson_Block__result}>
                    <h1>This is heading 1</h1>
                    <h2>This is heading 2</h2>
                    <h3>This is heading 3</h3>
                    <h4>This is heading 4</h4>
                    <h5>This is heading 5</h5>
                    <h6>This is heading 6</h6>
                </div>
                <h2 className={clsObj.lesson__subtitle}>{lesson.subtitle2}</h2>
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
                    <p>Here is a first paragraph of text.</p>
                    <p>Here is a second paragraph of text.</p>
                    <p>Here is a third paragraph of text.</p>
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
                    <p>Hello<br />
                    You delivered your assignment ontime.<br />
                    Thanks<br />
                    Mahnaz</p>
                </div>
                <h2 className={clsObj.lesson__subtitle}>{lesson.subtitle4}</h2>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.p8}
                </p>
                <div className={clsObj.lesson_Block__code}>
                    <SyntaxHighlighter className={clsObj.lesson__code} language="html" style={solarizedDark}>
                        {code4}
                    </SyntaxHighlighter>
                </div>
                <h3 className={clsObj.lesson__subtitle + " wow fadeIn"}>{langSwitcher('Result', 'Результат')}</h3>
                <div className={clsObj.lesson_Block__result}>
                    <a href="https://www.google.com">Click for visit site!</a>
                </div>
                <h2 className={clsObj.lesson__subtitle}>{lesson.subtitle5}</h2>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.p9}
                </p>
                <div className={clsObj.lesson_Block__code}>
                    <SyntaxHighlighter className={clsObj.lesson__code} language="html" style={solarizedDark}>
                        {code5}
                    </SyntaxHighlighter>
                </div>
                <h3 className={clsObj.lesson__subtitle + " wow fadeIn"}>{langSwitcher('Result', 'Результат')}</h3>
                <div className={clsObj.lesson_Block__result}>
                    <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600" />
                </div>
                <h2 className={clsObj.lesson__subtitle}>{langSwitcher('Conclusion', 'Висновок')}</h2>
                <p className={clsObj.lesson__txt + " wow fadeIn"}>
                    {lesson.conclusion}
                </p>
                <h2 className={clsObj.lesson__subtitle}>{langSwitcher("If you want to know more", 'Якщо хочеш дізнатися більше')}</h2>
                <ul className={clsObj.lesson__link_list}>
                    <li><a className={clsObj.lesson__link} rel="noreferrer" target="_blank" href={langSwitcher('https://www.elated.com/first-10-html-tags/', 'http://cpto.dp.ua/public_html/posibnyky/basic_html/urok2.html')}>{langSwitcher('Elated', 'CPTO')}</a></li>
                    <li><a className={clsObj.lesson__link} rel="noreferrer" target="_blank" href={langSwitcher('https://www.youtube.com/watch?v=bUEykHfMMnc', 'https://www.youtube.com/watch?v=9hIPLU_knMo')}>YouTube</a></li>
                </ul>
                <Link to="/dashboard/HTML/lesson3"><button className={clsObj.lesson__next_btn}>{langSwitcher('Next lesson', 'Наступний урок')}</button></Link>
            </div>
        </div>
    );
}