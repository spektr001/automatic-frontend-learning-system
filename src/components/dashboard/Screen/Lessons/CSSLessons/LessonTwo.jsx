import React from 'react';
import { LessonBlock } from '../LessonBlock';
import clsObj from '../lessons.module.scss'

export function CSSLessonTwo() {

    const code1 = `
    <p>Every paragraph will be affected by the style.</p>
    <p>Me too!</p>
    <p>And me!</p>
    `

    const code2 = `
    p {
        text-align: center;
        color: red;
    } 
    `

    const code3 = `
    <p id="para1">Hello World!</p>
    <p>This paragraph is not affected by the style.</p>
    `

    const code4 = `
    #para1 {
        text-align: center;
        color: red;
    }
    `

    const code5 = `
    <h1 class="center">Red and center-aligned heading</h1>
    <p class="center">Red and center-aligned paragraph.</p>
        `

    const code6 = `
    .center {
        text-align: center;
        color: red;
    }
    `
    const code7 = `
    <h1>Hello world!</h1>

    <p>Every element on the page will be affected by the style.</p>
    <p>Me too!</p>
    <p>And me!</p>
    `
    const code8 = `
    * {
    text-align: center;
    color: red;
    }
    `
    const code9 = `
    <h1>Hello World!</h1>
    <h2>Smaller heading!</h2>
    <p>This is a paragraph.</p>
    `

    const code10 = `
    h1, h2, p {
        text-align: center;
        color: red;
    }
    `



    return (
        <LessonBlock lesson={2} theme='CSS' nextTheme='CSS'
            textEng='https://www.w3schools.com/css/css_selectors.asp' textUa='http://web-programming.in.ua/view/post/vstup-v-css'
            videoEng='https://www.youtube.com/watch?v=l1mER1bV0N0' videoUa='https://www.youtube.com/watch?v=zx_AmTAq100'
            map={['p', 'p', 's', 'p', 'c', 'c', 'r', 's', 'p', 'p', 'c', 'c', 'r', 's', 'p', 'c', 'c', 'r', 's', 'p', 'c', 'c', 'r', 's', 'p', 'c', 'c', 'r']}
            codes={[
                {
                    lang: "html",
                    code: code1
                },
                {
                    lang: "css",
                    code: code2
                },
                {
                    lang: "html",
                    code: code3
                },
                {
                    lang: "css",
                    code: code4
                },
                {
                    lang: "html",
                    code: code5
                },
                {
                    lang: "css",
                    code: code6
                },
                {
                    lang: "html",
                    code: code7
                },
                {
                    lang: "css",
                    code: code8
                },
                {
                    lang: "html",
                    code: code9
                },
                {
                    lang: "css",
                    code: code10
                }

            ]}
            results={[
                <div className={clsObj.result1}>
                    <p>Every paragraph will be affected by the style.</p>
                    <p>Me too!</p>
                    <p>And me!</p>
                </div>,
                <div>
                    <p className={clsObj.result1}>Hello World!</p>
                    <p>This paragraph is not affected by the style.</p>
                </div>,
                <div className={clsObj.result1}>
                    <h1>Red and center-aligned heading</h1>
                    <p>Red and center-aligned paragraph.</p>
                </div>,
                <div className={clsObj.result1}>
                    <h1>Hello world!</h1>

                    <p>Every element on the page will be affected by the style.</p>
                    <p>Me too!</p>
                    <p>And me!</p>
                </div>,
                <div className={clsObj.result1}>
                    <h1>Hello World!</h1>
                    <h2>Smaller heading!</h2>
                    <p>This is a paragraph.</p>
                </div>
            ]}
        />
    );
}