import React, { useState, useEffect } from 'react';
import { Snackbar } from '@material-ui/core';
import langSwitcher from '../../../../languageSwitcher';
import { LessonBlock } from '../LessonBlock';

export function JSLessonOne() {

    const [snackOpen, setSnack] = useState(false)

    const handleClose = () => {
        setSnack(false)
    }

    useEffect(() => {
        if (localStorage.achiv4 === "") {
            setSnack(true)
            localStorage.setItem('achiv4', "check")
        }

    }, [snackOpen]);

    const code1 = `
    const a = 1
    const b = 2

    function increment () {
       return a + b
    }

    increment() // 3
    }`

    return (
        <>
            <LessonBlock lesson={1} theme='JS' 
                textEng='https://en.wikipedia.org/wiki/JavaScript' textUa='https://uk.wikipedia.org/wiki/JavaScript'
                videoEng='https://www.youtube.com/watch?v=upDLs1sn7g4' videoUa='https://www.youtube.com/watch?v=pgirSlwRnHU&t=30s'
                map={['p','p','p', 'c', 'p', 'p', 'p']}
                codes={[
                    {
                        lang: "javascript",
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
                message={langSwitcher("Achivement unlock! JavaScript. Home.", "Відкрито досягнення! JavaScript. Home.")}
            />
        </>
    );
}