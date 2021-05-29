import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { SelectionScreen } from './SelectionScreen/SelectionScreen'
import { BeginingScreen } from './BeginingScreen/BeginingScreen'
import { HTMLessonOne } from './Lessons/HTMLessons/LessonOne'
import { HTMLessonTwo } from './Lessons/HTMLessons/LessonTwo'
import { HTMLessonThree } from './Lessons/HTMLessons/LessonThree'
import { HTMLessonFour } from './Lessons/HTMLessons/LessonFour'
import { CSSLessonOne } from './Lessons/CSSLessons/LessonOne'
import { CSSLessonTwo } from './Lessons/CSSLessons/LessonTwo'

export default function ScreenRouteMap() {

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/dashboard/CSS/lesson2" component={CSSLessonTwo} />
                    <Route path="/dashboard/CSS/lesson1" component={CSSLessonOne} />
                    <Route path="/dashboard/HTML/lesson4" component={HTMLessonFour} />
                    <Route path="/dashboard/HTML/lesson3" component={HTMLessonThree} />
                    <Route path="/dashboard/HTML/lesson2" component={HTMLessonTwo} />
                    <Route path="/dashboard/HTML/lesson1" component={HTMLessonOne} />
                    <Route path="/dashboard/begining" component={BeginingScreen} />
                    <Route path="/" component={SelectionScreen} />
                </Switch>
            </Router>
        </>
    )
}