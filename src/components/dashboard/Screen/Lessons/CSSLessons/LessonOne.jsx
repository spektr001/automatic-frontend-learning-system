import React, { useState, useEffect } from 'react';
import { Snackbar } from '@material-ui/core';
import langSwitcher from '../../../../languageSwitcher';
import { LessonBlock } from '../LessonBlock';

export function CSSLessonOne() {

    const [snackOpen, setSnack] = useState(false)

    const handleClose = () => {
        setSnack(false)
    }

    useEffect(() => {
        if (localStorage.achiv3 === "") {
            setSnack(true)
            localStorage.setItem('achiv3', "check")
        }

    }, [snackOpen]);

    const code1 = `.text_block {
        background-color: green;
        color: blue;
        font-size: 20px;
        text-align: center;
    }`

    return (
        <>
            <LessonBlock lesson={1} theme='CSS' nextTheme='CSS'
                textEng='https://en.wikipedia.org/wiki/CSS' textUa='https://uk.wikipedia.org/wiki/CSS'
                videoEng='https://www.youtube.com/watch?v=6vbgZnQrpbU' videoUa='https://www.youtube.com/watch?v=xaw7D9sMZ1s'
                map={['p','p','p','p','p','c']}
                codes={[
                    {
                        lang: "css",
                        code: code1
                    }
                ]}
                />

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                autoHideDuration={5000}
                open={snackOpen}
                onClose={handleClose}
                message={langSwitcher("Achivement unlock! CSStart.", "Відкрито досягнення! CSSтарт.")}
            />
        </>
    );
}