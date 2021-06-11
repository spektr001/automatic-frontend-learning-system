import React from 'react'
import { LessonBlock } from '../LessonBlock';

export function JSLessonThree() {

    const code1 = `
    let a = 24
    const b = 24.21
    `

    const code2 = `
    let text = "This is string"

    const nextText = 'This is string too'
    `

    const code3 = `
    let x = 5;
    let y = 5;
    let z = 6;
    (x == y)       // true
    (x == z)       // false 
    `

    const code4 = `
    let cars = ["Saab", "Volvo", "BMW"];
    `

    const code5 = `
    const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    `

    const code6 = `
    let a 

    return a // undefined
    `

    const code7 = `
    var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    person = null; 

    return person // null
    `

    return (
            <LessonBlock lesson={3} theme='JS' 
                textEng='https://www.w3schools.com/js/js_datatypes.asp' textUa='http://яваскрипт.укр/%D1%82%D0%B8%D0%BF%D0%B8%20%D0%B4%D0%B0%D0%BD%D0%B8%D1%85'
                videoEng='https://www.youtube.com/watch?v=808eYu9B9Yw' videoUa='https://www.youtube.com/watch?v=pgirSlwRnHU&t=49s'
                map={['p','p','p', 's', 'p', 'c', 's', 'p', 'c', 's', 'p', 'c', 's', 'p', 'c', 's', 'p', 'c', 's', 'p', 'c', 's', 'p', 'c' ]}
                codes={[
                    {
                        lang: "javascript",
                        code: code1
                    },

                    {
                        lang: "javascript",
                        code: code2
                    },

                    {
                        lang: "javascript",
                        code: code3
                    },

                    {
                        lang: "javascript",
                        code: code4
                    },

                    {
                        lang: "javascript",
                        code: code5
                    },

                    {
                        lang: "javascript",
                        code: code6
                    },

                    {
                        lang: "javascript",
                        code: code7
                    }
                ]}
                />
    );
}