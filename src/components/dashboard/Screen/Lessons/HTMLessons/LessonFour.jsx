import React from 'react';
import { LessonBlock } from '../LessonBlock';

export function HTMLessonFour() {

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
            <LessonBlock lesson={4} theme='HTML' nextTheme='CSS'
                textEng='https://www.w3schools.com/tags/ref_attributes.asp' textUa='https://w3schoolsua.github.io/html/html_attributes.html'
                videoEng='https://www.youtube.com/watch?v=uIWmPL91Dn4' videoUa='https://www.youtube.com/watch?v=OOGpAXe8ZfE'
                map={['p', 'p', 'p', 'c', 'p', 's', 'c', 'r', 's', 'c', 'r']}
                codes={[
                    {
                        lang: "html",
                        code: code1
                    },
                    {
                        lang: "html",
                        code: code2
                    },
                    {
                        lang: "html",
                        code: code3
                    }
                ]}
                results={[
                    <button>Click Me!</button>,
                    <button onClick={() => alert('>Click!<')} type="button">Click Me!</button>
                ]}
            />
    );
}