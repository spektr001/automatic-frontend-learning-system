import React from 'react'
import { LessonBlock } from '../LessonBlock';

export function JSLessonTwo() {

    const code1 = `
    let a = 1
    const b = 1

    a + 1 // 2
    b + 1 // error
    `

    const code2 = `
    let text

    text = "Box"
    alert(box) // Box
    `

    const code3 = `
    let test1 // ok
    let $variable // ok

    let 1test // error
    let my-variable // error
    `

    return (
            <LessonBlock lesson={2} theme='JS' 
                textEng='https://javascript.info/variables' textUa='https://codeguida.com/post/576'
                videoEng='https://www.youtube.com/watch?v=u0Mq3FzpsmI' videoUa='https://www.youtube.com/watch?v=atjd1slUbPM'
                map={['p','p','c', 'p', 'c', 's', 'p', 'c' ]}
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
                    }
                ]}
                />
    );
}