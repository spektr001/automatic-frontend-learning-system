import React, { useEffect } from 'react';
import { Header } from '../introducePage/Header/Header'
/* import { Navbar } from './NavBar/Navbar'; */

export function Dashboard() {

    useEffect(() => {
        if (localStorage.length === 1) {
            let lang = window.confirm("Задля кращого досвіду роботи, рекомендую змінити мову інтерфейсу на англійську.\nБажаєш змінити мову на англійську?")
            localStorage.setItem('lang', lang ? 'eng' : 'ua')
        }
        })

        return (
            <>
                <Header />
               {/*  <Navbar /> */}
            </>
        );
}