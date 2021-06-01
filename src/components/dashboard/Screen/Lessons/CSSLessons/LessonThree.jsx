import React from 'react';
import { LessonBlock } from '../LessonBlock';
import clsObj from '../lessons.module.scss'

export function CSSLessonThree() {

    const code1 = `
    selector:pseudo-class {
        property: value;
      }
    `

    const code2 = `
    <a class="example" href="default.asp" target="_blank">This is a link</a>
    `

    const code3 = `
    .example:link {
        color: red;
      }
    `

    const code4 = `
    .example:visited {
        color: green;
      }
    `

    const code5 = `
    .example:hover {
        color: blue;
      }
    `


    return (
            <LessonBlock lesson={3} theme='CSS' nextTheme='CSS'
                textEng='https://www.w3schools.com/css/css_pseudo_classes.asp' textUa='https://sebweo.com/psevdoklasi-v-css-minimalnij-nabir-znan/'
                videoEng='https://www.youtube.com/watch?v=kpXKwDGtjGE' videoUa='https://www.youtube.com/watch?v=8CbzuWU8_Rg'
                map={['p','p','s','c','p', 's', 'p', 'c', 'c', 'r', 's', 'p', 'c', 'c', 'r', 's', 'p', 'c', 'c', 'r']}
                codes={[
                    {
                        lang: "css",
                        code: code1
                    },
                    {
                        lang: "html",
                        code: code2
                    },
                    {
                        lang: "css",
                        code: code3
                    },
                    {
                        lang:"html",
                        code: code2
                    },
                    {
                        lang: "css",
                        code: code4
                    },
                    {
                        lang:"html",
                        code: code2
                    },
                    {
                        lang: "css",
                        code: code5
                    },
                ]}
                results={[
                    <a className={clsObj.result2} href="default.asp" target="_blank">This is a link</a>,
                    <a className={clsObj.result3} href="default.asp" target="_blank">This is a link</a>,
                    <a className={clsObj.result4} href="default.asp" target="_blank">This is a link</a>
                ]}
                />
    );
}