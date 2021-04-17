import React, { useEffect } from 'react';
import { Header } from '../introducePage/Header/Header'
import ScreenRouteMap from './Screen/Screen';


export function Dashboard() {

    useEffect(() => {
        if (localStorage.lang === "") {
            let lang = window.confirm("Задля кращого досвіду роботи, рекомендую змінити мову інтерфейсу на англійську.\nБажаєш змінити мову на англійську?")
            localStorage.setItem('lang', lang ? 'eng' : 'ua')
        }
        })

        return (
            <>
                <Header />
                <ScreenRouteMap />
            </>
        );
}