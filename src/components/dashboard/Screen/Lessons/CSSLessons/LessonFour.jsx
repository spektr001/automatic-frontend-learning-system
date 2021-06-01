import React from 'react';
import { LessonBlock } from '../LessonBlock';
import clsObj from '../lessons.module.scss'

export function CSSLessonFour() {

    const code1 = `
    <div class="display">Test Block</div>
    `

    const code2 = `
    .display {
        display: block;
        background-color: green;
      }
    `

    const code3 = `
    .display{
        display: inline-block;
        background-color: green;
    } 
    `

    const code4 =`
    .display{
        display: flex;
        justify-content: center;
        background-color: green;
    } 
    `

    const code5 =`
    .display{
        display: grid;
        justify-content: end;
        background-color: green;
    } 
    `

    const code6 = `
    <div class="margin">Test Block</div>
    `

    const code7 = `
    .margin {
        margin-top: 20px;
        margin-bottom: 30px;
        margin-left: 40px;
        margin-right: 50px;
        background-color: green;
      }
    `
    const code8 = `
    <div class="width">Test Block</div>
    `

    const code9 = `
    .width {
        width: 100px;
    }
    `
    const code10 = `
    <div class="height">Test Block</div>
    `

    const code11 = `
    .width {
        height: 200px;
    }
    `


    return (
        <LessonBlock lesson={4} theme='CSS'
            textEng='http://web.simmons.edu/~grabiner/comm244/weekthree/css-basic-properties.html' textUa='https://css.in.ua/css/properties'
            videoEng='https://www.youtube.com/watch?v=XzahodQSRbQ' videoUa='https://www.youtube.com/watch?v=XfBQdasppo4&t=435s'
            map={['p', 'p', 's', 'p', 'c', 'c', 'r', 'c', 'r', 'c', 'r', 'c', 'r', 's', 'p', 'c', 'c', 'r', 's', 'p', 'c', 'c', 'r', 'p', 'c', 'c', 'r']}
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
                    lang: "css",
                    code: code3
                },
                {
                    lang: "css",
                    code: code4
                },
                {
                    lang: "css",
                    code: code5
                },
                {
                    lang: "html",
                    code: code6
                },
                {
                    lang: "css",
                    code: code7
                },
                {
                    lang: "html",
                    code: code8
                },
                {
                    lang: "css",
                    code: code9
                },
                {
                    lang: "html",
                    code: code10
                },
                {
                    lang: "css",
                    code: code11
                },
            ]}
            results={[
                <div className={clsObj.result5}>Test Block</div>,
                <div className={clsObj.result6}>Test Block</div>,
                <div className={clsObj.result7}>Test Block</div>,
                <div className={clsObj.result8}>Test Block</div>,
                <div className={clsObj.result9}>Test Block</div>,
                <div className={clsObj.result10}>Test Block</div>,
                <div className={clsObj.result11}>Test Block</div>,
            ]}
        />
    );
}