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
import { CSSLessonThree } from './Lessons/CSSLessons/LessonThree'
import { CSSLessonFour } from './Lessons/CSSLessons/LessonFour'
import { JSLessonOne } from './Lessons/JSLessons/LessonOne'
import { JSLessonTwo } from './Lessons/JSLessons/LessonTwo'
import { JSLessonThree } from './Lessons/JSLessons/LessonThree'
import { JSLessonFour } from './Lessons/JSLessons/LessonFour'

export default function ScreenRouteMap() {

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/dashboard/JS/lesson4" component={JSLessonFour} />
                    <Route path="/dashboard/JS/lesson3" component={JSLessonThree} />
                    <Route path="/dashboard/JS/lesson2" component={JSLessonTwo} />
                    <Route path="/dashboard/JS/lesson1" component={JSLessonOne} />
                    <Route path="/dashboard/CSS/lesson4" component={CSSLessonFour} />
                    <Route path="/dashboard/CSS/lesson3" component={CSSLessonThree} />
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