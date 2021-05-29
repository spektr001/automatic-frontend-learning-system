import React from 'react';
import langSwitcher from '../../../../languageSwitcher';
import { LessonBlock } from '../LessonBlock';

export function HTMLessonThree() {

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
        <LessonBlock lesson={3} theme='HTML' nextTheme='HTML'
            textEng='https://www.w3schools.com/TAGS/tag_comment.asp' textUa='https://html-css.co.ua/dovidnuk-html-tags/'
            videoEng='https://www.youtube.com/watch?v=dmovVa0jseU' videoUa='https://www.youtube.com/watch?v=LRA-Y3Kzb6w&t=365s'
            map={['p', 's', 'p', 'p', 'c', 'r', 's', 'p', 'p', 'c', 'r', 's', 'p', 'p', 'c', 'r']}
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
                <div>
                    <h2>This is a heading in a div element</h2>
                    <p>This is some text in a div element.</p>
                </div>,
                <form method="get">
                    <label htmlFor="fname">First name:</label>
                    <input type="text" id="fname" name="fname" /><br /><br />
                    <label htmlFor="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" /><br /><br />
                    <input onClick={() => alert(langSwitcher('The form has been submitted!', 'Форму відправлено!'))} type="submit" value="Submit" />
                </form>,
                <button onClick={() => alert(langSwitcher('>Click!<', '>Клік!<'))} type="button">Click Me!</button>
            ]}
        />
    );
}