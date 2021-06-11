import React from 'react'
import { LessonBlock } from '../LessonBlock';

export function JSLessonFour() {

    const code1 = `
    var i = 1;
    while(i <= 5) {    
        document.write("<p>The number is " + i + "</p>");
        i++;
    }
    `

    const code2 = `
    var i = 1;
    do {
        document.write("<p>The number is " + i + "</p>");
        i++;
    }
    while(i <= 5);
    `

    const code3 = `
    for(var i=1; i<=5; i++) {
        document.write("<p>The number is " + i + "</p>");
    }
    `

    const code4 = `
    // An object with some properties 
    var person = {"name": "Clark", "surname": "Kent", "age": "36"};
 
    // Loop through all the properties in the object  
    for(var prop in person) {  
        document.write("<p>" + prop + " = " + person[prop] + "</p>"); 
    }
    `

    const code5 = `
    let letters = ["a", "b", "c", "d", "e", "f"];

    for(let letter of letters) {
        console.log(letter); // a,b,c,d,e,f
    }
    `

    return (
            <LessonBlock lesson={4} theme='JS' 
                textEng='https://www.tutorialrepublic.com/javascript-tutorial/javascript-loops.php' textUa='http://kytok.org.ua/?p=535'
                videoEng='https://www.youtube.com/watch?v=s9wW2PpJsmQ' videoUa='https://www.youtube.com/watch?v=S5OyL_vDpsg'
                map={['p', 's', 'p', 'c', 's', 'p', 'c', 's', 'p', 'c', 's', 'p', 'c', 's', 'p', 'c']}
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
                    }
                ]}
                />
    );
}