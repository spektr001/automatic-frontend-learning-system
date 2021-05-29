import React, { useState, useEffect } from 'react';
import { Snackbar } from '@material-ui/core';
import langSwitcher from '../../../../languageSwitcher';
import { LessonBlock } from '../LessonBlock';

export function HTMLessonOne() {

    const [snackOpen, setSnack] = useState(false)

    const handleClose = () => {
        setSnack(false)
    }

    useEffect(() => {
        if (localStorage.achiv2 === "") {
            setSnack(true)
            localStorage.setItem('achiv2', "check")
        }

    }, [snackOpen]);

    const code = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`

    return (
        <>
            <LessonBlock lesson={1} theme='HTML' nextTheme='HTML'
                textEng='https://en.wikipedia.org/wiki/HTML' textUa='https://uk.wikipedia.org/wiki/HTML'
                videoEng='https://www.youtube.com/watch?v=u0OeZfIfBRI' videoUa='https://www.youtube.com/watch?v=jwZYK23hdMg'
                map={['p', 'p', 'p', 'c', 'p']}
                codes={[
                    {
                        lang: "html",
                        code: code
                    },]
                }
            />

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                autoHideDuration={5000}
                open={snackOpen}
                onClose={handleClose}
                message={langSwitcher("Achivement unlock! HTML.Beginning.", "Відкрито досягнення! HTML.Початок.")}
            />
        </>
    );
}