import React from 'react';
import { LessonBlock } from '../LessonBlock';

export function HTMLessonTwo() {

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
        <LessonBlock lesson={2} theme='HTML' nextTheme='HTML'
            textEng='https://www.elated.com/first-10-html-tags/' textUa='http://cpto.dp.ua/public_html/posibnyky/basic_html/urok2.html'
            videoEng='https://www.youtube.com/watch?v=bUEykHfMMnc' videoUa='https://www.youtube.com/watch?v=9hIPLU_knMo'
            map={['p', 'p', 'p', 's', 'p', 'c', 'r', 's', 'p', 'c', 'r', 's', 'p', 'p', 'c', 'r', 's', 'p', 'c', 'r', 's', 'p', 'c', 'r']}
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
                },
                {
                    lang: "html",
                    code: code4
                },
                {
                    lang: "html",
                    code: code5
                }
            ]}
            results={[
                <div>
                    <h1>This is heading 1</h1>
                    <h2>This is heading 2</h2>
                    <h3>This is heading 3</h3>
                    <h4>This is heading 4</h4>
                    <h5>This is heading 5</h5>
                    <h6>This is heading 6</h6>
                </div>,
                <div>
                    <p>Here is a first paragraph of text.</p>
                    <p>Here is a second paragraph of text.</p>
                    <p>Here is a third paragraph of text.</p>
                </div>,
                <div>
                    <p>Hello<br />
                    You delivered your assignment ontime.<br />
                    Thanks<br />
                    Mahnaz</p>
                </div>,
                <a href="https://www.google.com">Click for visit site!</a>,
                <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600" />
            ]}
        />
    );
}