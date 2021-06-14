import React, { useState, useEffect } from 'react';
import { Header } from '../introducePage/Header/Header'
import ScreenRouteMap from './Screen/Screen';
import { Snackbar } from '@material-ui/core';
import langSwitcher from '../languageSwitcher';


export function Dashboard() {

    const [snackOpen, setSnack] = useState(false)

    const handleClose = () => {
        setSnack(false)
    }

    useEffect(() => {
        if (localStorage.lang === "") {
            let lang = window.confirm("Задля кращого досвіду роботи, рекомендую змінити мову інтерфейсу на англійську.\nБажаєш змінити мову на англійську?")
            localStorage.setItem('lang', lang ? 'eng' : 'ua')
        }
    })

    useEffect(() => {
        if (localStorage.achiv1 === "") {
            setSnack(true)
            localStorage.setItem('achiv1', "check")
        }
        
    }, [snackOpen]);

    return (
        <>
            <Header />
            <ScreenRouteMap />

            <Snackbar
                anchorOrigin={{ 
                    vertical: 'top',
                    horizontal: 'right'}}
                autoHideDuration={5000}
                open={snackOpen}
                onClose={handleClose}
                message={langSwitcher("Achivement unlock! The beginning of time", "Відкрито досягнення! Начало начал")}
            />
        </>
    );
}